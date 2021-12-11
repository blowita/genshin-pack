export enum ResourceType {
  CharacterAscension = "Character Ascension Material",
  CharacterExp = "Character EXP Material",
  CommonAscension = "Common Ascension Material",
  CommonCurrency = "Common Currency",
  LocalSpecialty = "Local Specialty",
  TalentLevelUp = "Talent Level-Up Material",
  WeaponAscension = "Weapon Ascension Material",
}

export interface Resource {
  id: string;
  sortId: number;
  name: string;
  type: ResourceType;
  rarity: number;
  imageUrl: string;
}

export const moraId = "1c15e536-b45d-4932-98f8-441656ffa1ae";

export const resources: Resource[] = [
  {
    id: moraId,
    sortId: 0,
    name: "Mora",
    type: ResourceType.CommonCurrency,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/8/84/Icon_Mora.png",
  },
  {
    id: "980840b2-b68a-4f5b-8ec8-ea1a7feb07fb",
    sortId: 1,
    name: "Hero's Wit",
    type: ResourceType.CharacterExp,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/2/26/Item_Hero%27s_Wit.png",
  },
  {
    id: "6efcc643-6ba1-46d8-b8e3-bc534ce868f1",
    sortId: 2,
    name: "Adventurer's Experience",
    type: ResourceType.CharacterExp,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/07/Item_Adventurer%27s_Experience.png",
  },
  {
    id: "3bf43090-9ee8-4b45-825f-c3b19b420f95",
    sortId: 3,
    name: "Wanderer's Advice",
    type: ResourceType.CharacterExp,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/6/60/Item_Wanderer%27s_Advice.png",
  },
  {
    id: "b774aa88-e050-49ca-9d23-8ba8669664e6",
    sortId: 11,
    name: "Slime Concentrate",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/d/d8/Item_Slime_Concentrate.png",
  },
  {
    id: "fb347282-98c1-4fca-a2c1-96301bedaa89",
    sortId: 12,
    name: "Slime Secretions",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Item_Slime_Secretions.png",
  },
  {
    id: "5ae00f24-d579-44de-8d7f-440268037558",
    sortId: 13,
    name: "Slime Condensate",
    type: ResourceType.CommonAscension,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/1/1c/Item_Slime_Condensate.png",
  },
  {
    id: "f2691f69-b517-4d99-8676-393f88c6c96b",
    sortId: 14,
    name: "Ominous Mask",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/91/Item_Ominous_Mask.png",
  },
  {
    id: "202312e1-90a4-4f42-97ad-f2abddb02dd8",
    sortId: 15,
    name: "Stained Mask",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/2/2f/Item_Stained_Mask.png",
  },
  {
    id: "01017501-c8f9-414f-bae3-49de240cd66d",
    sortId: 16,
    name: "Damaged Mask",
    type: ResourceType.CommonAscension,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/6/69/Item_Damaged_Mask.png",
  },
  {
    id: "73f5400b-57a6-41b3-92da-4060089e09cc",
    sortId: 17,
    name: "Forbidden Curse Scroll",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/f/f0/Item_Forbidden_Curse_Scroll.png",
  },
  {
    id: "867000d4-38e0-4479-9b68-70f6a5815355",
    sortId: 18,
    name: "Sealed Scroll",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/91/Item_Sealed_Scroll.png",
  },
  {
    id: "805f5d24-3125-4f7a-9dcf-b847db68f159",
    sortId: 19,
    name: "Divining Scroll",
    type: ResourceType.CommonAscension,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/7/74/Item_Divining_Scroll.png",
  },
  {
    id: "ec6f8810-0130-4817-a88c-0d1cf9786d30",
    sortId: 20,
    name: "Weathered Arrowhead",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/2/22/Item_Weathered_Arrowhead.png",
  },
  {
    id: "9eccbbef-2580-446e-a4cb-11da0eaebac2",
    sortId: 21,
    name: "Sharp Arrowhead",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/0d/Item_Sharp_Arrowhead.png",
  },
  {
    id: "ad5401de-8bc2-4b56-9730-1eb72a6ff161",
    sortId: 22,
    name: "Firm Arrowhead",
    type: ResourceType.CommonAscension,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/01/Item_Firm_Arrowhead.png",
  },
  {
    id: "a2a0aa5f-c2f4-4035-af39-3d51cc023fbf",
    sortId: 23,
    name: "Black Crystal Horn",
    type: ResourceType.CommonAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/6/64/Item_Black_Crystal_Horn.png",
  },
  {
    id: "4206e476-9691-4bfb-a17f-62829cd7ad08",
    sortId: 24,
    name: "Black Bronze Horn",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/42/Item_Black_Bronze_Horn.png",
  },
  {
    id: "9ad00489-f34d-429b-888c-4e755837c28d",
    sortId: 25,
    name: "Heavy Horn",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/c/c0/Item_Heavy_Horn.png",
  },
  {
    id: "600b0385-4f16-4bf4-a04e-0487e6f220a3",
    sortId: 26,
    name: "Ley Line Sprouts",
    type: ResourceType.CommonAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/7/76/Item_Ley_Line_Sprout.png",
  },
  {
    id: "54ba5266-d0be-4aea-8997-e667e994446b",
    sortId: 27,
    name: "Dead Ley Line Leaves",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/d/d2/Item_Dead_Ley_Line_Leaves.png",
  },
  {
    id: "cdf1d705-92c3-408a-a4fd-35bce9e6c7ac",
    sortId: 28,
    name: "Dead Ley Line Branch",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/7/77/Item_Dead_Ley_Line_Branch.png",
  },
  {
    id: "0d820a95-be82-43b7-a29a-4c5b27529e41",
    sortId: 29,
    name: "Chaos Core",
    type: ResourceType.CommonAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/3e/Item_Chaos_Core.png",
  },
  {
    id: "c28a0ed6-c0ad-446b-a77a-036f1d5a9f4a",
    sortId: 30,
    name: "Chaos Circuit",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/1/1f/Item_Chaos_Circuit.png",
  },
  {
    id: "0b6451ed-7634-4e78-b8d3-1c0b5a931c09",
    sortId: 31,
    name: "Chaos Device",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/47/Item_Chaos_Device.png",
  },
  {
    id: "bfa0e9a7-185a-4209-87cd-225f8c9fa9c3",
    sortId: 32,
    name: "Mist Grass Wick",
    type: ResourceType.CommonAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/90/Item_Mist_Grass_Wick.png",
  },
  {
    id: "85ab5e45-0a54-4406-9e20-74932b5338bd",
    sortId: 33,
    name: "Mist Grass",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/7/73/Item_Mist_Grass.png",
  },
  {
    id: "09a894a8-c789-487b-a4a9-76ba2f7ab390",
    sortId: 34,
    name: "Mist Grass Pollen",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/32/Item_Mist_Grass_Pollen.png",
  },
  {
    id: "5872caf8-43c2-4ac6-bb8e-4addc63a59e0",
    sortId: 35,
    name: "Inspector's Sacrificial Knife",
    type: ResourceType.CommonAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/5/53/Item_Inspector%27s_Sacrificial_Knife.png",
  },
  {
    id: "8bb58015-dcda-4a1b-98c1-f04bdd1459aa",
    sortId: 36,
    name: "Agent's Sacrificial Knife",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/5/55/Item_Agent%27s_Sacrificial_Knife.png",
  },
  {
    id: "3cd09865-e191-417c-ad76-7a81cb760705",
    sortId: 37,
    name: "Hunter's Sacrificial Knife",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/2/28/Item_Hunter%27s_Sacrificial_Knife.png",
  },
  {
    id: "676af28e-0567-46cd-b538-fe30a6c1b51d",
    sortId: 38,
    name: "Lieutenant's Insignia",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/d/db/Item_Lieutenant%27s_Insignia.png",
  },
  {
    id: "1a3ed1ab-6096-467f-bfb6-1785eb210e24",
    sortId: 39,
    name: "Sergeant's Insignia",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/a/a5/Item_Sergeant%27s_Insignia.png",
  },
  {
    id: "e620381b-acc0-47b4-9f5f-8257d5991f22",
    sortId: 40,
    name: "Recruit's Insignia",
    type: ResourceType.CommonAscension,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/b2/Item_Recruit%27s_Insignia.png",
  },
  {
    id: "b53674e9-3f59-401c-b41c-ce4e39d23ea9",
    sortId: 41,
    name: "Golden Raven Insignia",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Golden_Raven_Insignia.png",
  },
  {
    id: "6648e162-f681-4025-99c6-10c06aa0223f",
    sortId: 42,
    name: "Silver Raven Insignia",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/44/Item_Silver_Raven_Insignia.png",
  },
  {
    id: "6dc63deb-2b12-4c4e-b7c8-038ee95084b0",
    sortId: 43,
    name: "Treasure Hoarder Insignia",
    type: ResourceType.CommonAscension,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/c/c9/Item_Treasure_Hoarder_Insignia.png",
  },
  {
    id: "a8e1b958-a515-40c5-9343-30f21203006c",
    sortId: 44,
    name: "Energy Nectar",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Item_Energy_Nectar.png",
  },
  {
    id: "db1473df-d986-4252-b59c-73cb5ed37dd7",
    sortId: 45,
    name: "Shimmering Nectar",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/46/Item_Shimmering_Nectar.png",
  },
  {
    id: "962906a0-9474-4acf-a734-2e2eccf3e72a",
    sortId: 46,
    name: "Whopperflower Nectar",
    type: ResourceType.CommonAscension,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/8/8b/Item_Whopperflower_Nectar.png",
  },
  {
    id: "97ea489c-83d9-40e3-9aee-ff38de3801fe",
    sortId: 47,
    name: "Fossilized Bone Shard",
    type: ResourceType.CommonAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/6/60/Item_Fossilized_Bone_Shard.png",
  },
  {
    id: "f592e88d-b8b0-4161-90fa-c1ada748c762",
    sortId: 48,
    name: "Sturdy Bone Shard",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/f/ff/Item_Sturdy_Bone_Shard.png",
  },
  {
    id: "92084bf1-23c6-4180-b4d0-6270193ede64",
    sortId: 49,
    name: "Fragile Bone Shard",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/e/e5/Item_Fragile_Bone_Shard.png",
  },
  {
    id: "650b3317-0dd3-4e6d-98ff-fc204dd11b15",
    sortId: 50,
    name: "Famed Handguard",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/4e/Item_Famed_Handguard.png",
  },
  {
    id: "7e9b3018-a410-4f0a-bf6a-a74a5b848c79",
    sortId: 51,
    name: "Kageuchi Handguard",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Kageuchi_Handguard.png",
  },
  {
    id: "4d8cdb1b-4a74-4d9f-8138-c9c27cf706ed",
    sortId: 52,
    name: "Old Handguard",
    type: ResourceType.CommonAscension,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/e/e2/Item_Old_Handguard.png",
  },
  {
    id: "84b55115-81f6-4844-98cb-23868fa56f77",
    sortId: 53,
    name: "Chaos Oculus",
    type: ResourceType.CommonAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/be/Item_Chaos_Oculus.png",
  },
  {
    id: "9165c440-e477-4b9e-bf43-aa04b11af81e",
    sortId: 54,
    name: "Chaos Axis",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/e/e0/Item_Chaos_Axis.png",
  },
  {
    id: "7f2ec22f-e6f0-4c9e-a0ef-0b68f81e1909",
    sortId: 55,
    name: "Chaos Gear",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/1/17/Item_Chaos_Gear.png",
  },
  {
    id: "bef52119-8619-4a52-b88c-5a374652de37",
    sortId: 56,
    name: "Polarizing Prism",
    type: ResourceType.CommonAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Item_Polarizing_Prism.png",
  },
  {
    id: "6f77333b-8584-4b36-9798-035a792069be",
    sortId: 57,
    name: "Crystal Prism",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/f/fe/Item_Crystal_Prism.png",
  },
  {
    id: "d274dca1-0562-4de9-bdfe-44b9049668f3",
    sortId: 58,
    name: "Dismal Prism",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/3d/Item_Dismal_Prism.png",
  },
  {
    id: "9f2a3a09-44ad-4785-89dc-a3a68a2f046a",
    sortId: 59,
    name: "Spectral Nucleus",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/e/ea/Item_Spectral_Nucleus.png",
  },
  {
    id: "9cbb9861-b6f7-456c-91b4-84c74c95a6f8",
    sortId: 60,
    name: "Spectral Heart",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/6/67/Item_Spectral_Heart.png",
  },
  {
    id: "51e131c6-dc4e-4532-bc94-695a7f7af336",
    sortId: 61,
    name: "Spectral Husk",
    type: ResourceType.CommonAscension,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/d/d2/Item_Spectral_Husk.png",
  },
  {
    id: "fddcecfc-0974-4825-bfe4-130053b9523b",
    sortId: 62,
    name: "Concealed Talon",
    type: ResourceType.CommonAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/7/79/Item_Concealed_Talon.png",
  },
  {
    id: "6a71b176-960d-4b3b-b6d0-ebb34d3f2e5b",
    sortId: 63,
    name: "Concealed Unguis",
    type: ResourceType.CommonAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/97/Item_Concealed_Unguis.png",
  },
  {
    id: "9c5ec3e3-23cc-4f02-bf36-2b875f5c0d50",
    sortId: 64,
    name: "Concealed Claw",
    type: ResourceType.CommonAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/6/69/Item_Concealed_Claw.png",
  },
  {
    id: "334576af-b0c5-4524-9c0a-ee4d067bc808",
    sortId: 100,
    name: "Dvalin's Plume",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/bf/Item_Dvalin%27s_Plume.png",
  },
  {
    id: "2bddd17b-b8b6-4e21-ad4d-0aaff4bf20e3",
    sortId: 101,
    name: "Dvalin's Claw",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/a/a8/Item_Dvalin%27s_Claw.png",
  },
  {
    id: "b1669fd0-f362-4f15-ac2f-09ecbba07b97",
    sortId: 102,
    name: "Dvalin's Sigh",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/07/Item_Dvalin%27s_Sigh.png",
  },
  {
    id: "d4ad1674-6715-4b98-88ba-fef9b0ab2992",
    sortId: 103,
    name: "Tail of Boreas",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/6/66/Item_Tail_of_Boreas.png",
  },
  {
    id: "3b8ec41d-9775-4c1d-8aa2-7b8560401728",
    sortId: 104,
    name: "Ring of Boreas",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/d/d6/Item_Ring_of_Boreas.png",
  },
  {
    id: "30a343aa-fa92-45b5-8bdc-ee6b8134eee6",
    sortId: 105,
    name: "Spirit Locket of Boreas",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/8/81/Item_Spirit_Locket_of_Boreas.png",
  },
  {
    id: "f049c10e-34a5-415e-a4f5-22826638c0c9",
    sortId: 106,
    name: "Tusk of Monoceros Caeli",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/1/1c/Item_Tusk_of_Monoceros_Caeli.png",
  },
  {
    id: "e42aea8f-ebff-4e8e-8269-00c5d26591aa",
    sortId: 107,
    name: "Shard of a Foul Legacy",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/48/Item_Shard_of_a_Foul_Legacy.png",
  },
  {
    id: "058871ce-6941-4b67-a249-39d59acae9c7",
    sortId: 108,
    name: "Shadow of the Warrior",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/5/5d/Item_Shadow_of_the_Warrior.png",
  },
  {
    id: "5180192e-7e6a-4b23-9c6b-fe19dee4b88a",
    sortId: 109,
    name: "Dragon Lord's Crown",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/02/Item_Dragon_Lord%27s_Crown.png",
  },
  {
    id: "b820f6af-e22a-4e7b-a0cc-8ea673573bd1",
    sortId: 110,
    name: "Bloodjade Branch",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/b1/Item_Bloodjade_Branch.png",
  },
  {
    id: "affad3c5-2081-4a04-97d3-027ae8b1eaa9",
    sortId: 111,
    name: "Gilded Scale",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Item_Gilded_Scale.png",
  },
  {
    id: "b9442c60-5eb4-4298-ac47-c38ed5a6c26d",
    sortId: 112,
    name: "Molten Moment",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/44/Item_Molten_Moment.png",
  },
  {
    id: "a17c2fc2-380f-4142-8c13-99845f2d3187",
    sortId: 113,
    name: "Hellfire Butterfly",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/1/16/Item_Hellfire_Butterfly.png",
  },
  {
    id: "8ef58d0d-e402-4a05-8559-90e8522b4bae",
    sortId: 114,
    name: "Ashen Heart",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/2/29/Item_Ashen_Heart.png",
  },
  {
    id: "4a2e06a9-b2d5-4fdd-bd49-fe599ad44f96",
    sortId: 200,
    name: "Hurricane Seed",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/5/5e/Item_Hurricane_Seed.png",
  },
  {
    id: "ea454e41-81d7-47ff-b96a-93d2de25f98e",
    sortId: 201,
    name: "Lightning Prism",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/e/ee/Item_Lightning_Prism.png",
  },
  {
    id: "b170ad0b-55e8-4eb8-84fb-ab7e64bf4f80",
    sortId: 202,
    name: "Basalt Pillar",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/bc/Item_Basalt_Pillar.png",
  },
  {
    id: "c4db6575-f650-4b93-881f-a26ec8b3074c",
    sortId: 203,
    name: "Hoarfrost Core",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/b5/Item_Hoarfrost_Core.png",
  },
  {
    id: "d18b9fde-7d4a-4f33-98a6-66a07c0e5431",
    sortId: 204,
    name: "Everflame Seed",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/b2/Item_Everflame_Seed.png",
  },
  {
    id: "0fd0cd7a-bfb0-493e-b472-09f685d4262b",
    sortId: 205,
    name: "Cleansing Heart",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/02/Item_Cleansing_Heart.png",
  },
  {
    id: "857aeb06-ba0d-4b19-bc2a-f70d20e0fdaa",
    sortId: 206,
    name: "Juvenile Jade",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/f/f1/Item_Juvenile_Jade.png",
  },
  {
    id: "2b56fdc2-14fd-482c-a9a0-d958de723b5e",
    sortId: 207,
    name: "Crystalline Bloom",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/d/dc/Item_Crystalline_Bloom.png",
  },
  {
    id: "5f8130ce-cdbf-4a4b-8850-b0d56fedc2f6",
    sortId: 208,
    name: "Marionette Core",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/1/1d/Item_Marionette_Core.png",
  },
  {
    id: "18b5dacd-7f64-4de7-afd2-c979e881b6c5",
    sortId: 209,
    name: "Perpetual Heart",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/c/c1/Item_Perpetual_Heart.png",
  },
  {
    id: "4424a041-1ae1-4f4e-9688-eb478d60177d",
    sortId: 210,
    name: "Smoldering Pearl",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/a/ad/Item_Smoldering_Pearl.png",
  },
  {
    id: "cd93bce4-2fca-4c9a-b342-8c19c73d70ab",
    sortId: 211,
    name: "Dew of Repudiation",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/f/fa/Item_Dew_of_Repudiation.png",
  },
  {
    id: "2c86c4d5-6840-47f1-966f-e9d4f0c68e17",
    sortId: 212,
    name: "Storm Beads",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/2/28/Item_Storm_Beads.png",
  },
  {
    id: "58b0a9c6-f0e6-4e5e-89b7-17e8caf3d5ad",
    sortId: 213,
    name: "Riftborn Regalia",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/34/Item_Riftborn_Regalia.png",
  },
  {
    id: "0dd1b0ea-0903-473c-bebf-fdf140da4200",
    sortId: 301,
    name: "Brilliant Diamond Gemstone",
    type: ResourceType.CharacterAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Item_Brilliant_Diamond_Gemstone.png",
  },
  {
    id: "daeacbd8-ee72-439a-9185-44cf1d4fe0e4",
    sortId: 302,
    name: "Brilliant Diamond Chunk",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/7/74/Item_Brilliant_Diamond_Chunk.png",
  },
  {
    id: "72b955d1-45de-4bc2-8e6e-cfb12a2c7e4b",
    sortId: 303,
    name: "Brilliant Diamond Fragment",
    type: ResourceType.CharacterAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/3d/Item_Brilliant_Diamond_Fragment.png",
  },
  {
    id: "c88006ba-b5e1-4590-9dc2-9bbd96372e6a",
    sortId: 304,
    name: "Brilliant Diamond Sliver",
    type: ResourceType.CharacterAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/7/72/Item_Brilliant_Diamond_Sliver.png",
  },
  {
    id: "16d49bf8-03f8-4a91-8228-efaa8501518d",
    sortId: 401,
    name: "Agnidus Agate Gemstone",
    type: ResourceType.CharacterAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/0d/Item_Agnidus_Agate_Gemstone.png",
  },
  {
    id: "51aa9fd3-5bea-47cc-90e3-d83c727e2fd3",
    sortId: 402,
    name: "Agnidus Agate Chunk",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/00/Item_Agnidus_Agate_Chunk.png",
  },
  {
    id: "7c722573-c512-4a1b-b26e-7f3a92d8a8df",
    sortId: 403,
    name: "Agnidus Agate Fragment",
    type: ResourceType.CharacterAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/e/ec/Item_Agnidus_Agate_Fragment.png",
  },
  {
    id: "7cc35603-3bdb-4bbf-a190-8a9c65bdf687",
    sortId: 404,
    name: "Agnidus Agate Sliver",
    type: ResourceType.CharacterAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/5/51/Item_Agnidus_Agate_Sliver.png",
  },
  {
    id: "a83afc9a-640a-4ea5-8b11-a12fe221ccc5",
    sortId: 411,
    name: "Varunada Lazurite Gemstone",
    type: ResourceType.CharacterAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/a/a4/Item_Varunada_Lazurite_Gemstone.png",
  },
  {
    id: "3adf17f6-a45e-49e9-b8a6-f0b4ee1eb4fa",
    sortId: 412,
    name: "Varunada Lazurite Chunk",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Item_Varunada_Lazurite_Chunk.png",
  },
  {
    id: "69a81d0f-1e46-4094-9b86-363bf726e249",
    sortId: 413,
    name: "Varunada Lazurite Fragment",
    type: ResourceType.CharacterAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/f/f6/Item_Varunada_Lazurite_Fragment.png",
  },
  {
    id: "7d8bb1e0-4745-4fed-80d2-d3063b0fd712",
    sortId: 414,
    name: "Varunada Lazurite Sliver",
    type: ResourceType.CharacterAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/f/f8/Item_Varunada_Lazurite_Sliver.png",
  },
  {
    id: "c9ed4567-b4ef-4bb2-bf65-d893bf0ceefe",
    sortId: 421,
    name: "Vajrada Amethyst Gemstone",
    type: ResourceType.CharacterAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/be/Item_Vajrada_Amethyst_Gemstone.png",
  },
  {
    id: "e0434fdb-16da-4e99-9223-7eff7f50cc65",
    sortId: 422,
    name: "Vajrada Amethyst Chunk",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/c/c1/Item_Vajrada_Amethyst_Chunk.png",
  },
  {
    id: "20eb88ad-c379-44d9-96ee-eaa71bb1f372",
    sortId: 423,
    name: "Vajrada Amethyst Fragment",
    type: ResourceType.CharacterAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/c/cb/Item_Vajrada_Amethyst_Fragment.png",
  },
  {
    id: "bd9b0b0e-ab77-4f60-84ff-103ebe1a2b21",
    sortId: 424,
    name: "Vajrada Amethyst Sliver",
    type: ResourceType.CharacterAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/39/Item_Vajrada_Amethyst_Sliver.png",
  },
  {
    id: "39374946-b178-4edc-b066-ad434aa1b174",
    sortId: 431,
    name: "Vayuda Turquoise Gemstone",
    type: ResourceType.CharacterAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/32/Item_Vayuda_Turquoise_Gemstone.png",
  },
  {
    id: "4c960f8f-084f-4203-aff2-5c9429e6c019",
    sortId: 432,
    name: "Vayuda Turquoise Chunk",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Item_Vayuda_Turquoise_Chunk.png",
  },
  {
    id: "4f6d0ed6-3195-4095-a651-8c199ed25d19",
    sortId: 433,
    name: "Vayuda Turquoise Fragment",
    type: ResourceType.CharacterAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Vayuda_Turquoise_Fragment.png",
  },
  {
    id: "a9795454-7fc9-4241-8e72-47fafcc9ce53",
    sortId: 434,
    name: "Vayuda Turquoise Sliver",
    type: ResourceType.CharacterAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/93/Item_Vayuda_Turquoise_Sliver.png",
  },
  {
    id: "1971a02a-9003-43a6-9f5e-270a91bce503",
    sortId: 441,
    name: "Shivada Jade Gemstone",
    type: ResourceType.CharacterAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/e/e9/Item_Shivada_Jade_Gemstone.png",
  },
  {
    id: "f9e208f3-c39a-491a-820e-dfc686cba0af",
    sortId: 442,
    name: "Shivada Jade Chunk",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/41/Item_Shivada_Jade_Chunk.png",
  },
  {
    id: "6a482a67-cc9c-4f7d-8763-c98bc078f1c0",
    sortId: 443,
    name: "Shivada Jade Fragment",
    type: ResourceType.CharacterAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/9a/Item_Shivada_Jade_Fragment.png",
  },
  {
    id: "7c2ae994-1d18-4390-8747-ae80ca2563e5",
    sortId: 444,
    name: "Shivada Jade Sliver",
    type: ResourceType.CharacterAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/8/87/Item_Shivada_Jade_Sliver.png",
  },
  {
    id: "1d5af553-2a7d-4735-82ea-4625c15d2f0b",
    sortId: 451,
    name: "Prithiva Topaz Gemstone",
    type: ResourceType.CharacterAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/e/eb/Item_Prithiva_Topaz_Gemstone.png",
  },
  {
    id: "18fc85ea-f9f8-4826-a3ab-97712f96952b",
    sortId: 452,
    name: "Prithiva Topaz Chunk",
    type: ResourceType.CharacterAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/4b/Item_Prithiva_Topaz_Chunk.png",
  },
  {
    id: "1c4e1d9e-33e9-415d-bbaa-62b4d73c4d68",
    sortId: 453,
    name: "Prithiva Topaz Fragment",
    type: ResourceType.CharacterAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/3e/Item_Prithiva_Topaz_Fragment.png",
  },
  {
    id: "dde615c9-476c-4d3f-b707-d9c1318b3100",
    sortId: 454,
    name: "Prithiva Topaz Sliver",
    type: ResourceType.CharacterAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Item_Prithiva_Topaz_Sliver.png",
  },
  {
    id: "70dc1c5e-fa86-4461-8b79-8118eb469470",
    sortId: 501,
    name: "Philosophies of Freedom",
    type: ResourceType.TalentLevelUp,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/c/c4/Item_Philosophies_of_Freedom.png",
  },
  {
    id: "a94aee18-6e37-4308-b570-f7f3f7e4a799",
    sortId: 502,
    name: "Guide to Freedom",
    type: ResourceType.TalentLevelUp,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/1/1a/Item_Guide_to_Freedom.png",
  },
  {
    id: "89295394-2833-448e-a711-5b579f2cd094",
    sortId: 503,
    name: "Teachings of Freedom",
    type: ResourceType.TalentLevelUp,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/3a/Item_Teachings_of_Freedom.png",
  },
  {
    id: "9654c0a1-8023-4991-a4e0-e2e20a0eb7de",
    sortId: 511,
    name: "Philosophies of Resistance",
    type: ResourceType.TalentLevelUp,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Item_Philosophies_of_Resistance.png",
  },
  {
    id: "6b88e6ee-966f-482c-8152-3f9a65cecd95",
    sortId: 512,
    name: "Guide to Resistance",
    type: ResourceType.TalentLevelUp,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/bf/Item_Guide_to_Resistance.png",
  },
  {
    id: "2a2279e7-cfb0-4235-9549-40510a17189b",
    sortId: 513,
    name: "Teachings of Resistance",
    type: ResourceType.TalentLevelUp,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Item_Teachings_of_Resistance.png",
  },
  {
    id: "1121fb80-96d6-40fb-b3c4-65b78b97def2",
    sortId: 521,
    name: "Philosophies of Ballad",
    type: ResourceType.TalentLevelUp,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/b4/Item_Teachings_of_Ballad.png",
  },
  {
    id: "b82d3c82-b809-4622-b59a-3f035a009b40",
    sortId: 522,
    name: "Guide to Ballad",
    type: ResourceType.TalentLevelUp,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/2/2f/Item_Guide_to_Ballad.png",
  },
  {
    id: "734b8fbf-6beb-4b98-8670-2424c90fdc06",
    sortId: 523,
    name: "Teachings of Ballad",
    type: ResourceType.TalentLevelUp,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/7/7e/Item_Philosophies_of_Ballad.png",
  },
  {
    id: "4fe154b0-ed95-4a88-9adb-347715a71e8d",
    sortId: 531,
    name: "Philosophies of Prosperity",
    type: ResourceType.TalentLevelUp,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/bd/Item_Philosophies_of_Prosperity.png",
  },
  {
    id: "868f3cee-dbbe-425c-a2cc-5f1e3c982658",
    sortId: 532,
    name: "Guide to Prosperity",
    type: ResourceType.TalentLevelUp,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/6/67/Item_Guide_to_Prosperity.png",
  },
  {
    id: "e1cfcea2-5f6b-48ff-bece-d008ec783612",
    sortId: 533,
    name: "Teachings of Prosperity",
    type: ResourceType.TalentLevelUp,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/9e/Item_Teachings_of_Prosperity.png",
  },
  {
    id: "379e23b9-0c90-47ec-b260-772759de0ed0",
    sortId: 541,
    name: "Philosophies of Diligence",
    type: ResourceType.TalentLevelUp,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/c/c2/Item_Philosophies_of_Diligence.png",
  },
  {
    id: "49278ad2-a7d9-49ed-8536-29cbe0723ce0",
    sortId: 542,
    name: "Guide to Diligence",
    type: ResourceType.TalentLevelUp,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/9f/Item_Guide_to_Diligence.png",
  },
  {
    id: "ac3a5387-4ade-4fdc-8921-7620c4a62a35",
    sortId: 543,
    name: "Teachings of Diligence",
    type: ResourceType.TalentLevelUp,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/a/a7/Item_Teachings_of_Diligence.png",
  },
  {
    id: "5735a8e1-1b4c-46ee-a0a6-39c515ce9b66",
    sortId: 551,
    name: "Philosophies of Gold",
    type: ResourceType.TalentLevelUp,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/01/Item_Philosophies_of_Gold.png",
  },
  {
    id: "32d81d54-a3d4-49c9-9424-8c92143e79ca",
    sortId: 552,
    name: "Guide to Gold",
    type: ResourceType.TalentLevelUp,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/43/Item_Guide_to_Gold.png",
  },
  {
    id: "4428ce57-028c-4b5a-bdae-f68b886b1e6a",
    sortId: 553,
    name: "Teachings of Gold",
    type: ResourceType.TalentLevelUp,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/7/7f/Item_Teachings_of_Gold.png",
  },
  {
    id: "1977ddfe-00ef-43bd-9a08-9e49118cead0",
    sortId: 561,
    name: "Philosophies of Transience",
    type: ResourceType.TalentLevelUp,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/2/27/Item_Philosophies_of_Transience.png",
  },
  {
    id: "a7c40e1d-d21a-4d4c-9969-4c49cfb207d3",
    sortId: 562,
    name: "Guide to Transience",
    type: ResourceType.TalentLevelUp,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/b0/Item_Guide_to_Transience.png",
  },
  {
    id: "7a183023-12e1-401b-aaa8-86463beaa79b",
    sortId: 563,
    name: "Teachings of Transience",
    type: ResourceType.TalentLevelUp,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/4e/Item_Teachings_of_Transience.png",
  },
  {
    id: "babf7860-723b-4c6a-9e25-3c15b83a89a6",
    sortId: 571,
    name: "Philosophies of Elegance",
    type: ResourceType.TalentLevelUp,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/6/6f/Item_Philosophies_of_Elegance.png",
  },
  {
    id: "dd735759-bf3f-4237-a003-f9b0b648e0ad",
    sortId: 572,
    name: "Guide to Elegance",
    type: ResourceType.TalentLevelUp,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/d/df/Item_Guide_to_Elegance.png",
  },
  {
    id: "3cd228f7-b250-410f-a02b-baa990f45431",
    sortId: 573,
    name: "Teachings of Elegance",
    type: ResourceType.TalentLevelUp,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/f/f2/Item_Teachings_of_Elegance.png",
  },
  {
    id: "5fb093aa-0fc7-4d60-ad42-28b44679d717",
    sortId: 581,
    name: "Philosophies of Light",
    type: ResourceType.TalentLevelUp,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/95/Item_Philosophies_of_Light.png",
  },
  {
    id: "79e6d524-fef9-4ed3-909f-3cb864610b72",
    sortId: 582,
    name: "Guide to Light",
    type: ResourceType.TalentLevelUp,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/f/fe/Item_Guide_to_Light.png",
  },
  {
    id: "2c538e41-10d8-4661-ad64-4b151f23644a",
    sortId: 583,
    name: "Teachings of Light",
    type: ResourceType.TalentLevelUp,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/5/5e/Item_Teachings_of_Light.png",
  },
  {
    id: "048f3845-0790-4387-bd7b-2ba6aa58ea20",
    sortId: 591,
    name: "Crown of Insight",
    type: ResourceType.TalentLevelUp,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/04/Item_Crown_of_Insight.png",
  },
  {
    id: "863aeca1-f1f9-4dbe-9ffd-24506e2b306b",
    sortId: 701,
    name: "Scattered Piece of Decarabian's Dream",
    type: ResourceType.WeaponAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Item_Scattered_Piece_of_Decarabian%27s_Dream.png",
  },
  {
    id: "315cd234-ab82-4db4-ab3f-c002fc04e824",
    sortId: 702,
    name: "Fragment of Decarabian's Epic",
    type: ResourceType.WeaponAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/8/8a/Item_Fragment_of_Decarabian%27s_Epic.png",
  },
  {
    id: "11cdf104-87c6-4d71-b539-235bd3541e3f",
    sortId: 703,
    name: "Debris of Decarabian's City",
    type: ResourceType.WeaponAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/96/Item_Debris_of_Decarabian%27s_City.png",
  },
  {
    id: "24aaf40c-74b1-4b72-93d6-8d59000abb9c",
    sortId: 704,
    name: "Tile of Decarabian's Tower",
    type: ResourceType.WeaponAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/d/d7/Item_Tile_of_Decarabian%27s_Tower.png",
  },
  {
    id: "f174efa7-20e9-4342-866c-8a589bb584cd",
    sortId: 711,
    name: "Boreal Wolf's Nostalgia",
    type: ResourceType.WeaponAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/e/e0/Item_Boreal_Wolf%27s_Nostalgia.png",
  },
  {
    id: "e7733f7d-c3c5-4632-9d7f-3f96cc16922b",
    sortId: 712,
    name: "Boreal Wolf's Broken Fang",
    type: ResourceType.WeaponAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/98/Item_Boreal_Wolf%27s_Broken_Fang.png",
  },
  {
    id: "1d0b6597-1702-45f1-8df2-2368d3340f71",
    sortId: 713,
    name: "Boreal Wolf's Cracked Tooth",
    type: ResourceType.WeaponAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Boreal_Wolf%27s_Cracked_Tooth.png",
  },
  {
    id: "cb6f6d6e-2955-4b22-a816-228a9439cfe6",
    sortId: 714,
    name: "Boreal Wolf's Milk Tooth",
    type: ResourceType.WeaponAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Item_Boreal_Wolf%27s_Milk_Tooth.png",
  },
  {
    id: "46e9ccbc-d722-4e6a-a68a-b1b7d0b48bcb",
    sortId: 721,
    name: "Dream of the Dandelion Gladiator",
    type: ResourceType.WeaponAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/b4/Item_Dream_of_the_Dandelion_Gladiator.png",
  },
  {
    id: "7232c7f8-b085-4aea-8a07-2828bbea4cdd",
    sortId: 722,
    name: "Shackles of the Dandelion Gladiator",
    type: ResourceType.WeaponAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/40/Item_Shackles_of_the_Dandelion_Gladiator.png",
  },
  {
    id: "957dd0e9-ed84-4281-b1b5-4a88eb649210",
    sortId: 723,
    name: "Chains of the Dandelion Gladiator",
    type: ResourceType.WeaponAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/a/ad/Item_Chains_of_the_Dandelion_Gladiator.png",
  },
  {
    id: "2b6e5c7d-a701-4998-9914-2648c35b43d2",
    sortId: 724,
    name: "Fetters of the Dandelion Gladiator",
    type: ResourceType.WeaponAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/05/Item_Fetters_of_the_Dandelion_Gladiator.png",
  },
  {
    id: "219c197d-9720-465c-8dd8-52bb7cd2af6d",
    sortId: 731,
    name: "Divine Body from Guyun",
    type: ResourceType.WeaponAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/e/e8/Item_Divine_Body_from_Guyun.png",
  },
  {
    id: "2450a131-8f80-49ca-b5e8-e615d7ca0cdc",
    sortId: 732,
    name: "Relic from Guyun",
    type: ResourceType.WeaponAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/94/Item_Relic_from_Guyun.png",
  },
  {
    id: "6bbe1ab9-4ff7-4181-8687-0377a4756242",
    sortId: 733,
    name: "Lustrous Stone from Guyun",
    type: ResourceType.WeaponAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/c/cb/Item_Lustrous_Stone_from_Guyun.png",
  },
  {
    id: "c27892b7-1494-47e0-8cc4-1033172185b2",
    sortId: 734,
    name: "Luminous Sands from Guyun",
    type: ResourceType.WeaponAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/5/5d/Item_Luminous_Sands_from_Guyun.png",
  },
  {
    id: "9a58e62f-eb8f-40d5-a01a-0828f954a547",
    sortId: 741,
    name: "Mist Veiled Primo Elixir",
    type: ResourceType.WeaponAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/a/a3/Item_Mist_Veiled_Primo_Elixir.png",
  },
  {
    id: "28b9e1db-2372-46d3-96d4-78a89d6444ab",
    sortId: 742,
    name: "Mist Veiled Gold Elixir",
    type: ResourceType.WeaponAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/9b/Item_Mist_Veiled_Gold_Elixir.png",
  },
  {
    id: "4168e43a-2c62-4b45-9446-154b6a8626d3",
    sortId: 743,
    name: "Mist Veiled Mercury Elixir",
    type: ResourceType.WeaponAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/0f/Item_Mist_Veiled_Mercury_Elixir.png",
  },
  {
    id: "5278751e-eee7-46ff-8206-94a6287c0b27",
    sortId: 744,
    name: "Mist Veiled Lead Elixir",
    type: ResourceType.WeaponAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/a/a5/Item_Mist_Veiled_Lead_Elixir.png",
  },
  {
    id: "04a9031d-fbe4-42da-80ae-f6d45931af8e",
    sortId: 751,
    name: "Chunk of Aerosiderite",
    type: ResourceType.WeaponAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/48/Item_Chunk_of_Aerosiderite.png",
  },
  {
    id: "fc1c7633-5290-4613-a0f2-6349081e8008",
    sortId: 752,
    name: "Bit of Aerosiderite",
    type: ResourceType.WeaponAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/1/17/Item_Bit_of_Aerosiderite.png",
  },
  {
    id: "2d31adac-49bd-43e0-bba9-3c4f23b8a6bd",
    sortId: 753,
    name: "Piece of Aerosiderite",
    type: ResourceType.WeaponAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/0d/Item_Piece_of_Aerosiderite.png",
  },
  {
    id: "07303b85-bfe5-4c57-8973-9a7c7176241f",
    sortId: 754,
    name: "Grain of Aerosiderite",
    type: ResourceType.WeaponAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/47/Item_Grain_of_Aerosiderite.png",
  },
  {
    id: "346b71fc-e49e-46ca-b8be-bef6b980241e",
    sortId: 761,
    name: "Golden Branch of a Distant Sea",
    type: ResourceType.WeaponAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/e/ee/Item_Golden_Branch_of_a_Distant_Sea.png",
  },
  {
    id: "65ba9ce4-b86f-4990-8025-28da29eb7170",
    sortId: 762,
    name: "Jade Branch of a Distant Sea",
    type: ResourceType.WeaponAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/2/29/Item_Jade_Branch_of_a_Distant_Sea.png",
  },
  {
    id: "a39343e5-727d-433f-9d78-9f12eb3b4c20",
    sortId: 763,
    name: "Jeweled Branch of a Distant Sea",
    type: ResourceType.WeaponAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/1/19/Item_Jeweled_Branch_of_a_Distant_Sea.png",
  },
  {
    id: "dd11a525-09b8-461d-9a45-cbbdd2dd546f",
    sortId: 764,
    name: "Coral Branch of a Distant Sea",
    type: ResourceType.WeaponAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/a/a6/Item_Coral_Branch_of_a_Distant_Sea.png",
  },
  {
    id: "a1eef3ad-1a0f-4538-82bc-dd5dfaaaeabb",
    sortId: 771,
    name: "Narukami's Valor",
    type: ResourceType.WeaponAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/98/Item_Narukami%27s_Valor.png",
  },
  {
    id: "c22c734d-d81d-4d61-8216-aba0e5ea4f36",
    sortId: 772,
    name: "Narukami's Affection",
    type: ResourceType.WeaponAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/f/f5/Item_Narukami%27s_Affection.png",
  },
  {
    id: "211ea8b2-1b42-448f-8e0c-ebdfc9346ebb",
    sortId: 773,
    name: "Narukami's Joy",
    type: ResourceType.WeaponAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/5/5d/Item_Narukami%27s_Joy.png",
  },
  {
    id: "a90bf567-bd22-428f-aa35-bcf229818e56",
    sortId: 774,
    name: "Narukami's Wisdom",
    type: ResourceType.WeaponAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/40/Item_Narukami%27s_Wisdom.png",
  },
  {
    id: "4851d2c0-6cca-4de2-be4a-fb48b7f9768e",
    sortId: 781,
    name: "Mask of the Kijin",
    type: ResourceType.WeaponAscension,
    rarity: 5,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/5/54/Item_Mask_of_the_Kijin.png",
  },
  {
    id: "474d0fb5-fa46-4d9d-b5e9-aaf4cdc04833",
    sortId: 782,
    name: "Mask of the One-Horned",
    type: ResourceType.WeaponAscension,
    rarity: 4,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/a/a9/Item_Mask_of_the_One-Horned.png",
  },
  {
    id: "a91fcae1-4a31-45b1-91d6-997e2e0e1101",
    sortId: 783,
    name: "Mask of the Tiger's Bite",
    type: ResourceType.WeaponAscension,
    rarity: 3,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/93/Item_Mask_of_the_Tiger%27s_Bite.png",
  },
  {
    id: "a1d54788-3115-4ca7-b1f7-4c0fcdde6386",
    sortId: 784,
    name: "Mask of the Wicked Lieutenant",
    type: ResourceType.WeaponAscension,
    rarity: 2,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/34/Item_Mask_of_the_Wicked_Lieutenant.png",
  },
  {
    id: "957cddd3-80c2-4d25-8adb-bce685d5d042",
    sortId: 901,
    name: "Calla Lily",
    type: ResourceType.LocalSpecialty,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/d/de/Item_Calla_Lily.png",
  },
  {
    id: "8195ae22-ad3b-4c9c-95c3-94067b3a418a",
    sortId: 902,
    name: "Wolfhook",
    type: ResourceType.LocalSpecialty,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/5/57/Item_Wolfhook.png",
  },
  {
    id: "4712feee-d2f8-42d9-b16f-74bb825de747",
    sortId: 903,
    name: "Valberry",
    type: ResourceType.LocalSpecialty,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/e/ed/Item_Valberry.png",
  },
  {
    id: "efbb9506-6822-4b5b-b255-b0d48e2b9c1e",
    sortId: 904,
    name: "Cecilia",
    type: ResourceType.LocalSpecialty,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/9b/Item_Cecilia.png",
  },
  {
    id: "d4046eaa-cabc-4964-87fc-d2ff8818be92",
    sortId: 905,
    name: "Windwheel Aster",
    type: ResourceType.LocalSpecialty,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/32/Item_Windwheel_Aster.png",
  },
  {
    id: "7a6a63a8-805a-4b27-87d1-99644963fbf3",
    sortId: 906,
    name: "Philanemo Mushroom",
    type: ResourceType.LocalSpecialty,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/8/8a/Item_Philanemo_Mushroom.png",
  },
  {
    id: "33efc4a5-c6cf-46f0-9cf9-1e367efb8302",
    sortId: 907,
    name: "Small Lamp Grass",
    type: ResourceType.LocalSpecialty,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/1/17/Item_Small_Lamp_Grass.png",
  },
  {
    id: "c78fb2fe-2478-4afb-b6db-74e642d87c32",
    sortId: 908,
    name: "Dandelion Seed",
    type: ResourceType.LocalSpecialty,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/d/de/Item_Dandelion_Seed.png",
  },
  {
    id: "2b55c976-73d1-4e2a-a8dd-00e7b5cca68c",
    sortId: 909,
    name: "Jueyun Chili",
    type: ResourceType.LocalSpecialty,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/1/13/Item_Jueyun_Chili.png",
  },
  {
    id: "3032f0e7-59a1-44bd-a6fc-46b36440927e",
    sortId: 910,
    name: "Noctilucous Jade",
    type: ResourceType.LocalSpecialty,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/8/84/Item_Noctilucous_Jade.png",
  },
  {
    id: "a300a9e6-4eea-46fc-bef4-37a740f29bd1",
    sortId: 911,
    name: "Silk Flower",
    type: ResourceType.LocalSpecialty,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/37/Item_Silk_Flower.png",
  },
  {
    id: "16cbee37-e842-41ea-a094-b3894138930b",
    sortId: 912,
    name: "Glaze Lily",
    type: ResourceType.LocalSpecialty,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Item_Glaze_Lily.png",
  },
  {
    id: "b2fc5c17-dad7-4658-9ac9-224885f2270d",
    sortId: 913,
    name: "Qingxin",
    type: ResourceType.LocalSpecialty,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/2/2d/Item_Qingxin.png",
  },
  {
    id: "2a81a0ac-c415-43a5-96d5-b391420fce1d",
    sortId: 914,
    name: "Starconch",
    type: ResourceType.LocalSpecialty,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/46/Item_Starconch.png",
  },
  {
    id: "c6dbfe45-2a7b-4e96-b1dc-81b37ed4c40b",
    sortId: 915,
    name: "Violetgrass",
    type: ResourceType.LocalSpecialty,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/5/5d/Item_Violetgrass.png",
  },
  {
    id: "6ed4e141-f0d7-46e5-a2a5-3ce6c456dfe1",
    sortId: 916,
    name: "Cor Lapis",
    type: ResourceType.LocalSpecialty,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/a/aa/Item_Cor_Lapis.png",
  },
  {
    id: "c6218d4f-32b4-430c-b1ef-9a39aea7fcfb",
    sortId: 917,
    name: "Onikabuto",
    type: ResourceType.LocalSpecialty,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/a/a5/Item_Onikabuto.png",
  },
  {
    id: "7b39722b-54e7-4588-a6e3-e9042440a9bf",
    sortId: 918,
    name: "Sakura Bloom",
    type: ResourceType.LocalSpecialty,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/3d/Item_Sakura_Bloom.png",
  },
  {
    id: "ad09c11a-f80b-49af-ade8-45bced488aba",
    sortId: 919,
    name: "Crystal Marrow",
    type: ResourceType.LocalSpecialty,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/0f/Item_Crystal_Marrow.png",
  },
  {
    id: "1a3c74a4-9cef-41ca-bbaf-dee4966d5a82",
    sortId: 920,
    name: "Dendobrium",
    type: ResourceType.LocalSpecialty,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/d/d7/Item_Dendrobium.png",
  },
  {
    id: "53a40e4f-6636-4007-9ed1-9ad1f0dfb5fa",
    sortId: 921,
    name: "Naku Weed",
    type: ResourceType.LocalSpecialty,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/a/ac/Item_Naku_Weed.png",
  },
  {
    id: "76fb08c7-7f2f-4eea-9ffa-6baf5f22e056",
    sortId: 922,
    name: "Sea Ganoderma",
    type: ResourceType.LocalSpecialty,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/6/6d/Item_Sea_Ganoderma.png",
  },
  {
    id: "3768b601-249b-40f5-acd0-eb24b2d489f6",
    sortId: 923,
    name: "Sango Pearl",
    type: ResourceType.LocalSpecialty,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/07/Item_Sango_Pearl.png",
  },
  {
    id: "6230292f-7352-40e8-8900-29baf773b332",
    sortId: 924,
    name: "Amakumo Fruit",
    type: ResourceType.LocalSpecialty,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/8/8a/Item_Amakumo_Fruit.png",
  },
  {
    id: "c46875e1-5800-4eab-b858-6b887fb863c0",
    sortId: 925,
    name: "Fluorescent Fungus",
    type: ResourceType.LocalSpecialty,
    rarity: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/0f/Item_Fluorescent_Fungus.png",
  },
];

export const resourceIds = resources.map((r) => r.id);
