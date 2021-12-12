import { useCallback } from "react";

import {
  CharacterEntity,
  characterStore,
  ResourceEntity,
  resourceStore,
  TalentProgress,
  TravelerTalentProgress,
} from "../entities";

import { CharacterId, characterIds, ElementType } from "../../data/characters";
import {
  characterResourcesMapping,
  TalentsResourceMapping,
  TalentsResourcesMapping,
  TravelerTalentsResourcesMapping,
} from "../../data/levelingData";

const calculateResourceTargetForTalents = (
  talents: TalentProgress,
  talentsResourceMapping: TalentsResourceMapping
): number => {
  return (
    talentsResourceMapping.attack[talents.attack.desired - 1] -
    talentsResourceMapping.attack[talents.attack.current - 1] +
    talentsResourceMapping.skill[talents.skill.desired - 1] -
    talentsResourceMapping.skill[talents.skill.current - 1] +
    talentsResourceMapping.burst[talents.burst.desired - 1] -
    talentsResourceMapping.burst[talents.burst.current - 1]
  );
};

const calculateResourceTargetForCharacter = (
  resource: ResourceEntity,
  character: CharacterEntity
): number => {
  let target = 0;

  const resourcesMapping = characterResourcesMapping[character.id];
  if (!resourcesMapping) {
    return 0;
  }

  const ascensionMapping = resourcesMapping.ascension[resource.id];
  if (ascensionMapping) {
    target +=
      ascensionMapping[character.ascension.desired] -
      ascensionMapping[character.ascension.current];
  }

  if (character.id === CharacterId.Traveler) {
    const talentsProgress = character.talentLevels as TravelerTalentProgress;

    const elements = [
      ElementType.Anemo,
      ElementType.Cryo,
      ElementType.Dendro,
      ElementType.Electro,
      ElementType.Geo,
      ElementType.Hydro,
      ElementType.Pyro,
    ];

    elements.forEach((element) => {
      const el = element as keyof TravelerTalentProgress;
      const travellerTalentsResourcesMapping = resourcesMapping.talents as TravelerTalentsResourcesMapping;
      const mapping = travellerTalentsResourcesMapping[el];
      if (mapping) {
        const talentsMapping = mapping[resource.id];
        if (talentsMapping) {
          target += calculateResourceTargetForTalents(
            talentsProgress[el],
            talentsMapping
          );
        }
      }
    });
  } else {
    if (resourcesMapping) {
      const talentProgress = character.talentLevels as TalentProgress;
      const talentsResourcesMapping = resourcesMapping.talents as TalentsResourcesMapping;
      const talentsMapping = talentsResourcesMapping[resource.id];
      if (talentsMapping) {
        target += calculateResourceTargetForTalents(
          talentProgress,
          talentsMapping
        );
      }
    }
  }
  return target;
};

const useResourceTarget = (resourceId: string): { target: number } => {
  const characters = characterStore.useEntityList(characterIds);
  const resource = resourceStore.useEntityValue(resourceId);

  const calculateResourceTarget = useCallback((): number => {
    return characters.reduce((sum, character) => {
      if (character.enabled) {
        const required = calculateResourceTargetForCharacter(
          resource,
          character
        );
        return sum + required;
      } else {
        return sum;
      }
    }, 0);
  }, [characters, resource]);

  return { target: calculateResourceTarget() };
};

export { useResourceTarget };
