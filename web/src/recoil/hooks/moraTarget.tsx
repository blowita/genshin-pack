import React from "react";

import {
  CharacterEntity,
  characterStore,
  ProgressCounter,
  TalentProgress,
  TravelerTalentProgress,
} from "../entities";

import { characterIds, ElementType, travelerId } from "../../data/characters";
import {
  expTable,
  ascensionCost,
  talentUpgradeCost,
} from "../../data/levelingData";

const calculateMoraForLeveling = (character: CharacterEntity): number => {
  return (
    (expTable[character.level.desired - 1] -
      expTable[character.level.current - 1]) /
      5 +
    (ascensionCost[character.ascension.desired] -
      ascensionCost[character.ascension.current])
  );
};

const calculateMoraForTalent = (progressCounter: ProgressCounter): number => {
  return (
    talentUpgradeCost[progressCounter.desired - 1] -
    talentUpgradeCost[progressCounter.current - 1]
  );
};

const calculateMoraForTalents = (character: CharacterEntity): number => {
  let attackMora = 0;
  let skillMora = 0;
  let burstMora = 0;

  if (character.id === travelerId) {
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
      attackMora += calculateMoraForTalent(talentsProgress[el].attack);
      skillMora += calculateMoraForTalent(talentsProgress[el].skill);
      burstMora += calculateMoraForTalent(talentsProgress[el].burst);
    });
  } else {
    const talentProgress = character.talentLevels as TalentProgress;

    attackMora = calculateMoraForTalent(talentProgress.attack);
    skillMora = calculateMoraForTalent(talentProgress.skill);
    burstMora = calculateMoraForTalent(talentProgress.burst);
  }

  return attackMora + skillMora + burstMora;
};

const calculateMoraForCharacter = (character: CharacterEntity): number => {
  return (
    calculateMoraForLeveling(character) + calculateMoraForTalents(character)
  );
};

const useMoraTarget = (): { mora: number } => {
  const characters = characterStore.useEntityList(characterIds);

  const calculateMoraTarget = (): number => {
    return characters.reduce((sum, character) => {
      const mora = character.enabled ? calculateMoraForCharacter(character) : 0;
      return sum + mora;
    }, 0);
  };

  return {
    mora: calculateMoraTarget(),
  };
};

export { useMoraTarget };
