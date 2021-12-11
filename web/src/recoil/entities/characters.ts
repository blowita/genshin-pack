import {
  Character as CharacterInfo,
  characters,
  ElementType,
  travelerId,
} from "../../data/characters";

import { createEntityStore } from "./store";

export interface ProgressCounter {
  current: number;
  desired: number;
}

export interface TalentProgress {
  attack: ProgressCounter;
  skill: ProgressCounter;
  burst: ProgressCounter;
}

export type TravelerTalentProgress = Omit<
  Record<ElementType, TalentProgress>,
  ElementType.Adaptative
>;

interface CharacterState {
  formatVersion: string;
  enabled: boolean;
  ascension: ProgressCounter;
  level: ProgressCounter;
  travelerCurrentElement: ElementType | null;
  talentLevels: TalentProgress | TravelerTalentProgress;
}

export type CharacterEntity = CharacterInfo & CharacterState;

const currentFormatVersion = "1.0";

const generateCharacter = (id: string): CharacterEntity => {
  const character = characters.find((c) => c.id === id);

  if (!character) {
    throw new Error(`Character with id ${id} doesn't exist`);
  }

  if (character.id === travelerId) {
    return {
      ...character,
      formatVersion: currentFormatVersion,
      enabled: false,
      ascension: { current: 0, desired: 0 },
      level: { current: 1, desired: 1 },
      travelerCurrentElement: ElementType.Anemo,
      talentLevels: {
        [ElementType.Anemo]: {
          attack: { current: 1, desired: 1 },
          skill: { current: 1, desired: 1 },
          burst: { current: 1, desired: 1 },
        },
        [ElementType.Cryo]: {
          attack: { current: 1, desired: 1 },
          skill: { current: 1, desired: 1 },
          burst: { current: 1, desired: 1 },
        },
        [ElementType.Dendro]: {
          attack: { current: 1, desired: 1 },
          skill: { current: 1, desired: 1 },
          burst: { current: 1, desired: 1 },
        },
        [ElementType.Electro]: {
          attack: { current: 1, desired: 1 },
          skill: { current: 1, desired: 1 },
          burst: { current: 1, desired: 1 },
        },
        [ElementType.Geo]: {
          attack: { current: 1, desired: 1 },
          skill: { current: 1, desired: 1 },
          burst: { current: 1, desired: 1 },
        },
        [ElementType.Hydro]: {
          attack: { current: 1, desired: 1 },
          skill: { current: 1, desired: 1 },
          burst: { current: 1, desired: 1 },
        },
        [ElementType.Pyro]: {
          attack: { current: 1, desired: 1 },
          skill: { current: 1, desired: 1 },
          burst: { current: 1, desired: 1 },
        },
      },
    };
  } else {
    return {
      ...character,
      formatVersion: currentFormatVersion,
      enabled: false,
      ascension: { current: 0, desired: 0 },
      level: { current: 1, desired: 1 },
      travelerCurrentElement: null,
      talentLevels: {
        attack: { current: 1, desired: 1 },
        skill: { current: 1, desired: 1 },
        burst: { current: 1, desired: 1 },
      },
    };
  }
};

interface CharacterStorage extends CharacterState {
  id: string;
  name: string;
}

const preLocalStorageSet = (value: CharacterEntity): CharacterStorage => ({
  id: value.id,
  name: value.name,
  formatVersion: value.formatVersion,
  enabled: value.enabled,
  ascension: value.ascension,
  level: value.level,
  travelerCurrentElement: value.travelerCurrentElement,
  talentLevels: value.talentLevels,
});

interface CharacterStorage1v0 {
  id: string;
  name: string;
  formatVersion: number;
  enabled: boolean;
  ascension: ProgressCounter;
  level: ProgressCounter;
  travelerCurrentElement: ElementType | null;
  talentLevels: TalentProgress | TravelerTalentProgress;
}

type DeprecatedCharacterStorageTypes = CharacterStorage1v0;

const fixFormatVersion = (
  parsed: DeprecatedCharacterStorageTypes | CharacterStorage | undefined
): CharacterStorage => {
  if (!parsed) {
    throw new Error("Unable to parse stored data for a character");
  }
  if (parsed.formatVersion) {
    let bumped: DeprecatedCharacterStorageTypes | CharacterStorage | undefined;
    switch (parsed.formatVersion) {
      case currentFormatVersion:
        return parsed as CharacterStorage;
      case "1.0": {
        const deprecated = parsed as CharacterStorage1v0;
        bumped = {
          ...deprecated,
          formatVersion: "1.1",
        };
        break;
      }
    }
    return fixFormatVersion(bumped);
  }
  throw new Error(
    `Unable to parse stored data for character with id ${parsed.id}`
  );
};

const postLocalStorageGet = (parsed: CharacterStorage): CharacterEntity => {
  const characterInfo = characters.find((i) => i.id === parsed.id);

  if (!characterInfo) {
    throw new Error(
      `Unable to parse stored data for character with id ${parsed.id}`
    );
  }

  return {
    ...fixFormatVersion(parsed),
    ...characterInfo,
  };
};

export default createEntityStore<CharacterEntity, CharacterStorage>(
  "character",
  generateCharacter,
  preLocalStorageSet,
  postLocalStorageGet
);
