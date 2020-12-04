export enum ElementType {
  Pyro = 'Pyro',
  Hydro = 'Hydro',
  Electro = 'Electro',
  Cryo = 'Cryo',
  Anemo = 'Anemo',
  Geo = 'Geo',
  Dendro = 'Dendro',
  Adaptative = 'Adaptative',
}

export enum WeaponType {
  Bow = 'Bow',
  Catalyst = 'Catalyst',
  Claymore = 'Claymore',
  Sword = 'Sword',
  Polearm = 'Polearm',
}

export interface Character {
  sortId: number
  name: string
  element: ElementType
  weapon: WeaponType
  rarity: number
  imageUrl: string
}

export const characters = [
  {
    sortId: 0,
    name: 'Traveler',
    element: ElementType.Adaptative,
    weapon: WeaponType.Sword,
    rarity: 5,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/7/71/Character_Traveler_Thumb.png',
  },
  {
    sortId: 1,
    name: 'Klee',
    element: ElementType.Pyro,
    weapon: WeaponType.Catalyst,
    rarity: 5,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/c/c3/Character_Klee_Thumb.png',
  },
  {
    sortId: 2,
    name: 'Noelle',
    element: ElementType.Geo,
    weapon: WeaponType.Claymore,
    rarity: 4,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/a/ab/Character_Noelle_Thumb.png',
  },
  {
    sortId: 3,
    name: 'Fischl',
    element: ElementType.Electro,
    weapon: WeaponType.Bow,
    rarity: 4,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/1/14/Character_Fischl_Thumb.png',
  },
  {
    sortId: 4,
    name: 'Zhongli',
    element: ElementType.Geo,
    weapon: WeaponType.Polearm,
    rarity: 5,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/c/c2/Character_Zhongli_Thumb.png',
  },
] as Character[]
