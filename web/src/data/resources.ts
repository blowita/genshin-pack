export type Resource = {
  sortId: number
  name: string
  type:
    | 'Character Ascension Material'
    | 'Talent Level-Up Material'
    | 'Weapon Ascension Material'
  rarity: number
  imageUrl: string
}

export const resources = [
  {
    sortId: 0,
    name: "Dvalin's Plume",
    type: 'Talent Level-Up Material',
    rarity: 5,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/b/bf/Item_Dvalin%27s_Plume.png',
  },
  {
    sortId: 1,
    name: "Dvalin's Claw",
    type: 'Talent Level-Up Material',
    rarity: 5,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/a/a8/Item_Dvalin%27s_Claw.png',
  },
  {
    sortId: 2,
    name: "Dvalin's Sigh",
    type: 'Talent Level-Up Material',
    rarity: 5,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/0/07/Item_Dvalin%27s_Sigh.png',
  },
  {
    sortId: 3,
    name: 'Tail of Boreas',
    type: 'Talent Level-Up Material',
    rarity: 5,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/6/66/Item_Tail_of_Boreas.png',
  },
  {
    sortId: 4,
    name: 'Ring of Boreas',
    type: 'Talent Level-Up Material',
    rarity: 5,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/d/d6/Item_Ring_of_Boreas.png',
  },
  {
    sortId: 5,
    name: 'Spirit Locket of Boreas',
    type: 'Talent Level-Up Material',
    rarity: 5,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/8/81/Item_Spirit_Locket_of_Boreas.png',
  },
  {
    sortId: 6,
    name: 'Tusk of Monoceros Caeli',
    type: 'Talent Level-Up Material',
    rarity: 5,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/1/1c/Item_Tusk_of_Monoceros_Caeli.png',
  },
  {
    sortId: 7,
    name: 'Shard of a Foul Legacy',
    type: 'Talent Level-Up Material',
    rarity: 5,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/4/48/Item_Shard_of_a_Foul_Legacy.png',
  },
  {
    sortId: 8,
    name: 'Shadow of the Warrior',
    type: 'Talent Level-Up Material',
    rarity: 5,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/5/5d/Item_Shadow_of_the_Warrior.png',
  },
  {
    sortId: 20,
    name: 'Hurricane Seed',
    type: 'Character Ascension Material',
    rarity: 4,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/5/5e/Item_Hurricane_Seed.png',
  },
  {
    sortId: 21,
    name: 'Lightning Prism',
    type: 'Character Ascension Material',
    rarity: 4,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/e/ee/Item_Lightning_Prism.png',
  },
  {
    sortId: 22,
    name: 'Basalt Pillar',
    type: 'Character Ascension Material',
    rarity: 4,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/b/bc/Item_Basalt_Pillar.png',
  },
  {
    sortId: 23,
    name: 'Hoarfrost Core',
    type: 'Character Ascension Material',
    rarity: 4,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/b/b5/Item_Hoarfrost_Core.png',
  },
  {
    sortId: 24,
    name: 'Everflame Seed',
    type: 'Character Ascension Material',
    rarity: 4,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/b/b2/Item_Everflame_Seed.png',
  },
  {
    sortId: 25,
    name: 'Cleansing Heart',
    type: 'Character Ascension Material',
    rarity: 4,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/0/02/Item_Cleansing_Heart.png',
  },
  {
    sortId: 31,
    name: "Boreal Wolf's Milk Tooth",
    type: 'weapon ascension material',
    rarity: 2,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/3/33/Item_Boreal_Wolf%27s_Milk_Tooth.png',
  },
  {
    sortId: 32,
    name: "Boreal Wolf's Cracked Tooth",
    type: 'weapon ascension material',
    rarity: 3,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Boreal_Wolf%27s_Cracked_Tooth.png',
  },
  {
    sortId: 33,
    name: "Boreal Wolf's Broken Fang",
    type: 'weapon ascension material',
    rarity: 4,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/9/98/Item_Boreal_Wolf%27s_Broken_Fang.png',
  },
  {
    sortId: 34,
    name: "Boreal Wolf's Nostalgia",
    type: 'weapon ascension material',
    rarity: 5,
    imageUrl:
      'https://static.wikia.nocookie.net/gensin-impact/images/e/e0/Item_Boreal_Wolf%27s_Nostalgia.png',
  },
] as Resource[]
