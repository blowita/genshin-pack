import { CharacterId, ElementType } from "./characters";
import { ResourceId } from "./resources";

export const expTable = [
  0,
  1000,
  2325,
  4025,
  6175,
  8800,
  11950,
  15675,
  20025,
  25025,
  30725,
  37175,
  44400,
  52450,
  61375,
  71200,
  81950,
  93675,
  106400,
  120175,
  135050,
  151850,
  169850,
  189100,
  209650,
  231525,
  254775,
  279425,
  305525,
  333100,
  362200,
  392850,
  425100,
  458975,
  494525,
  531775,
  570750,
  611500,
  654075,
  698500,
  744800,
  795425,
  848125,
  902900,
  959800,
  1018875,
  1080150,
  1143675,
  1209475,
  1277600,
  1348075,
  1424575,
  1503625,
  1585275,
  1669550,
  1756500,
  1846150,
  1938550,
  2033725,
  2131725,
  2232600,
  2341550,
  2453600,
  2568775,
  2687100,
  2808625,
  2933400,
  3061475,
  3192875,
  3327650,
  3465825,
  3614525,
  3766900,
  3922975,
  4082800,
  4246400,
  4413825,
  4585125,
  4760350,
  4939525,
  5122700,
  5338925,
  5581950,
  5855050,
  6161850,
  6506450,
  6893400,
  7327825,
  7815450,
  8362650,
];

export const ascensionLimits = [20, 40, 50, 60, 70, 80, 90];

export const ascensionCost = [0, 20000, 60000, 120000, 200000, 300000, 420000];

export const talentLimits = [1, 1, 2, 4, 6, 8, 10];

export const talentUpgradeCost = [
  0,
  12500,
  30000,
  55000,
  85000,
  122500,
  242500,
  502500,
  952500,
  1652500,
];

export interface TalentsResourceMapping {
  attack: number[];
  skill: number[];
  burst: number[];
}

export type TalentsResourcesMapping = Record<string, TalentsResourceMapping>;

export type TravelerTalentsResourcesMapping = Omit<
  Record<ElementType, TalentsResourcesMapping | undefined>,
  ElementType.Adaptative
>;

interface ResourcesMapping {
  ascension: Record<string, number[]>;
  talents: TravelerTalentsResourcesMapping | TalentsResourcesMapping;
}

type CharacterResourcesMapping = Record<string, ResourcesMapping>;

