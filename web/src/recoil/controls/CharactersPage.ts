import { atom } from 'recoil'

import { localStorageEffect } from '../helper'

export const hideUncheckedCheckbox = atom({
  key: '@GenshinPack/CharactersPage/hideUncheckedCheckbox',
  default: false,
  effects_UNSTABLE: [
    localStorageEffect({
      key: '@GenshinPack/CharactersPage__hideUncheckedCheckbox',
      restorer: (value, defaultValue) =>
        typeof value === 'boolean' ? value : defaultValue,
    }),
  ],
})

export const lockCharactersCheckbox = atom({
  key: '@GenshinPack/CharactersPage/lockCharactersCheckbox',
  default: false,
  effects_UNSTABLE: [
    localStorageEffect({
      key: '@GenshinPack/CharactersPage__lockCharactersCheckbox',
      restorer: (value, defaultValue) =>
        typeof value === 'boolean' ? value : defaultValue,
    }),
  ],
})

export const lockAscensionsCheckbox = atom({
  key: '@GenshinPack/CharactersPage/lockAscensionsCheckbox',
  default: false,
  effects_UNSTABLE: [
    localStorageEffect({
      key: '@GenshinPack/CharactersPage__lockAscensionsCheckbox',
      restorer: (value, defaultValue) =>
        typeof value === 'boolean' ? value : defaultValue,
    }),
  ],
})

export const lockDesiredCheckbox = atom({
  key: '@GenshinPack/CharactersPage/lockDesiredCheckbox',
  default: false,
  effects_UNSTABLE: [
    localStorageEffect({
      key: '@GenshinPack/CharactersPage__lockDesiredCheckbox',
      restorer: (value, defaultValue) =>
        typeof value === 'boolean' ? value : defaultValue,
    }),
  ],
})
