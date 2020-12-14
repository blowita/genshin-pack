import {
  Character as CharacterInfo,
  characters,
  ElementType,
} from '../data/characters'

import { createEntityStore } from './store'

interface ProgressCounter {
  current: number
  desired: number
}

interface TalentProgress {
  attack: ProgressCounter
  skill: ProgressCounter
  burst: ProgressCounter
}

interface TravelerTalentProgress {
  [ElementType.Anemo]: TalentProgress
  [ElementType.Cryo]: TalentProgress
  [ElementType.Dendro]: TalentProgress
  [ElementType.Electro]: TalentProgress
  [ElementType.Geo]: TalentProgress
  [ElementType.Hydro]: TalentProgress
  [ElementType.Pyro]: TalentProgress
}

export interface CharacterState {
  enabled: boolean
  ascension: ProgressCounter
  level: ProgressCounter
  travelerCurrentElement: ElementType | null
  talentLevels: TalentProgress | TravelerTalentProgress
}
export type CharacterEntity = CharacterInfo & CharacterState

const generateCharacter = (name: string): CharacterEntity => {
  const character = characters.find((c) => c.name === name)

  if (!character) {
    throw new Error(`Character ${name} doesn't exist`)
  }

  if (name !== 'Traveler') {
    return {
      ...character,
      enabled: false,
      ascension: { current: 0, desired: 0 },
      level: { current: 1, desired: 1 },
      travelerCurrentElement: null,
      talentLevels: {
        attack: { current: 1, desired: 1 },
        skill: { current: 1, desired: 1 },
        burst: { current: 1, desired: 1 },
      },
    }
  } else {
    return {
      ...character,
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
    }
  }
}

interface CharacterStorage extends CharacterState {
  name: string
}

const preLocalStorageSet = (value: CharacterEntity): CharacterStorage => ({
  name: value.name,
  enabled: value.enabled,
  ascension: value.ascension,
  level: value.level,
  travelerCurrentElement: value.travelerCurrentElement,
  talentLevels: value.talentLevels,
})

const postLocalStorageGet = (parsed: CharacterStorage): CharacterEntity => {
  const characterInfo = characters.find((i) => i.name === parsed.name)

  if (!characterInfo) {
    throw new Error(
      `Unable to parse character ${parsed.name} data from localStorage`
    )
  }

  return {
    ...characterInfo,
    ...parsed,
  }
}

export default createEntityStore<CharacterEntity, CharacterStorage>(
  'character',
  (name) => generateCharacter(name),
  preLocalStorageSet,
  postLocalStorageGet
)