export const characterResourcesMapping = {
  [CharacterId.Traveler]: {
    ascension: {
      // ResourceType.CharacterAscension
      "c88006ba-b5e1-4590-9dc2-9bbd96372e6a": [0, 1, 1, 1, 1, 1, 1],
      "72b955d1-45de-4bc2-8e6e-cfb12a2c7e4b": [0, 0, 3, 9, 9, 9, 9],
      "daeacbd8-ee72-439a-9185-44cf1d4fe0e4": [0, 0, 0, 0, 3, 9, 9],
      "0dd1b0ea-0903-473c-bebf-fdf140da4200": [0, 0, 0, 0, 0, 0, 6],
      // ResourceType.LocalSpecialty
      "d4046eaa-cabc-4964-87fc-d2ff8818be92": [0, 3, 13, 33, 63, 108, 168],
      // ResourceType.CommonAscension
      "01017501-c8f9-414f-bae3-49de240cd66d": [0, 3, 18, 18, 18, 18, 18],
      "202312e1-90a4-4f42-97ad-f2abddb02dd8": [0, 0, 0, 12, 30, 30, 30],
      "f2691f69-b517-4d99-8676-393f88c6c96b": [0, 0, 0, 0, 0, 12, 36],
    },
    talents: {
      [ElementType.Anemo]: {
        // ResourceType.CommonAscension
        "805f5d24-3125-4f7a-9dcf-b847db68f159": {
          attack: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
          skill: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
          burst: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        },
        "867000d4-38e0-4479-9b68-70f6a5815355": {
          attack: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
          skill: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
          burst: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        },
        "73f5400b-57a6-41b3-92da-4060089e09cc": {
          attack: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
          skill: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
          burst: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        },
        // ResourceType.TalentLevelUp (Books rarity 2)
        "89295394-2833-448e-a711-5b579f2cd094": {
          attack: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          skill: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          burst: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        },
        // ResourceType.TalentLevelUp (Books rarity 3)
        "a94aee18-6e37-4308-b570-f7f3f7e4a799": {
          attack: [0, 0, 0, 0, 6, 6, 6, 6, 6, 6],
          skill: [0, 0, 0, 0, 6, 6, 6, 6, 6, 6],
          burst: [0, 0, 0, 0, 6, 6, 6, 6, 6, 6],
        },
        "6b88e6ee-966f-482c-8152-3f9a65cecd95": {
          attack: [0, 0, 2, 2, 2, 11, 11, 11, 11, 11],
          skill: [0, 0, 2, 2, 2, 11, 11, 11, 11, 11],
          burst: [0, 0, 2, 2, 2, 11, 11, 11, 11, 11],
        },
        "b82d3c82-b809-4622-b59a-3f035a009b40": {
          attack: [0, 0, 0, 4, 4, 4, 4, 4, 4, 4],
          skill: [0, 0, 0, 4, 4, 4, 4, 4, 4, 4],
          burst: [0, 0, 0, 4, 4, 4, 4, 4, 4, 4],
        },
        // ResourceType.TalentLevelUp (Books rarity 4)
        "70dc1c5e-fa86-4461-8b79-8118eb469470": {
          attack: [0, 0, 0, 0, 0, 0, 0, 6, 6, 6],
          skill: [0, 0, 0, 0, 0, 0, 0, 6, 6, 6],
          burst: [0, 0, 0, 0, 0, 0, 0, 6, 6, 6],
        },
        "9654c0a1-8023-4991-a4e0-e2e20a0eb7de": {
          attack: [0, 0, 0, 0, 0, 0, 0, 0, 12, 12],
          skill: [0, 0, 0, 0, 0, 0, 0, 0, 12, 12],
          burst: [0, 0, 0, 0, 0, 0, 0, 0, 12, 12],
        },
        "1121fb80-96d6-40fb-b3c4-65b78b97def2": {
          attack: [0, 0, 0, 0, 0, 0, 4, 4, 4, 20],
          skill: [0, 0, 0, 0, 0, 0, 4, 4, 4, 20],
          burst: [0, 0, 0, 0, 0, 0, 4, 4, 4, 20],
        },
        // ResourceType.TalentLevelUp Boss
        "b1669fd0-f362-4f15-ac2f-09ecbba07b97": {
          attack: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
          skill: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
          burst: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        },
        // ResourceType.TalentLevelUp Crown
        [ResourceId.CrownOfInsight]: {
          attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
          skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
          burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        },
      },
      [ElementType.Cryo]: undefined,
      [ElementType.Dendro]: undefined,
      [ElementType.Electro]: {
        // ResourceType.CommonAscension
        "4d8cdb1b-4a74-4d9f-8138-c9c27cf706ed": {
          attack: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
          skill: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
          burst: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        },
        "7e9b3018-a410-4f0a-bf6a-a74a5b848c79": {
          attack: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
          skill: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
          burst: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        },
        "650b3317-0dd3-4e6d-98ff-fc204dd11b15": {
          attack: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
          skill: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
          burst: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        },
        // ResourceType.TalentLevelUp (Books rarity 2)
        "7a183023-12e1-401b-aaa8-86463beaa79b": {
          attack: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          skill: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          burst: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        },
        // ResourceType.TalentLevelUp (Books rarity 3)
        "a7c40e1d-d21a-4d4c-9969-4c49cfb207d3": {
          attack: [0, 0, 0, 0, 6, 6, 6, 6, 6, 6],
          skill: [0, 0, 0, 0, 6, 6, 6, 6, 6, 6],
          burst: [0, 0, 0, 0, 6, 6, 6, 6, 6, 6],
        },
        "dd735759-bf3f-4237-a003-f9b0b648e0ad": {
          attack: [0, 0, 2, 2, 2, 11, 11, 11, 11, 11],
          skill: [0, 0, 2, 2, 2, 11, 11, 11, 11, 11],
          burst: [0, 0, 2, 2, 2, 11, 11, 11, 11, 11],
        },
        "79e6d524-fef9-4ed3-909f-3cb864610b72": {
          attack: [0, 0, 0, 4, 4, 4, 4, 4, 4, 4],
          skill: [0, 0, 0, 4, 4, 4, 4, 4, 4, 4],
          burst: [0, 0, 0, 4, 4, 4, 4, 4, 4, 4],
        },
        // ResourceType.TalentLevelUp (Books rarity 4)
        "1977ddfe-00ef-43bd-9a08-9e49118cead0": {
          attack: [0, 0, 0, 0, 0, 0, 0, 6, 6, 6],
          skill: [0, 0, 0, 0, 0, 0, 0, 6, 6, 6],
          burst: [0, 0, 0, 0, 0, 0, 0, 6, 6, 6],
        },
        "babf7860-723b-4c6a-9e25-3c15b83a89a6": {
          attack: [0, 0, 0, 0, 0, 0, 0, 0, 12, 12],
          skill: [0, 0, 0, 0, 0, 0, 0, 0, 12, 12],
          burst: [0, 0, 0, 0, 0, 0, 0, 0, 12, 12],
        },
        "5fb093aa-0fc7-4d60-ad42-28b44679d717": {
          attack: [0, 0, 0, 0, 0, 0, 4, 4, 4, 20],
          skill: [0, 0, 0, 0, 0, 0, 4, 4, 4, 20],
          burst: [0, 0, 0, 0, 0, 0, 4, 4, 4, 20],
        },
        // ResourceType.TalentLevelUp Boss
        "5180192e-7e6a-4b23-9c6b-fe19dee4b88a": {
          attack: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
          skill: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
          burst: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        },
        // ResourceType.TalentLevelUp Crown
        [ResourceId.CrownOfInsight]: {
          attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
          skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
          burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        },
      },
      [ElementType.Geo]: {
        // ResourceType.CommonAscension
        "805f5d24-3125-4f7a-9dcf-b847db68f159": {
          attack: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
          skill: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
          burst: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        },
        "867000d4-38e0-4479-9b68-70f6a5815355": {
          attack: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
          skill: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
          burst: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        },
        "73f5400b-57a6-41b3-92da-4060089e09cc": {
          attack: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
          skill: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
          burst: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        },
        // ResourceType.TalentLevelUp (Books rarity 2)
        "89295394-2833-448e-a711-5b579f2cd094": {
          attack: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          skill: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          burst: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        },
        // ResourceType.TalentLevelUp (Books rarity 3)
        "a94aee18-6e37-4308-b570-f7f3f7e4a799": {
          attack: [0, 0, 0, 0, 6, 6, 6, 6, 6, 6],
          skill: [0, 0, 0, 0, 6, 6, 6, 6, 6, 6],
          burst: [0, 0, 0, 0, 6, 6, 6, 6, 6, 6],
        },
        "6b88e6ee-966f-482c-8152-3f9a65cecd95": {
          attack: [0, 0, 2, 2, 2, 11, 11, 11, 11, 11],
          skill: [0, 0, 2, 2, 2, 11, 11, 11, 11, 11],
          burst: [0, 0, 2, 2, 2, 11, 11, 11, 11, 11],
        },
        "b82d3c82-b809-4622-b59a-3f035a009b40": {
          attack: [0, 0, 0, 4, 4, 4, 4, 4, 4, 4],
          skill: [0, 0, 0, 4, 4, 4, 4, 4, 4, 4],
          burst: [0, 0, 0, 4, 4, 4, 4, 4, 4, 4],
        },
        // ResourceType.TalentLevelUp (Books rarity 4)
        "70dc1c5e-fa86-4461-8b79-8118eb469470": {
          attack: [0, 0, 0, 0, 0, 0, 0, 6, 6, 6],
          skill: [0, 0, 0, 0, 0, 0, 0, 6, 6, 6],
          burst: [0, 0, 0, 0, 0, 0, 0, 6, 6, 6],
        },
        "9654c0a1-8023-4991-a4e0-e2e20a0eb7de": {
          attack: [0, 0, 0, 0, 0, 0, 0, 0, 12, 12],
          skill: [0, 0, 0, 0, 0, 0, 0, 0, 12, 12],
          burst: [0, 0, 0, 0, 0, 0, 0, 0, 12, 12],
        },
        "1121fb80-96d6-40fb-b3c4-65b78b97def2": {
          attack: [0, 0, 0, 0, 0, 0, 4, 4, 4, 20],
          skill: [0, 0, 0, 0, 0, 0, 4, 4, 4, 20],
          burst: [0, 0, 0, 0, 0, 0, 4, 4, 4, 20],
        },
        // ResourceType.TalentLevelUp Boss
        "b1669fd0-f362-4f15-ac2f-09ecbba07b97": {
          attack: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
          skill: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
          burst: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        },
        // ResourceType.TalentLevelUp Crown
        [ResourceId.CrownOfInsight]: {
          attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
          skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
          burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        },
      },
      [ElementType.Hydro]: undefined,
      [ElementType.Pyro]: undefined,
    },
  },
  [CharacterId.Thoma]: {
    ascension: {
      // ResourceType.CharacterAscension
      "4424a041-1ae1-4f4e-9688-eb478d60177d": [0, 0, 2, 6, 14, 26, 46],
      "7cc35603-3bdb-4bbf-a190-8a9c65bdf687": [0, 1, 1, 1, 1, 1, 1],
      "7c722573-c512-4a1b-b26e-7f3a92d8a8df": [0, 0, 3, 9, 9, 9, 9],
      "51aa9fd3-5bea-47cc-90e3-d83c727e2fd3": [0, 0, 0, 0, 3, 9, 9],
      "16d49bf8-03f8-4a91-8228-efaa8501518d": [0, 0, 0, 0, 0, 0, 6],
      // ResourceType.LocalSpecialty
      "c46875e1-5800-4eab-b858-6b887fb863c0": [0, 3, 13, 33, 63, 108, 168],
      // ResourceType.CommonAscension
      "6dc63deb-2b12-4c4e-b7c8-038ee95084b0": [0, 3, 18, 18, 18, 18, 18],
      "6648e162-f681-4025-99c6-10c06aa0223f": [0, 0, 0, 12, 30, 30, 30],
      "b53674e9-3f59-401c-b41c-ce4e39d23ea9": [0, 0, 0, 0, 0, 12, 36],
    },
    talents: {
      // ResourceType.CommonAscension
      "6dc63deb-2b12-4c4e-b7c8-038ee95084b0": {
        attack: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        skill: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        burst: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
      },
      "6648e162-f681-4025-99c6-10c06aa0223f": {
        attack: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        skill: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        burst: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
      },
      "b53674e9-3f59-401c-b41c-ce4e39d23ea9": {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
      },
      // ResourceType.TalentLevelUp (Books rarity 2)
      "7a183023-12e1-401b-aaa8-86463beaa79b": {
        attack: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        skill: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        burst: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      },
      // ResourceType.TalentLevelUp (Books rarity 3)
      "a7c40e1d-d21a-4d4c-9969-4c49cfb207d3": {
        attack: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        skill: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        burst: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
      },
      // ResourceType.TalentLevelUp (Books rarity 4)
      "1977ddfe-00ef-43bd-9a08-9e49118cead0": {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
      },
      // ResourceType.TalentLevelUp Boss
      "a17c2fc2-380f-4142-8c13-99845f2d3187": {
        attack: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        skill: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        burst: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
      },
      // ResourceType.TalentLevelUp Crown
      [ResourceId.CrownOfInsight]: {
        attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      },
    },
  },
} as CharacterResourcesMapping;
