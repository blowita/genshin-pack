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
      [ResourceId.BrilliantDiamondSliver]: [0, 1, 1, 1, 1, 1, 1],
      [ResourceId.BrilliantDiamondFragment]: [0, 0, 3, 9, 9, 9, 9],
      [ResourceId.BrilliantDiamondChunk]: [0, 0, 0, 0, 3, 9, 9],
      [ResourceId.BrilliantDiamondGemstone]: [0, 0, 0, 0, 0, 0, 6],
      [ResourceId.WindwheelAster]: [0, 3, 13, 33, 63, 108, 168],
      [ResourceId.DamagedMask]: [0, 3, 18, 18, 18, 18, 18],
      [ResourceId.StainedMask]: [0, 0, 0, 12, 30, 30, 30],
      [ResourceId.OminousMask]: [0, 0, 0, 0, 0, 12, 36],
    },
    talents: {
      [ElementType.Anemo]: {
        [ResourceId.DiviningScroll]: {
          attack: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
          skill: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
          burst: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        },
        [ResourceId.SealedScroll]: {
          attack: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
          skill: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
          burst: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        },
        [ResourceId.ForbiddenCurseScroll]: {
          attack: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
          skill: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
          burst: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        },
        [ResourceId.TeachingsOfFreedom]: {
          attack: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          skill: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          burst: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        },
        [ResourceId.GuideToFreedom]: {
          attack: [0, 0, 0, 0, 6, 6, 6, 6, 6, 6],
          skill: [0, 0, 0, 0, 6, 6, 6, 6, 6, 6],
          burst: [0, 0, 0, 0, 6, 6, 6, 6, 6, 6],
        },
        [ResourceId.GuideToResistance]: {
          attack: [0, 0, 2, 2, 2, 11, 11, 11, 11, 11],
          skill: [0, 0, 2, 2, 2, 11, 11, 11, 11, 11],
          burst: [0, 0, 2, 2, 2, 11, 11, 11, 11, 11],
        },
        [ResourceId.GuideToBallad]: {
          attack: [0, 0, 0, 4, 4, 4, 4, 4, 4, 4],
          skill: [0, 0, 0, 4, 4, 4, 4, 4, 4, 4],
          burst: [0, 0, 0, 4, 4, 4, 4, 4, 4, 4],
        },
        [ResourceId.PhilosophiesOfFreedom]: {
          attack: [0, 0, 0, 0, 0, 0, 0, 6, 6, 6],
          skill: [0, 0, 0, 0, 0, 0, 0, 6, 6, 6],
          burst: [0, 0, 0, 0, 0, 0, 0, 6, 6, 6],
        },
        [ResourceId.PhilosophiesOfResistance]: {
          attack: [0, 0, 0, 0, 0, 0, 0, 0, 12, 12],
          skill: [0, 0, 0, 0, 0, 0, 0, 0, 12, 12],
          burst: [0, 0, 0, 0, 0, 0, 0, 0, 12, 12],
        },
        [ResourceId.PhilosophiesOfBallad]: {
          attack: [0, 0, 0, 0, 0, 0, 4, 4, 4, 20],
          skill: [0, 0, 0, 0, 0, 0, 4, 4, 4, 20],
          burst: [0, 0, 0, 0, 0, 0, 4, 4, 4, 20],
        },
        [ResourceId.DvalinsSigh]: {
          attack: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
          skill: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
          burst: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        },
        [ResourceId.CrownOfInsight]: {
          attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
          skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
          burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        },
      },
      [ElementType.Cryo]: undefined,
      [ElementType.Dendro]: undefined,
      [ElementType.Electro]: {
        [ResourceId.OldHandguard]: {
          attack: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
          skill: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
          burst: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        },
        [ResourceId.KageuchiHandguard]: {
          attack: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
          skill: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
          burst: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        },
        [ResourceId.FamedHandguard]: {
          attack: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
          skill: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
          burst: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        },
        [ResourceId.TeachingsOfTransience]: {
          attack: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          skill: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          burst: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        },
        [ResourceId.GuideToTransience]: {
          attack: [0, 0, 0, 0, 6, 6, 6, 6, 6, 6],
          skill: [0, 0, 0, 0, 6, 6, 6, 6, 6, 6],
          burst: [0, 0, 0, 0, 6, 6, 6, 6, 6, 6],
        },
        [ResourceId.GuideToElegance]: {
          attack: [0, 0, 2, 2, 2, 11, 11, 11, 11, 11],
          skill: [0, 0, 2, 2, 2, 11, 11, 11, 11, 11],
          burst: [0, 0, 2, 2, 2, 11, 11, 11, 11, 11],
        },
        [ResourceId.GuideToLight]: {
          attack: [0, 0, 0, 4, 4, 4, 4, 4, 4, 4],
          skill: [0, 0, 0, 4, 4, 4, 4, 4, 4, 4],
          burst: [0, 0, 0, 4, 4, 4, 4, 4, 4, 4],
        },
        [ResourceId.PhilosophiesOfTransience]: {
          attack: [0, 0, 0, 0, 0, 0, 0, 6, 6, 6],
          skill: [0, 0, 0, 0, 0, 0, 0, 6, 6, 6],
          burst: [0, 0, 0, 0, 0, 0, 0, 6, 6, 6],
        },
        [ResourceId.PhilosophiesOfElegance]: {
          attack: [0, 0, 0, 0, 0, 0, 0, 0, 12, 12],
          skill: [0, 0, 0, 0, 0, 0, 0, 0, 12, 12],
          burst: [0, 0, 0, 0, 0, 0, 0, 0, 12, 12],
        },
        [ResourceId.PhilosophiesOfLight]: {
          attack: [0, 0, 0, 0, 0, 0, 4, 4, 4, 20],
          skill: [0, 0, 0, 0, 0, 0, 4, 4, 4, 20],
          burst: [0, 0, 0, 0, 0, 0, 4, 4, 4, 20],
        },
        [ResourceId.DragonLordsCrown]: {
          attack: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
          skill: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
          burst: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        },
        [ResourceId.CrownOfInsight]: {
          attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
          skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
          burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        },
      },
      [ElementType.Geo]: {
        [ResourceId.DiviningScroll]: {
          attack: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
          skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        [ResourceId.SealedScroll]: {
          attack: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
          skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        [ResourceId.ForbiddenCurseScroll]: {
          attack: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
          skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        [ResourceId.FirmArrowhead]: {
          attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          skill: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
          burst: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        },
        [ResourceId.SharpArrowhead]: {
          attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          skill: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
          burst: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        },
        [ResourceId.WeatheredArrowhead]: {
          attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          skill: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
          burst: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        },
        [ResourceId.TeachingsOfFreedom]: {
          attack: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        [ResourceId.TeachingsOfProsperity]: {
          attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          skill: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          burst: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        },
        [ResourceId.GuideToFreedom]: {
          attack: [0, 0, 0, 0, 6, 6, 6, 6, 6, 6],
          skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        [ResourceId.GuideToResistance]: {
          attack: [0, 0, 2, 2, 2, 11, 11, 11, 11, 11],
          skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        [ResourceId.GuideToBallad]: {
          attack: [0, 0, 0, 4, 4, 4, 4, 4, 4, 4],
          skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        [ResourceId.GuideToProsperity]: {
          attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          skill: [0, 0, 0, 0, 6, 6, 6, 6, 6, 6],
          burst: [0, 0, 0, 0, 6, 6, 6, 6, 6, 6],
        },
        [ResourceId.GuideToDiligence]: {
          attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          skill: [0, 0, 2, 2, 2, 11, 11, 11, 11, 11],
          burst: [0, 0, 2, 2, 2, 11, 11, 11, 11, 11],
        },
        [ResourceId.GuideToGold]: {
          attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          skill: [0, 0, 0, 4, 4, 4, 4, 4, 4, 4],
          burst: [0, 0, 0, 4, 4, 4, 4, 4, 4, 4],
        },
        [ResourceId.PhilosophiesOfFreedom]: {
          attack: [0, 0, 0, 0, 0, 0, 0, 6, 6, 6],
          skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        [ResourceId.PhilosophiesOfResistance]: {
          attack: [0, 0, 0, 0, 0, 0, 0, 0, 12, 12],
          skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        [ResourceId.PhilosophiesOfBallad]: {
          attack: [0, 0, 0, 0, 0, 0, 4, 4, 4, 20],
          skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        [ResourceId.PhilosophiesOfProsperity]: {
          attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          skill: [0, 0, 0, 0, 0, 0, 0, 6, 6, 6],
          burst: [0, 0, 0, 0, 0, 0, 0, 6, 6, 6],
        },
        [ResourceId.PhilosophiesOfDiligence]: {
          attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          skill: [0, 0, 0, 0, 0, 0, 0, 0, 12, 12],
          burst: [0, 0, 0, 0, 0, 0, 0, 0, 12, 12],
        },
        [ResourceId.PhilosophiesOfGold]: {
          attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          skill: [0, 0, 0, 0, 0, 0, 4, 4, 4, 20],
          burst: [0, 0, 0, 0, 0, 0, 4, 4, 4, 20],
        },
        [ResourceId.DvalinsSigh]: {
          attack: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
          skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        [ResourceId.TailOfBoreas]: {
          attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          skill: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
          burst: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        },
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
      [ResourceId.SmolderingPearl]: [0, 0, 2, 6, 14, 26, 46],
      [ResourceId.AgnidusAgateSliver]: [0, 1, 1, 1, 1, 1, 1],
      [ResourceId.AgnidusAgateFragment]: [0, 0, 3, 9, 9, 9, 9],
      [ResourceId.AgnidusAgateChunk]: [0, 0, 0, 0, 3, 9, 9],
      [ResourceId.AgnidusAgateGemstone]: [0, 0, 0, 0, 0, 0, 6],
      [ResourceId.FluorescentFungus]: [0, 3, 13, 33, 63, 108, 168],
      [ResourceId.TreasureHoarderInsignia]: [0, 3, 18, 18, 18, 18, 18],
      [ResourceId.SilverRavenInsignia]: [0, 0, 0, 12, 30, 30, 30],
      [ResourceId.GoldenRavenInsignia]: [0, 0, 0, 0, 0, 12, 36],
    },
    talents: {
      [ResourceId.TreasureHoarderInsignia]: {
        attack: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        skill: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        burst: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
      },
      [ResourceId.SilverRavenInsignia]: {
        attack: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        skill: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        burst: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
      },
      [ResourceId.GoldenRavenInsignia]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
      },
      [ResourceId.TeachingsOfTransience]: {
        attack: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        skill: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        burst: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      },
      [ResourceId.GuideToTransience]: {
        attack: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        skill: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        burst: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
      },
      [ResourceId.PhilosophiesOfTransience]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
      },
      [ResourceId.HellfireButterfly]: {
        attack: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        skill: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        burst: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
      },
      [ResourceId.CrownOfInsight]: {
        attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      },
    },
  },
  [CharacterId.SangonomiyaKokomi]: {
    ascension: {
      [ResourceId.DewOfRepudiation]: [0, 0, 2, 6, 14, 26, 46],
      [ResourceId.VarunadaLazuriteSliver]: [0, 1, 1, 1, 1, 1, 1],
      [ResourceId.VarunadaLazuriteFragment]: [0, 0, 3, 9, 9, 9, 9],
      [ResourceId.VarunadaLazuriteChunk]: [0, 0, 0, 0, 3, 9, 9],
      [ResourceId.VarunadaLazuriteGemstone]: [0, 0, 0, 0, 0, 0, 6],
      [ResourceId.SangoPearl]: [0, 3, 13, 33, 63, 108, 168],
      [ResourceId.SpectralHusk]: [0, 3, 18, 18, 18, 18, 18],
      [ResourceId.SpectralHeart]: [0, 0, 0, 12, 30, 30, 30],
      [ResourceId.SpectralNucleus]: [0, 0, 0, 0, 0, 12, 36],
    },
    talents: {
      [ResourceId.SpectralHusk]: {
        attack: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        skill: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        burst: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
      },
      [ResourceId.SpectralHeart]: {
        attack: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        skill: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        burst: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
      },
      [ResourceId.SpectralNucleus]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
      },
      [ResourceId.TeachingsOfTransience]: {
        attack: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        skill: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        burst: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      },
      [ResourceId.GuideToTransience]: {
        attack: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        skill: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        burst: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
      },
      [ResourceId.PhilosophiesOfTransience]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
      },
      [ResourceId.HellfireButterfly]: {
        attack: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        skill: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        burst: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
      },
      [ResourceId.CrownOfInsight]: {
        attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      },
    },
  },
  [CharacterId.RaidenShogun]: {
    ascension: {
      [ResourceId.StormBeads]: [0, 0, 2, 6, 14, 26, 46],
      [ResourceId.VajradaAmethystSliver]: [0, 1, 1, 1, 1, 1, 1],
      [ResourceId.VajradaAmethystFragment]: [0, 0, 3, 9, 9, 9, 9],
      [ResourceId.VajradaAmethystChunk]: [0, 0, 0, 0, 3, 9, 9],
      [ResourceId.VajradaAmethystGemstone]: [0, 0, 0, 0, 0, 0, 6],
      [ResourceId.AmakumoFruit]: [0, 3, 13, 33, 63, 108, 168],
      [ResourceId.OldHandguard]: [0, 3, 18, 18, 18, 18, 18],
      [ResourceId.KageuchiHandguard]: [0, 0, 0, 12, 30, 30, 30],
      [ResourceId.FamedHandguard]: [0, 0, 0, 0, 0, 12, 36],
    },
    talents: {
      [ResourceId.OldHandguard]: {
        attack: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        skill: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        burst: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
      },
      [ResourceId.KageuchiHandguard]: {
        attack: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        skill: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        burst: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
      },
      [ResourceId.FamedHandguard]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
      },
      [ResourceId.TeachingsOfLight]: {
        attack: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        skill: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        burst: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      },
      [ResourceId.GuideToLight]: {
        attack: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        skill: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        burst: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
      },
      [ResourceId.PhilosophiesOfLight]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
      },
      [ResourceId.MoltenMoment]: {
        attack: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        skill: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        burst: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
      },
      [ResourceId.CrownOfInsight]: {
        attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      },
    },
  },
  [CharacterId.KujouSara]: {
    ascension: {
      [ResourceId.StormBeads]: [0, 0, 2, 6, 14, 26, 46],
      [ResourceId.VajradaAmethystSliver]: [0, 1, 1, 1, 1, 1, 1],
      [ResourceId.VajradaAmethystFragment]: [0, 0, 3, 9, 9, 9, 9],
      [ResourceId.VajradaAmethystChunk]: [0, 0, 0, 0, 3, 9, 9],
      [ResourceId.VajradaAmethystGemstone]: [0, 0, 0, 0, 0, 0, 6],
      [ResourceId.Dendobrium]: [0, 3, 13, 33, 63, 108, 168],
      [ResourceId.DamagedMask]: [0, 3, 18, 18, 18, 18, 18],
      [ResourceId.StainedMask]: [0, 0, 0, 12, 30, 30, 30],
      [ResourceId.OminousMask]: [0, 0, 0, 0, 0, 12, 36],
    },
    talents: {
      [ResourceId.DamagedMask]: {
        attack: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        skill: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        burst: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
      },
      [ResourceId.StainedMask]: {
        attack: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        skill: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        burst: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
      },
      [ResourceId.OminousMask]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
      },
      [ResourceId.TeachingsOfElegance]: {
        attack: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        skill: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        burst: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      },
      [ResourceId.GuideToElegance]: {
        attack: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        skill: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        burst: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
      },
      [ResourceId.PhilosophiesOfElegance]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
      },
      [ResourceId.AshenHeart]: {
        attack: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        skill: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        burst: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
      },
      [ResourceId.CrownOfInsight]: {
        attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      },
    },
  },
  [CharacterId.Aloy]: {
    ascension: {
      [ResourceId.CrystallineBloom]: [0, 0, 2, 6, 14, 26, 46],
      [ResourceId.ShivadaJadeSliver]: [0, 1, 1, 1, 1, 1, 1],
      [ResourceId.ShivadaJadeFragment]: [0, 0, 3, 9, 9, 9, 9],
      [ResourceId.ShivadaJadeChunk]: [0, 0, 0, 0, 3, 9, 9],
      [ResourceId.ShivadaJadeGemstone]: [0, 0, 0, 0, 0, 0, 6],
      [ResourceId.CrystalMarrow]: [0, 3, 13, 33, 63, 108, 168],
      [ResourceId.SpectralHusk]: [0, 3, 18, 18, 18, 18, 18],
      [ResourceId.SpectralHeart]: [0, 0, 0, 12, 30, 30, 30],
      [ResourceId.SpectralNucleus]: [0, 0, 0, 0, 0, 12, 36],
    },
    talents: {
      [ResourceId.SpectralHusk]: {
        attack: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        skill: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        burst: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
      },
      [ResourceId.SpectralHeart]: {
        attack: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        skill: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        burst: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
      },
      [ResourceId.SpectralNucleus]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
      },
      [ResourceId.TeachingsOfFreedom]: {
        attack: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        skill: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        burst: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      },
      [ResourceId.GuideToFreedom]: {
        attack: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        skill: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        burst: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
      },
      [ResourceId.PhilosophiesOfFreedom]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
      },
      [ResourceId.MoltenMoment]: {
        attack: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        skill: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        burst: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
      },
      [ResourceId.CrownOfInsight]: {
        attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      },
    },
  },
  [CharacterId.KamisatoAyaka]: {
    ascension: {
      [ResourceId.PerpetualHeart]: [0, 0, 2, 6, 14, 26, 46],
      [ResourceId.ShivadaJadeSliver]: [0, 1, 1, 1, 1, 1, 1],
      [ResourceId.ShivadaJadeFragment]: [0, 0, 3, 9, 9, 9, 9],
      [ResourceId.ShivadaJadeChunk]: [0, 0, 0, 0, 3, 9, 9],
      [ResourceId.ShivadaJadeGemstone]: [0, 0, 0, 0, 0, 0, 6],
      [ResourceId.SakuraBloom]: [0, 3, 13, 33, 63, 108, 168],
      [ResourceId.OldHandguard]: [0, 3, 18, 18, 18, 18, 18],
      [ResourceId.KageuchiHandguard]: [0, 0, 0, 12, 30, 30, 30],
      [ResourceId.FamedHandguard]: [0, 0, 0, 0, 0, 12, 36],
    },
    talents: {
      [ResourceId.OldHandguard]: {
        attack: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        skill: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        burst: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
      },
      [ResourceId.KageuchiHandguard]: {
        attack: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        skill: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        burst: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
      },
      [ResourceId.FamedHandguard]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
      },
      [ResourceId.TeachingsOfElegance]: {
        attack: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        skill: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        burst: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      },
      [ResourceId.GuideToElegance]: {
        attack: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        skill: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        burst: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
      },
      [ResourceId.PhilosophiesOfElegance]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
      },
      [ResourceId.BloodjadeBranch]: {
        attack: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        skill: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        burst: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
      },
      [ResourceId.CrownOfInsight]: {
        attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      },
    },
  },
  [CharacterId.Yoimiya]: {
    ascension: {
      [ResourceId.SmolderingPearl]: [0, 0, 2, 6, 14, 26, 46],
      [ResourceId.AgnidusAgateSliver]: [0, 1, 1, 1, 1, 1, 1],
      [ResourceId.AgnidusAgateFragment]: [0, 0, 3, 9, 9, 9, 9],
      [ResourceId.AgnidusAgateChunk]: [0, 0, 0, 0, 3, 9, 9],
      [ResourceId.AgnidusAgateGemstone]: [0, 0, 0, 0, 0, 0, 6],
      [ResourceId.NakuWeed]: [0, 3, 13, 33, 63, 108, 168],
      [ResourceId.DiviningScroll]: [0, 3, 18, 18, 18, 18, 18],
      [ResourceId.SealedScroll]: [0, 0, 0, 12, 30, 30, 30],
      [ResourceId.ForbiddenCurseScroll]: [0, 0, 0, 0, 0, 12, 36],
    },
    talents: {
      [ResourceId.DiviningScroll]: {
        attack: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        skill: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        burst: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
      },
      [ResourceId.SealedScroll]: {
        attack: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        skill: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        burst: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
      },
      [ResourceId.ForbiddenCurseScroll]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
      },
      [ResourceId.TeachingsOfTransience]: {
        attack: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        skill: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        burst: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      },
      [ResourceId.GuideToTransience]: {
        attack: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        skill: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        burst: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
      },
      [ResourceId.PhilosophiesOfTransience]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
      },
      [ResourceId.DragonLordsCrown]: {
        attack: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        skill: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        burst: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
      },
      [ResourceId.CrownOfInsight]: {
        attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      },
    },
  },
  [CharacterId.Sayu]: {
    ascension: {
      [ResourceId.MarionetteCore]: [0, 0, 2, 6, 14, 26, 46],
      [ResourceId.VayudaTurquoiseSliver]: [0, 1, 1, 1, 1, 1, 1],
      [ResourceId.VayudaTurquoiseFragment]: [0, 0, 3, 9, 9, 9, 9],
      [ResourceId.VayudaTurquoiseChunk]: [0, 0, 0, 0, 3, 9, 9],
      [ResourceId.VayudaTurquoiseGemstone]: [0, 0, 0, 0, 0, 0, 6],
      [ResourceId.CrystalMarrow]: [0, 3, 13, 33, 63, 108, 168],
      [ResourceId.WhopperflowerNectar]: [0, 3, 18, 18, 18, 18, 18],
      [ResourceId.ShimmeringNectar]: [0, 0, 0, 12, 30, 30, 30],
      [ResourceId.EnergyNectar]: [0, 0, 0, 0, 0, 12, 36],
    },
    talents: {
      [ResourceId.WhopperflowerNectar]: {
        attack: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        skill: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        burst: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
      },
      [ResourceId.ShimmeringNectar]: {
        attack: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        skill: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        burst: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
      },
      [ResourceId.EnergyNectar]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
      },
      [ResourceId.TeachingsOfLight]: {
        attack: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        skill: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        burst: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      },
      [ResourceId.GuideToLight]: {
        attack: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        skill: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        burst: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
      },
      [ResourceId.PhilosophiesOfLight]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
      },
      [ResourceId.GildedScale]: {
        attack: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        skill: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        burst: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
      },
      [ResourceId.CrownOfInsight]: {
        attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      },
    },
  },
  [CharacterId.KaedeharaKazuha]: {
    ascension: {
      [ResourceId.MarionetteCore]: [0, 0, 2, 6, 14, 26, 46],
      [ResourceId.VayudaTurquoiseSliver]: [0, 1, 1, 1, 1, 1, 1],
      [ResourceId.VayudaTurquoiseFragment]: [0, 0, 3, 9, 9, 9, 9],
      [ResourceId.VayudaTurquoiseChunk]: [0, 0, 0, 0, 3, 9, 9],
      [ResourceId.VayudaTurquoiseGemstone]: [0, 0, 0, 0, 0, 0, 6],
      [ResourceId.SeaGanoderma]: [0, 3, 13, 33, 63, 108, 168],
      [ResourceId.TreasureHoarderInsignia]: [0, 3, 18, 18, 18, 18, 18],
      [ResourceId.SilverRavenInsignia]: [0, 0, 0, 12, 30, 30, 30],
      [ResourceId.GoldenRavenInsignia]: [0, 0, 0, 0, 0, 12, 36],
    },
    talents: {
      [ResourceId.TreasureHoarderInsignia]: {
        attack: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        skill: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        burst: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
      },
      [ResourceId.SilverRavenInsignia]: {
        attack: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        skill: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        burst: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
      },
      [ResourceId.GoldenRavenInsignia]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
      },
      [ResourceId.TeachingsOfDiligence]: {
        attack: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        skill: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        burst: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      },
      [ResourceId.GuideToDiligence]: {
        attack: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        skill: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        burst: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
      },
      [ResourceId.PhilosophiesOfDiligence]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
      },
      [ResourceId.GildedScale]: {
        attack: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        skill: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        burst: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
      },
      [ResourceId.CrownOfInsight]: {
        attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      },
    },
  },
  [CharacterId.Eula]: {
    ascension: {
      [ResourceId.CrystallineBloom]: [0, 0, 2, 6, 14, 26, 46],
      [ResourceId.ShivadaJadeSliver]: [0, 1, 1, 1, 1, 1, 1],
      [ResourceId.ShivadaJadeFragment]: [0, 0, 3, 9, 9, 9, 9],
      [ResourceId.ShivadaJadeChunk]: [0, 0, 0, 0, 3, 9, 9],
      [ResourceId.ShivadaJadeGemstone]: [0, 0, 0, 0, 0, 0, 6],
      [ResourceId.DandelionSeed]: [0, 3, 13, 33, 63, 108, 168],
      [ResourceId.DamagedMask]: [0, 3, 18, 18, 18, 18, 18],
      [ResourceId.StainedMask]: [0, 0, 0, 12, 30, 30, 30],
      [ResourceId.OminousMask]: [0, 0, 0, 0, 0, 12, 36],
    },
    talents: {
      [ResourceId.DamagedMask]: {
        attack: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        skill: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        burst: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
      },
      [ResourceId.StainedMask]: {
        attack: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        skill: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        burst: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
      },
      [ResourceId.OminousMask]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
      },
      [ResourceId.TeachingsOfResistance]: {
        attack: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        skill: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        burst: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      },
      [ResourceId.GuideToResistance]: {
        attack: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        skill: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        burst: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
      },
      [ResourceId.PhilosophiesOfResistance]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
      },
      [ResourceId.DragonLordsCrown]: {
        attack: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        skill: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        burst: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
      },
      [ResourceId.CrownOfInsight]: {
        attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      },
    },
  },
  [CharacterId.Yanfei]: {
    ascension: {
      [ResourceId.JuvenileJade]: [0, 0, 2, 6, 14, 26, 46],
      [ResourceId.AgnidusAgateSliver]: [0, 1, 1, 1, 1, 1, 1],
      [ResourceId.AgnidusAgateFragment]: [0, 0, 3, 9, 9, 9, 9],
      [ResourceId.AgnidusAgateChunk]: [0, 0, 0, 0, 3, 9, 9],
      [ResourceId.AgnidusAgateGemstone]: [0, 0, 0, 0, 0, 0, 6],
      [ResourceId.NoctilucousJade]: [0, 3, 13, 33, 63, 108, 168],
      [ResourceId.TreasureHoarderInsignia]: [0, 3, 18, 18, 18, 18, 18],
      [ResourceId.SilverRavenInsignia]: [0, 0, 0, 12, 30, 30, 30],
      [ResourceId.GoldenRavenInsignia]: [0, 0, 0, 0, 0, 12, 36],
    },
    talents: {
      [ResourceId.TreasureHoarderInsignia]: {
        attack: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        skill: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        burst: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
      },
      [ResourceId.SilverRavenInsignia]: {
        attack: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        skill: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        burst: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
      },
      [ResourceId.GoldenRavenInsignia]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
      },
      [ResourceId.TeachingsOfGold]: {
        attack: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        skill: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        burst: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      },
      [ResourceId.GuideToGold]: {
        attack: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        skill: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        burst: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
      },
      [ResourceId.PhilosophiesOfGold]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
      },
      [ResourceId.BloodjadeBranch]: {
        attack: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        skill: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        burst: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
      },
      [ResourceId.CrownOfInsight]: {
        attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      },
    },
  },
  [CharacterId.Rosaria]: {
    ascension: {
      [ResourceId.HoarfrostCore]: [0, 0, 2, 6, 14, 26, 46],
      [ResourceId.ShivadaJadeSliver]: [0, 1, 1, 1, 1, 1, 1],
      [ResourceId.ShivadaJadeFragment]: [0, 0, 3, 9, 9, 9, 9],
      [ResourceId.ShivadaJadeChunk]: [0, 0, 0, 0, 3, 9, 9],
      [ResourceId.ShivadaJadeGemstone]: [0, 0, 0, 0, 0, 0, 6],
      [ResourceId.Valberry]: [0, 3, 13, 33, 63, 108, 168],
      [ResourceId.RecruitsInsignia]: [0, 3, 18, 18, 18, 18, 18],
      [ResourceId.SergeantsInsignia]: [0, 0, 0, 12, 30, 30, 30],
      [ResourceId.LieutenantsInsignia]: [0, 0, 0, 0, 0, 12, 36],
    },
    talents: {
      [ResourceId.RecruitsInsignia]: {
        attack: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        skill: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        burst: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
      },
      [ResourceId.SergeantsInsignia]: {
        attack: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        skill: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        burst: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
      },
      [ResourceId.LieutenantsInsignia]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
      },
      [ResourceId.TeachingsOfBallad]: {
        attack: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        skill: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        burst: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      },
      [ResourceId.GuideToBallad]: {
        attack: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        skill: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        burst: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
      },
      [ResourceId.PhilosophiesOfBallad]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
      },
      [ResourceId.ShadowOfTheWarrior]: {
        attack: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        skill: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        burst: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
      },
      [ResourceId.CrownOfInsight]: {
        attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      },
    },
  },
  [CharacterId.HuTao]: {
    ascension: {
      [ResourceId.JuvenileJade]: [0, 0, 2, 6, 14, 26, 46],
      [ResourceId.AgnidusAgateSliver]: [0, 1, 1, 1, 1, 1, 1],
      [ResourceId.AgnidusAgateFragment]: [0, 0, 3, 9, 9, 9, 9],
      [ResourceId.AgnidusAgateChunk]: [0, 0, 0, 0, 3, 9, 9],
      [ResourceId.AgnidusAgateGemstone]: [0, 0, 0, 0, 0, 0, 6],
      [ResourceId.SilkFlower]: [0, 3, 13, 33, 63, 108, 168],
      [ResourceId.WhopperflowerNectar]: [0, 3, 18, 18, 18, 18, 18],
      [ResourceId.ShimmeringNectar]: [0, 0, 0, 12, 30, 30, 30],
      [ResourceId.EnergyNectar]: [0, 0, 0, 0, 0, 12, 36],
    },
    talents: {
      [ResourceId.WhopperflowerNectar]: {
        attack: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        skill: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        burst: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
      },
      [ResourceId.ShimmeringNectar]: {
        attack: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        skill: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        burst: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
      },
      [ResourceId.EnergyNectar]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
      },
      [ResourceId.TeachingsOfDiligence]: {
        attack: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        skill: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        burst: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      },
      [ResourceId.GuideToDiligence]: {
        attack: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        skill: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        burst: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
      },
      [ResourceId.PhilosophiesOfDiligence]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
      },
      [ResourceId.ShardOfAFoulLegacy]: {
        attack: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        skill: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        burst: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
      },
      [ResourceId.CrownOfInsight]: {
        attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      },
    },
  },
  [CharacterId.Xiao]: {
    ascension: {
      [ResourceId.JuvenileJade]: [0, 0, 2, 6, 14, 26, 46],
      [ResourceId.VayudaTurquoiseSliver]: [0, 1, 1, 1, 1, 1, 1],
      [ResourceId.VayudaTurquoiseFragment]: [0, 0, 3, 9, 9, 9, 9],
      [ResourceId.VayudaTurquoiseChunk]: [0, 0, 0, 0, 3, 9, 9],
      [ResourceId.VayudaTurquoiseGemstone]: [0, 0, 0, 0, 0, 0, 6],
      [ResourceId.Qingxin]: [0, 3, 13, 33, 63, 108, 168],
      [ResourceId.SlimeCondensate]: [0, 3, 18, 18, 18, 18, 18],
      [ResourceId.SlimeSecretions]: [0, 0, 0, 12, 30, 30, 30],
      [ResourceId.SlimeConcentrate]: [0, 0, 0, 0, 0, 12, 36],
    },
    talents: {
      [ResourceId.SlimeCondensate]: {
        attack: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        skill: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        burst: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
      },
      [ResourceId.SlimeSecretions]: {
        attack: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        skill: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        burst: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
      },
      [ResourceId.SlimeConcentrate]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
      },
      [ResourceId.TeachingsOfProsperity]: {
        attack: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        skill: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        burst: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      },
      [ResourceId.GuideToProsperity]: {
        attack: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        skill: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        burst: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
      },
      [ResourceId.PhilosophiesOfProsperity]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
      },
      [ResourceId.ShadowOfTheWarrior]: {
        attack: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        skill: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        burst: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
      },
      [ResourceId.CrownOfInsight]: {
        attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      },
    },
  },
  [CharacterId.Ganyu]: {
    ascension: {
      [ResourceId.HoarfrostCore]: [0, 0, 2, 6, 14, 26, 46],
      [ResourceId.ShivadaJadeSliver]: [0, 1, 1, 1, 1, 1, 1],
      [ResourceId.ShivadaJadeFragment]: [0, 0, 3, 9, 9, 9, 9],
      [ResourceId.ShivadaJadeChunk]: [0, 0, 0, 0, 3, 9, 9],
      [ResourceId.ShivadaJadeGemstone]: [0, 0, 0, 0, 0, 0, 6],
      [ResourceId.Qingxin]: [0, 3, 13, 33, 63, 108, 168],
      [ResourceId.WhopperflowerNectar]: [0, 3, 18, 18, 18, 18, 18],
      [ResourceId.ShimmeringNectar]: [0, 0, 0, 12, 30, 30, 30],
      [ResourceId.EnergyNectar]: [0, 0, 0, 0, 0, 12, 36],
    },
    talents: {
      [ResourceId.WhopperflowerNectar]: {
        attack: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        skill: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        burst: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
      },
      [ResourceId.ShimmeringNectar]: {
        attack: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        skill: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        burst: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
      },
      [ResourceId.EnergyNectar]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
      },
      [ResourceId.TeachingsOfDiligence]: {
        attack: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        skill: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        burst: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      },
      [ResourceId.GuideToDiligence]: {
        attack: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        skill: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        burst: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
      },
      [ResourceId.PhilosophiesOfDiligence]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
      },
      [ResourceId.ShadowOfTheWarrior]: {
        attack: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        skill: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        burst: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
      },
      [ResourceId.CrownOfInsight]: {
        attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      },
    },
  },
  [CharacterId.Albedo]: {
    ascension: {
      [ResourceId.BasaltPillar]: [0, 0, 2, 6, 14, 26, 46],
      [ResourceId.PrithivaTopazSliver]: [0, 1, 1, 1, 1, 1, 1],
      [ResourceId.PrithivaTopazFragment]: [0, 0, 3, 9, 9, 9, 9],
      [ResourceId.PrithivaTopazChunk]: [0, 0, 0, 0, 3, 9, 9],
      [ResourceId.PrithivaTopazGemstone]: [0, 0, 0, 0, 0, 0, 6],
      [ResourceId.Cecilia]: [0, 3, 13, 33, 63, 108, 168],
      [ResourceId.DiviningScroll]: [0, 3, 18, 18, 18, 18, 18],
      [ResourceId.SealedScroll]: [0, 0, 0, 12, 30, 30, 30],
      [ResourceId.ForbiddenCurseScroll]: [0, 0, 0, 0, 0, 12, 36],
    },
    talents: {
      [ResourceId.DiviningScroll]: {
        attack: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        skill: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        burst: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
      },
      [ResourceId.SealedScroll]: {
        attack: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        skill: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        burst: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
      },
      [ResourceId.ForbiddenCurseScroll]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
      },
      [ResourceId.TeachingsOfBallad]: {
        attack: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        skill: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        burst: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      },
      [ResourceId.GuideToBallad]: {
        attack: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        skill: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        burst: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
      },
      [ResourceId.PhilosophiesOfBallad]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
      },
      [ResourceId.TuskOfMonocerosCaeli]: {
        attack: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        skill: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        burst: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
      },
      [ResourceId.CrownOfInsight]: {
        attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      },
    },
  },
  [CharacterId.Zhongli]: {
    ascension: {
      [ResourceId.BasaltPillar]: [0, 0, 2, 6, 14, 26, 46],
      [ResourceId.PrithivaTopazSliver]: [0, 1, 1, 1, 1, 1, 1],
      [ResourceId.PrithivaTopazFragment]: [0, 0, 3, 9, 9, 9, 9],
      [ResourceId.PrithivaTopazChunk]: [0, 0, 0, 0, 3, 9, 9],
      [ResourceId.PrithivaTopazGemstone]: [0, 0, 0, 0, 0, 0, 6],
      [ResourceId.CorLapis]: [0, 3, 13, 33, 63, 108, 168],
      [ResourceId.SlimeCondensate]: [0, 3, 18, 18, 18, 18, 18],
      [ResourceId.SlimeSecretions]: [0, 0, 0, 12, 30, 30, 30],
      [ResourceId.SlimeConcentrate]: [0, 0, 0, 0, 0, 12, 36],
    },
    talents: {
      [ResourceId.SlimeCondensate]: {
        attack: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        skill: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        burst: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
      },
      [ResourceId.SlimeSecretions]: {
        attack: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        skill: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        burst: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
      },
      [ResourceId.SlimeConcentrate]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
      },
      [ResourceId.TeachingsOfGold]: {
        attack: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        skill: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        burst: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      },
      [ResourceId.GuideToGold]: {
        attack: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        skill: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        burst: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
      },
      [ResourceId.PhilosophiesOfGold]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
      },
      [ResourceId.TuskOfMonocerosCaeli]: {
        attack: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        skill: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        burst: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
      },
      [ResourceId.CrownOfInsight]: {
        attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      },
    },
  },
  [CharacterId.Xinyan]: {
    ascension: {
      [ResourceId.EverflameSeed]: [0, 0, 2, 6, 14, 26, 46],
      [ResourceId.AgnidusAgateSliver]: [0, 1, 1, 1, 1, 1, 1],
      [ResourceId.AgnidusAgateFragment]: [0, 0, 3, 9, 9, 9, 9],
      [ResourceId.AgnidusAgateChunk]: [0, 0, 0, 0, 3, 9, 9],
      [ResourceId.AgnidusAgateGemstone]: [0, 0, 0, 0, 0, 0, 6],
      [ResourceId.Violetgrass]: [0, 3, 13, 33, 63, 108, 168],
      [ResourceId.TreasureHoarderInsignia]: [0, 3, 18, 18, 18, 18, 18],
      [ResourceId.SilverRavenInsignia]: [0, 0, 0, 12, 30, 30, 30],
      [ResourceId.GoldenRavenInsignia]: [0, 0, 0, 0, 0, 12, 36],
    },
    talents: {
      [ResourceId.TreasureHoarderInsignia]: {
        attack: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        skill: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        burst: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
      },
      [ResourceId.SilverRavenInsignia]: {
        attack: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        skill: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        burst: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
      },
      [ResourceId.GoldenRavenInsignia]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
      },
      [ResourceId.TeachingsOfGold]: {
        attack: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        skill: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        burst: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      },
      [ResourceId.GuideToGold]: {
        attack: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        skill: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        burst: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
      },
      [ResourceId.PhilosophiesOfGold]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
      },
      [ResourceId.TuskOfMonocerosCaeli]: {
        attack: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        skill: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        burst: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
      },
      [ResourceId.CrownOfInsight]: {
        attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      },
    },
  },
  [CharacterId.Tartaglia]: {
    ascension: {
      [ResourceId.CleansingHeart]: [0, 0, 2, 6, 14, 26, 46],
      [ResourceId.VarunadaLazuriteSliver]: [0, 1, 1, 1, 1, 1, 1],
      [ResourceId.VarunadaLazuriteFragment]: [0, 0, 3, 9, 9, 9, 9],
      [ResourceId.VarunadaLazuriteChunk]: [0, 0, 0, 0, 3, 9, 9],
      [ResourceId.VarunadaLazuriteGemstone]: [0, 0, 0, 0, 0, 0, 6],
      [ResourceId.Starconch]: [0, 3, 13, 33, 63, 108, 168],
      [ResourceId.RecruitsInsignia]: [0, 3, 18, 18, 18, 18, 18],
      [ResourceId.SergeantsInsignia]: [0, 0, 0, 12, 30, 30, 30],
      [ResourceId.LieutenantsInsignia]: [0, 0, 0, 0, 0, 12, 36],
    },
    talents: {
      [ResourceId.RecruitsInsignia]: {
        attack: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        skill: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        burst: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
      },
      [ResourceId.SergeantsInsignia]: {
        attack: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        skill: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        burst: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
      },
      [ResourceId.LieutenantsInsignia]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
      },
      [ResourceId.TeachingsOfFreedom]: {
        attack: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        skill: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        burst: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      },
      [ResourceId.GuideToFreedom]: {
        attack: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        skill: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        burst: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
      },
      [ResourceId.PhilosophiesOfFreedom]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
      },
      [ResourceId.ShardOfAFoulLegacy]: {
        attack: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        skill: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        burst: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
      },
      [ResourceId.CrownOfInsight]: {
        attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      },
    },
  },
  [CharacterId.Diona]: {
    ascension: {
      [ResourceId.HoarfrostCore]: [0, 0, 2, 6, 14, 26, 46],
      [ResourceId.ShivadaJadeSliver]: [0, 1, 1, 1, 1, 1, 1],
      [ResourceId.ShivadaJadeFragment]: [0, 0, 3, 9, 9, 9, 9],
      [ResourceId.ShivadaJadeChunk]: [0, 0, 0, 0, 3, 9, 9],
      [ResourceId.ShivadaJadeGemstone]: [0, 0, 0, 0, 0, 0, 6],
      [ResourceId.CallaLily]: [0, 3, 13, 33, 63, 108, 168],
      [ResourceId.FirmArrowhead]: [0, 3, 18, 18, 18, 18, 18],
      [ResourceId.SharpArrowhead]: [0, 0, 0, 12, 30, 30, 30],
      [ResourceId.WeatheredArrowhead]: [0, 0, 0, 0, 0, 12, 36],
    },
    talents: {
      [ResourceId.FirmArrowhead]: {
        attack: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        skill: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        burst: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
      },
      [ResourceId.SharpArrowhead]: {
        attack: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        skill: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        burst: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
      },
      [ResourceId.WeatheredArrowhead]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
      },
      [ResourceId.TeachingsOfFreedom]: {
        attack: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        skill: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        burst: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      },
      [ResourceId.GuideToFreedom]: {
        attack: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        skill: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        burst: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
      },
      [ResourceId.PhilosophiesOfFreedom]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
      },
      [ResourceId.ShardOfAFoulLegacy]: {
        attack: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        skill: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        burst: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
      },
      [ResourceId.CrownOfInsight]: {
        attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      },
    },
  },
  [CharacterId.Klee]: {
    ascension: {
      [ResourceId.EverflameSeed]: [0, 0, 2, 6, 14, 26, 46],
      [ResourceId.AgnidusAgateSliver]: [0, 1, 1, 1, 1, 1, 1],
      [ResourceId.AgnidusAgateFragment]: [0, 0, 3, 9, 9, 9, 9],
      [ResourceId.AgnidusAgateChunk]: [0, 0, 0, 0, 3, 9, 9],
      [ResourceId.AgnidusAgateGemstone]: [0, 0, 0, 0, 0, 0, 6],
      [ResourceId.PhilanemoMushroom]: [0, 3, 13, 33, 63, 108, 168],
      [ResourceId.DiviningScroll]: [0, 3, 18, 18, 18, 18, 18],
      [ResourceId.SealedScroll]: [0, 0, 0, 12, 30, 30, 30],
      [ResourceId.ForbiddenCurseScroll]: [0, 0, 0, 0, 0, 12, 36],
    },
    talents: {
      [ResourceId.DiviningScroll]: {
        attack: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        skill: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        burst: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
      },
      [ResourceId.SealedScroll]: {
        attack: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        skill: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        burst: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
      },
      [ResourceId.ForbiddenCurseScroll]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
      },
      [ResourceId.TeachingsOfFreedom]: {
        attack: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        skill: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        burst: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      },
      [ResourceId.GuideToFreedom]: {
        attack: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        skill: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        burst: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
      },
      [ResourceId.PhilosophiesOfFreedom]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
      },
      [ResourceId.RingOfBoreas]: {
        attack: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        skill: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        burst: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
      },
      [ResourceId.CrownOfInsight]: {
        attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      },
    },
  },
  [CharacterId.Venti]: {
    ascension: {
      [ResourceId.HurricaneSeed]: [0, 0, 2, 6, 14, 26, 46],
      [ResourceId.VayudaTurquoiseSliver]: [0, 1, 1, 1, 1, 1, 1],
      [ResourceId.VayudaTurquoiseFragment]: [0, 0, 3, 9, 9, 9, 9],
      [ResourceId.VayudaTurquoiseChunk]: [0, 0, 0, 0, 3, 9, 9],
      [ResourceId.VayudaTurquoiseGemstone]: [0, 0, 0, 0, 0, 0, 6],
      [ResourceId.Cecilia]: [0, 3, 13, 33, 63, 108, 168],
      [ResourceId.SlimeCondensate]: [0, 3, 18, 18, 18, 18, 18],
      [ResourceId.SlimeSecretions]: [0, 0, 0, 12, 30, 30, 30],
      [ResourceId.SlimeConcentrate]: [0, 0, 0, 0, 0, 12, 36],
    },
    talents: {
      [ResourceId.SlimeCondensate]: {
        attack: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        skill: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        burst: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
      },
      [ResourceId.SlimeSecretions]: {
        attack: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        skill: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
        burst: [0, 0, 3, 7, 13, 22, 22, 22, 22, 22],
      },
      [ResourceId.SlimeConcentrate]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 19, 31],
      },
      [ResourceId.TeachingsOfBallad]: {
        attack: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        skill: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        burst: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      },
      [ResourceId.GuideToBallad]: {
        attack: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        skill: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
        burst: [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
      },
      [ResourceId.PhilosophiesOfBallad]: {
        attack: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        skill: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
        burst: [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
      },
      [ResourceId.TailOfBoreas]: {
        attack: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        skill: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
        burst: [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
      },
      [ResourceId.CrownOfInsight]: {
        attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        skill: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        burst: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      },
    },
  },
} as CharacterResourcesMapping;
