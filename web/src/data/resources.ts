export enum ResourceType {
  CharacterAscension = "Character Ascension Material",
  CharacterExp = "Character EXP Material",
  CommonAscension = "Common Ascension Material",
  CommonCurrency = "Common Currency",
  TalentLevelUp = "Talent Level-Up Material",
  WeaponAscension = "Weapon Ascension Material",
}

export interface Resource {
  sortId: number;
  name: string;
  type: ResourceType;
  rarity: number;
  imageUrl: string;
}

export const resources: Resource[] = [
  {
    sortId: 0,
    name: "Mora",
    type: ResourceType.CommonCurrency,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/8/84/Icon_Mora.png",
  },
  {
    sortId: 1,
    name: "Hero's Wit",
    type: ResourceType.CharacterExp,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/2/26/Item_Hero%27s_Wit.png",
  },
  {
    sortId: 2,
    name: "Adventurer's Experience",
    type: ResourceType.CharacterExp,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/07/Item_Adventurer%27s_Experience.png",
  },
  {
    sortId: 3,
    name: "Wanderer's Advice",
    type: ResourceType.CharacterExp,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/6/60/Item_Wanderer%27s_Advice.png",
  },
  {
    sortId: 11,
    name: "Slime Concentrate",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/d/d8/Item_Slime_Concentrate.png",
  },
  {
    sortId: 12,
    name: "Slime Secretions",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Item_Slime_Secretions.png",
  },
  {
    sortId: 13,
    name: "Slime Condensate",
    type: ResourceType.CommonAscension,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/1/1c/Item_Slime_Condensate.png",
  },
  {
    sortId: 14,
    name: "Ominous Mask",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/91/Item_Ominous_Mask.png",
  },
  {
    sortId: 15,
    name: "Stained Mask",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/2/2f/Item_Stained_Mask.png",
  },
  {
    sortId: 16,
    name: "Damaged Mask",
    type: ResourceType.CommonAscension,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/6/69/Item_Damaged_Mask.png",
  },
  {
    sortId: 17,
    name: "Forbidden Curse Scroll",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/f/f0/Item_Forbidden_Curse_Scroll.png",
  },
  {
    sortId: 18,
    name: "Sealed Scroll",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/91/Item_Sealed_Scroll.png",
  },
  {
    sortId: 19,
    name: "Divining Scroll",
    type: ResourceType.CommonAscension,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/7/74/Item_Divining_Scroll.png",
  },
  {
    sortId: 20,
    name: "Weathered Arrowhead",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/2/22/Item_Weathered_Arrowhead.png",
  },
  {
    sortId: 21,
    name: "Sharp Arrowhead",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/0d/Item_Sharp_Arrowhead.png",
  },
  {
    sortId: 22,
    name: "Firm Arrowhead",
    type: ResourceType.CommonAscension,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/01/Item_Firm_Arrowhead.png",
  },
  {
    sortId: 23,
    name: "Black Crystal Horn",
    type: ResourceType.CommonAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/6/64/Item_Black_Crystal_Horn.png",
  },
  {
    sortId: 24,
    name: "Black Bronze Horn",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/42/Item_Black_Bronze_Horn.png",
  },
  {
    sortId: 25,
    name: "Heavy Horn",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/c/c0/Item_Heavy_Horn.png",
  },
  {
    sortId: 26,
    name: "Ley Line Sprouts",
    type: ResourceType.CommonAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/7/76/Item_Ley_Line_Sprout.png",
  },
  {
    sortId: 27,
    name: "Dead Ley Line Leaves",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/d/d2/Item_Dead_Ley_Line_Leaves.png",
  },
  {
    sortId: 28,
    name: "Dead Ley Line Branch",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/7/77/Item_Dead_Ley_Line_Branch.png",
  },
  {
    sortId: 29,
    name: "Chaos Core",
    type: ResourceType.CommonAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/3e/Item_Chaos_Core.png",
  },
  {
    sortId: 30,
    name: "Chaos Circuit",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/1/1f/Item_Chaos_Circuit.png",
  },
  {
    sortId: 31,
    name: "Chaos Device",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/47/Item_Chaos_Device.png",
  },
  {
    sortId: 32,
    name: "Mist Grass Wick",
    type: ResourceType.CommonAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/90/Item_Mist_Grass_Wick.png",
  },
  {
    sortId: 33,
    name: "Mist Grass",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/7/73/Item_Mist_Grass.png",
  },
  {
    sortId: 34,
    name: "Mist Grass Pollen",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/32/Item_Mist_Grass_Pollen.png",
  },
  {
    sortId: 35,
    name: "Inspector's Sacrificial Knife",
    type: ResourceType.CommonAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/5/53/Item_Inspector%27s_Sacrificial_Knife.png",
  },
  {
    sortId: 36,
    name: "Agent's Sacrificial Knife",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/5/55/Item_Agent%27s_Sacrificial_Knife.png",
  },
  {
    sortId: 37,
    name: "Hunter's Sacrificial Knife",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/2/28/Item_Hunter%27s_Sacrificial_Knife.png",
  },
  {
    sortId: 38,
    name: "Lieutenant's Insignia",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/d/db/Item_Lieutenant%27s_Insignia.png",
  },
  {
    sortId: 39,
    name: "Sergeant's Insignia",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/a/a5/Item_Sergeant%27s_Insignia.png",
  },
  {
    sortId: 40,
    name: "Recruit's Insignia",
    type: ResourceType.CommonAscension,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/b2/Item_Recruit%27s_Insignia.png",
  },
  {
    sortId: 41,
    name: "Golden Raven Insignia",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Golden_Raven_Insignia.png",
  },
  {
    sortId: 42,
    name: "Silver Raven Insignia",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/44/Item_Silver_Raven_Insignia.png",
  },
  {
    sortId: 43,
    name: "Treasure Hoarder Insignia",
    type: ResourceType.CommonAscension,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/c/c9/Item_Treasure_Hoarder_Insignia.png",
  },
  {
    sortId: 44,
    name: "Energy Nectar",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Item_Energy_Nectar.png",
  },
  {
    sortId: 45,
    name: "Shimmering Nectar",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/46/Item_Shimmering_Nectar.png",
  },
  {
    sortId: 46,
    name: "Whopperflower Nectar",
    type: ResourceType.CommonAscension,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/8/8b/Item_Whopperflower_Nectar.png",
  },
  {
    sortId: 47,
    name: "Fossilized Bone Shard",
    type: ResourceType.CommonAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/6/60/Item_Fossilized_Bone_Shard.png",
  },
  {
    sortId: 48,
    name: "Sturdy Bone Shard",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/f/ff/Item_Sturdy_Bone_Shard.png",
  },
  {
    sortId: 49,
    name: "Fragile Bone Shard",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/e/e5/Item_Fragile_Bone_Shard.png",
  },
  {
    sortId: 50,
    name: "Famed Handguard",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/4e/Item_Famed_Handguard.png",
  },
  {
    sortId: 51,
    name: "Kageuchi Handguard",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Kageuchi_Handguard.png",
  },
  {
    sortId: 52,
    name: "Old Handguard",
    type: ResourceType.CommonAscension,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/e/e2/Item_Old_Handguard.png",
  },
  {
    sortId: 53,
    name: "Chaos Oculus",
    type: ResourceType.CommonAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/be/Item_Chaos_Oculus.png",
  },
  {
    sortId: 54,
    name: "Chaos Axis",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/e/e0/Item_Chaos_Axis.png",
  },
  {
    sortId: 55,
    name: "Chaos Gear",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/1/17/Item_Chaos_Gear.png",
  },
  {
    sortId: 56,
    name: "Polarizing Prism",
    type: ResourceType.CommonAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Item_Polarizing_Prism.png",
  },
  {
    sortId: 57,
    name: "Crystal Prism",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/f/fe/Item_Crystal_Prism.png",
  },
  {
    sortId: 58,
    name: "Dismal Prism",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/3d/Item_Dismal_Prism.png",
  },
  {
    sortId: 59,
    name: "Spectral Nucleus",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/e/ea/Item_Spectral_Nucleus.png",
  },
  {
    sortId: 60,
    name: "Spectral Heart",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/6/67/Item_Spectral_Heart.png",
  },
  {
    sortId: 61,
    name: "Spectral Husk",
    type: ResourceType.CommonAscension,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/d/d2/Item_Spectral_Husk.png",
  },
  {
    sortId: 62,
    name: "Concealed Talon",
    type: ResourceType.CommonAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/7/79/Item_Concealed_Talon.png",
  },
  {
    sortId: 63,
    name: "Concealed Unguis",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/97/Item_Concealed_Unguis.png",
  },
  {
    sortId: 64,
    name: "Concealed Claw",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/6/69/Item_Concealed_Claw.png",
  },
  {
    sortId: 100,
    name: "Dvalin's Plume",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/bf/Item_Dvalin%27s_Plume.png",
  },
  {
    sortId: 101,
    name: "Dvalin's Claw",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/a/a8/Item_Dvalin%27s_Claw.png",
  },
  {
    sortId: 102,
    name: "Dvalin's Sigh",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/07/Item_Dvalin%27s_Sigh.png",
  },
  {
    sortId: 103,
    name: "Tail of Boreas",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/6/66/Item_Tail_of_Boreas.png",
  },
  {
    sortId: 104,
    name: "Ring of Boreas",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/d/d6/Item_Ring_of_Boreas.png",
  },
  {
    sortId: 105,
    name: "Spirit Locket of Boreas",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/8/81/Item_Spirit_Locket_of_Boreas.png",
  },
  {
    sortId: 106,
    name: "Tusk of Monoceros Caeli",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/1/1c/Item_Tusk_of_Monoceros_Caeli.png",
  },
  {
    sortId: 107,
    name: "Shard of a Foul Legacy",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/48/Item_Shard_of_a_Foul_Legacy.png",
  },
  {
    sortId: 108,
    name: "Shadow of the Warrior",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/5/5d/Item_Shadow_of_the_Warrior.png",
  },
  {
    sortId: 109,
    name: "Dragon Lord's Crown",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/02/Item_Dragon_Lord%27s_Crown.png",
  },
  {
    sortId: 110,
    name: "Bloodjade Branch",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/b1/Item_Bloodjade_Branch.png",
  },
  {
    sortId: 111,
    name: "Gilded Scale",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Item_Gilded_Scale.png",
  },
  {
    sortId: 112,
    name: "Molten Moment",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/44/Item_Molten_Moment.png",
  },
  {
    sortId: 113,
    name: "Hellfire Butterfly",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/1/16/Item_Hellfire_Butterfly.png",
  },
  {
    sortId: 114,
    name: "Ashen Heart",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/2/29/Item_Ashen_Heart.png",
  },
  {
    sortId: 200,
    name: "Hurricane Seed",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/5/5e/Item_Hurricane_Seed.png",
  },
  {
    sortId: 201,
    name: "Lightning Prism",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/e/ee/Item_Lightning_Prism.png",
  },
  {
    sortId: 202,
    name: "Basalt Pillar",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/bc/Item_Basalt_Pillar.png",
  },
  {
    sortId: 203,
    name: "Hoarfrost Core",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/b5/Item_Hoarfrost_Core.png",
  },
  {
    sortId: 204,
    name: "Everflame Seed",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/b2/Item_Everflame_Seed.png",
  },
  {
    sortId: 205,
    name: "Cleansing Heart",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/02/Item_Cleansing_Heart.png",
  },
  {
    sortId: 206,
    name: "Juvenile Jade",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/f/f1/Item_Juvenile_Jade.png",
  },
  {
    sortId: 207,
    name: "Crystalline Bloom",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/d/dc/Item_Crystalline_Bloom.png",
  },
  {
    sortId: 208,
    name: "Marionette Core",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/1/1d/Item_Marionette_Core.png",
  },
  {
    sortId: 209,
    name: "Perpetual Heart",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/c/c1/Item_Perpetual_Heart.png",
  },
  {
    sortId: 210,
    name: "Smoldering Pearl",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/a/ad/Item_Smoldering_Pearl.png",
  },
  {
    sortId: 211,
    name: "Dew of Repudiation",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/f/fa/Item_Dew_of_Repudiation.png",
  },
  {
    sortId: 212,
    name: "Storm Beads",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/2/28/Item_Storm_Beads.png",
  },
  {
    sortId: 213,
    name: "Riftborn Regalia",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/34/Item_Riftborn_Regalia.png",
  },
  {
    sortId: 301,
    name: "Brilliant Diamond Gemstone",
    type: ResourceType.CharacterAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Item_Brilliant_Diamond_Gemstone.png",
  },
  {
    sortId: 302,
    name: "Brilliant Diamond Chunk",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/7/74/Item_Brilliant_Diamond_Chunk.png",
  },
  {
    sortId: 303,
    name: "Brilliant Diamond Fragment",
    type: ResourceType.CharacterAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/3d/Item_Brilliant_Diamond_Fragment.png",
  },
  {
    sortId: 304,
    name: "Brilliant Diamond Sliver",
    type: ResourceType.CharacterAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/7/72/Item_Brilliant_Diamond_Sliver.png",
  },
  {
    sortId: 401,
    name: "Agnidus Agate Gemstone",
    type: ResourceType.CharacterAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/0d/Item_Agnidus_Agate_Gemstone.png",
  },
  {
    sortId: 402,
    name: "Agnidus Agate Chunk",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/00/Item_Agnidus_Agate_Chunk.png",
  },
  {
    sortId: 403,
    name: "Agnidus Agate Fragment",
    type: ResourceType.CharacterAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/e/ec/Item_Agnidus_Agate_Fragment.png",
  },
  {
    sortId: 404,
    name: "Agnidus Agate Sliver",
    type: ResourceType.CharacterAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/5/51/Item_Agnidus_Agate_Sliver.png",
  },
  {
    sortId: 411,
    name: "Varunada Lazurite Gemstone",
    type: ResourceType.CharacterAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/a/a4/Item_Varunada_Lazurite_Gemstone.png",
  },
  {
    sortId: 412,
    name: "Varunada Lazurite Chunk",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Item_Varunada_Lazurite_Chunk.png",
  },
  {
    sortId: 413,
    name: "Varunada Lazurite Fragment",
    type: ResourceType.CharacterAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/f/f6/Item_Varunada_Lazurite_Fragment.png",
  },
  {
    sortId: 414,
    name: "Varunada Lazurite Sliver",
    type: ResourceType.CharacterAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/f/f8/Item_Varunada_Lazurite_Sliver.png",
  },
  {
    sortId: 421,
    name: "Vajrada Amethyst Gemstone",
    type: ResourceType.CharacterAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/be/Item_Vajrada_Amethyst_Gemstone.png",
  },
  {
    sortId: 422,
    name: "Vajrada Amethyst Chunk",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/c/c1/Item_Vajrada_Amethyst_Chunk.png",
  },
  {
    sortId: 423,
    name: "Vajrada Amethyst Fragment",
    type: ResourceType.CharacterAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/c/cb/Item_Vajrada_Amethyst_Fragment.png",
  },
  {
    sortId: 424,
    name: "Vajrada Amethyst Sliver",
    type: ResourceType.CharacterAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/39/Item_Vajrada_Amethyst_Sliver.png",
  },
  {
    sortId: 431,
    name: "Vayuda Turquoise Gemstone",
    type: ResourceType.CharacterAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/32/Item_Vayuda_Turquoise_Gemstone.png",
  },
  {
    sortId: 432,
    name: "Vayuda Turquoise Chunk",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Item_Vayuda_Turquoise_Chunk.png",
  },
  {
    sortId: 433,
    name: "Vayuda Turquoise Fragment",
    type: ResourceType.CharacterAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Vayuda_Turquoise_Fragment.png",
  },
  {
    sortId: 434,
    name: "Vayuda Turquoise Sliver",
    type: ResourceType.CharacterAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/93/Item_Vayuda_Turquoise_Sliver.png",
  },
  {
    sortId: 441,
    name: "Shivada Jade Gemstone",
    type: ResourceType.CharacterAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/e/e9/Item_Shivada_Jade_Gemstone.png",
  },
  {
    sortId: 442,
    name: "Shivada Jade Chunk",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/41/Item_Shivada_Jade_Chunk.png",
  },
  {
    sortId: 443,
    name: "Shivada Jade Fragment",
    type: ResourceType.CharacterAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/9a/Item_Shivada_Jade_Fragment.png",
  },
  {
    sortId: 444,
    name: "Shivada Jade Sliver",
    type: ResourceType.CharacterAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/8/87/Item_Shivada_Jade_Sliver.png",
  },
  {
    sortId: 451,
    name: "Prithiva Topaz Gemstone",
    type: ResourceType.CharacterAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/e/eb/Item_Prithiva_Topaz_Gemstone.png",
  },
  {
    sortId: 452,
    name: "Prithiva Topaz Chunk",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/4b/Item_Prithiva_Topaz_Chunk.png",
  },
  {
    sortId: 453,
    name: "Prithiva Topaz Fragment",
    type: ResourceType.CharacterAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/3e/Item_Prithiva_Topaz_Fragment.png",
  },
  {
    sortId: 454,
    name: "Prithiva Topaz Sliver",
    type: ResourceType.CharacterAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Item_Prithiva_Topaz_Sliver.png",
  },
  {
    sortId: 501,
    name: "Philosophies of Freedom",
    type: ResourceType.TalentLevelUp,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/c/c4/Item_Philosophies_of_Freedom.png",
  },
  {
    sortId: 502,
    name: "Guide to Freedom",
    type: ResourceType.TalentLevelUp,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/1/1a/Item_Guide_to_Freedom.png",
  },
  {
    sortId: 503,
    name: "Teachings of Freedom",
    type: ResourceType.TalentLevelUp,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/3a/Item_Teachings_of_Freedom.png",
  },
  {
    sortId: 511,
    name: "Philosophies of Resistance",
    type: ResourceType.TalentLevelUp,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Item_Philosophies_of_Resistance.png",
  },
  {
    sortId: 512,
    name: "Guide to Resistance",
    type: ResourceType.TalentLevelUp,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/bf/Item_Guide_to_Resistance.png",
  },
  {
    sortId: 513,
    name: "Teachings of Resistance",
    type: ResourceType.TalentLevelUp,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Item_Teachings_of_Resistance.png",
  },
  {
    sortId: 521,
    name: "Philosophies of Ballad",
    type: ResourceType.TalentLevelUp,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/b4/Item_Teachings_of_Ballad.png",
  },
  {
    sortId: 522,
    name: "Guide to Ballad",
    type: ResourceType.TalentLevelUp,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/2/2f/Item_Guide_to_Ballad.png",
  },
  {
    sortId: 523,
    name: "Teachings of Ballad",
    type: ResourceType.TalentLevelUp,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/7/7e/Item_Philosophies_of_Ballad.png",
  },
  {
    sortId: 531,
    name: "Philosophies of Prosperity",
    type: ResourceType.TalentLevelUp,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/bd/Item_Philosophies_of_Prosperity.png",
  },
  {
    sortId: 532,
    name: "Guide to Prosperity",
    type: ResourceType.TalentLevelUp,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/6/67/Item_Guide_to_Prosperity.png",
  },
  {
    sortId: 533,
    name: "Teachings of Prosperity",
    type: ResourceType.TalentLevelUp,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/9e/Item_Teachings_of_Prosperity.png",
  },
  {
    sortId: 541,
    name: "Philosophies of Diligence",
    type: ResourceType.TalentLevelUp,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/c/c2/Item_Philosophies_of_Diligence.png",
  },
  {
    sortId: 542,
    name: "Guide to Diligence",
    type: ResourceType.TalentLevelUp,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/9f/Item_Guide_to_Diligence.png",
  },
  {
    sortId: 543,
    name: "Teachings of Diligence",
    type: ResourceType.TalentLevelUp,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/a/a7/Item_Teachings_of_Diligence.png",
  },
  {
    sortId: 551,
    name: "Philosophies of Gold",
    type: ResourceType.TalentLevelUp,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/01/Item_Philosophies_of_Gold.png",
  },
  {
    sortId: 552,
    name: "Guide to Gold",
    type: ResourceType.TalentLevelUp,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/43/Item_Guide_to_Gold.png",
  },
  {
    sortId: 553,
    name: "Teachings of Gold",
    type: ResourceType.TalentLevelUp,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/7/7f/Item_Teachings_of_Gold.png",
  },
  {
    sortId: 561,
    name: "Philosophies of Transience",
    type: ResourceType.TalentLevelUp,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/2/27/Item_Philosophies_of_Transience.png",
  },
  {
    sortId: 562,
    name: "Guide to Transience",
    type: ResourceType.TalentLevelUp,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/b0/Item_Guide_to_Transience.png",
  },
  {
    sortId: 563,
    name: "Teachings of Transience",
    type: ResourceType.TalentLevelUp,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/4e/Item_Teachings_of_Transience.png",
  },
  {
    sortId: 571,
    name: "Philosophies of Elegance",
    type: ResourceType.TalentLevelUp,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/6/6f/Item_Philosophies_of_Elegance.png",
  },
  {
    sortId: 572,
    name: "Guide to Elegance",
    type: ResourceType.TalentLevelUp,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/d/df/Item_Guide_to_Elegance.png",
  },
  {
    sortId: 573,
    name: "Teachings of Elegance",
    type: ResourceType.TalentLevelUp,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/f/f2/Item_Teachings_of_Elegance.png",
  },
  {
    sortId: 581,
    name: "Philosophies of Light",
    type: ResourceType.TalentLevelUp,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/95/Item_Philosophies_of_Light.png",
  },
  {
    sortId: 582,
    name: "Guide to Light",
    type: ResourceType.TalentLevelUp,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/f/fe/Item_Guide_to_Light.png",
  },
  {
    sortId: 583,
    name: "Teachings of Light",
    type: ResourceType.TalentLevelUp,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/5/5e/Item_Teachings_of_Light.png",
  },
  {
    sortId: 591,
    name: "Crown of Insight",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/04/Item_Crown_of_Insight.png",
  },
  {
    sortId: 701,
    name: "Scattered Piece of Decarabian's Dream",
    type: ResourceType.WeaponAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Item_Scattered_Piece_of_Decarabian%27s_Dream.png",
  },
  {
    sortId: 702,
    name: "Fragment of Decarabian's Epic",
    type: ResourceType.WeaponAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/8/8a/Item_Fragment_of_Decarabian%27s_Epic.png",
  },
  {
    sortId: 703,
    name: "Debris of Decarabian's City",
    type: ResourceType.WeaponAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/96/Item_Debris_of_Decarabian%27s_City.png",
  },
  {
    sortId: 704,
    name: "Tile of Decarabian's Tower",
    type: ResourceType.WeaponAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/d/d7/Item_Tile_of_Decarabian%27s_Tower.png",
  },
  {
    sortId: 711,
    name: "Boreal Wolf's Nostalgia",
    type: ResourceType.WeaponAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/e/e0/Item_Boreal_Wolf%27s_Nostalgia.png",
  },
  {
    sortId: 712,
    name: "Boreal Wolf's Broken Fang",
    type: ResourceType.WeaponAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/98/Item_Boreal_Wolf%27s_Broken_Fang.png",
  },
  {
    sortId: 713,
    name: "Boreal Wolf's Cracked Tooth",
    type: ResourceType.WeaponAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Boreal_Wolf%27s_Cracked_Tooth.png",
  },
  {
    sortId: 714,
    name: "Boreal Wolf's Milk Tooth",
    type: ResourceType.WeaponAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Item_Boreal_Wolf%27s_Milk_Tooth.png",
  },
  {
    sortId: 721,
    name: "Dream of the Dandelion Gladiator",
    type: ResourceType.WeaponAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/b4/Item_Dream_of_the_Dandelion_Gladiator.png",
  },
  {
    sortId: 722,
    name: "Shackles of the Dandelion Gladiator",
    type: ResourceType.WeaponAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/40/Item_Shackles_of_the_Dandelion_Gladiator.png",
  },
  {
    sortId: 723,
    name: "Chains of the Dandelion Gladiator",
    type: ResourceType.WeaponAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/a/ad/Item_Chains_of_the_Dandelion_Gladiator.png",
  },
  {
    sortId: 724,
    name: "Fetters of the Dandelion Gladiator",
    type: ResourceType.WeaponAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/05/Item_Fetters_of_the_Dandelion_Gladiator.png",
  },
  {
    sortId: 731,
    name: "Divine Body from Guyun",
    type: ResourceType.WeaponAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/e/e8/Item_Divine_Body_from_Guyun.png",
  },
  {
    sortId: 732,
    name: "Relic from Guyun",
    type: ResourceType.WeaponAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/94/Item_Relic_from_Guyun.png",
  },
  {
    sortId: 733,
    name: "Lustrous Stone from Guyun",
    type: ResourceType.WeaponAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/c/cb/Item_Lustrous_Stone_from_Guyun.png",
  },
  {
    sortId: 734,
    name: "Luminous Sands from Guyun",
    type: ResourceType.WeaponAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/5/5d/Item_Luminous_Sands_from_Guyun.png",
  },
  {
    sortId: 741,
    name: "Mist Veiled Primo Elixir",
    type: ResourceType.WeaponAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/a/a3/Item_Mist_Veiled_Primo_Elixir.png",
  },
  {
    sortId: 742,
    name: "Mist Veiled Gold Elixir",
    type: ResourceType.WeaponAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/9b/Item_Mist_Veiled_Gold_Elixir.png",
  },
  {
    sortId: 743,
    name: "Mist Veiled Mercury Elixir",
    type: ResourceType.WeaponAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/0f/Item_Mist_Veiled_Mercury_Elixir.png",
  },
  {
    sortId: 744,
    name: "Mist Veiled Lead Elixir",
    type: ResourceType.WeaponAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/a/a5/Item_Mist_Veiled_Lead_Elixir.png",
  },
  {
    sortId: 751,
    name: "Chunk of Aerosiderite",
    type: ResourceType.WeaponAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/48/Item_Chunk_of_Aerosiderite.png",
  },
  {
    sortId: 752,
    name: "Bit of Aerosiderite",
    type: ResourceType.WeaponAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/1/17/Item_Bit_of_Aerosiderite.png",
  },
  {
    sortId: 753,
    name: "Piece of Aerosiderite",
    type: ResourceType.WeaponAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/0d/Item_Piece_of_Aerosiderite.png",
  },
  {
    sortId: 754,
    name: "Grain of Aerosiderite",
    type: ResourceType.WeaponAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/47/Item_Grain_of_Aerosiderite.png",
  },
  {
    sortId: 761,
    name: "Golden Branch of a Distant Sea",
    type: ResourceType.WeaponAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/e/ee/Item_Golden_Branch_of_a_Distant_Sea.png",
  },
  {
    sortId: 762,
    name: "Jade Branch of a Distant Sea",
    type: ResourceType.WeaponAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/2/29/Item_Jade_Branch_of_a_Distant_Sea.png",
  },
  {
    sortId: 763,
    name: "Jeweled Branch of a Distant Sea",
    type: ResourceType.WeaponAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/1/19/Item_Jeweled_Branch_of_a_Distant_Sea.png",
  },
  {
    sortId: 764,
    name: "Coral Branch of a Distant Sea",
    type: ResourceType.WeaponAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/a/a6/Item_Coral_Branch_of_a_Distant_Sea.png",
  },
  {
    sortId: 771,
    name: "Narukami's Valor",
    type: ResourceType.WeaponAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/98/Item_Narukami%27s_Valor.png",
  },
  {
    sortId: 772,
    name: "Narukami's Affection",
    type: ResourceType.WeaponAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/f/f5/Item_Narukami%27s_Affection.png",
  },
  {
    sortId: 773,
    name: "Narukami's Joy",
    type: ResourceType.WeaponAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/5/5d/Item_Narukami%27s_Joy.png",
  },
  {
    sortId: 774,
    name: "Narukami's Wisdom",
    type: ResourceType.WeaponAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/40/Item_Narukami%27s_Wisdom.png",
  },
  {
    sortId: 781,
    name: "Mask of the Kijin",
    type: ResourceType.WeaponAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/5/54/Item_Mask_of_the_Kijin.png",
  },
  {
    sortId: 782,
    name: "Mask of the One-Horned",
    type: ResourceType.WeaponAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/a/a9/Item_Mask_of_the_One-Horned.png",
  },
  {
    sortId: 783,
    name: "Mask of the Tiger's Bite",
    type: ResourceType.WeaponAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/93/Item_Mask_of_the_Tiger%27s_Bite.png",
  },
  {
    sortId: 784,
    name: "Mask of the Wicked Lieutenant",
    type: ResourceType.WeaponAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/34/Item_Mask_of_the_Wicked_Lieutenant.png",
  },
];
