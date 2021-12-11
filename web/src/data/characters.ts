export enum ElementType {
  Pyro = "Pyro",
  Hydro = "Hydro",
  Electro = "Electro",
  Cryo = "Cryo",
  Anemo = "Anemo",
  Geo = "Geo",
  Dendro = "Dendro",
  Adaptative = "Adaptative",
}

export enum WeaponType {
  Bow = "Bow",
  Catalyst = "Catalyst",
  Claymore = "Claymore",
  Sword = "Sword",
  Polearm = "Polearm",
}

export interface Character {
  id: string;
  sortId: number;
  name: string;
  element: ElementType;
  weapon: WeaponType;
  rarity: number;
  colab: boolean;
  imageUrl: string;
}

export const travelerId = "4d4e3070-a6ba-4024-87fd-c6ce9b82a61f";

export const characters: Character[] = [
  {
    id: travelerId,
    sortId: 0,
    name: "Traveler",
    element: ElementType.Adaptative,
    weapon: WeaponType.Sword,
    rarity: 5,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/7/71/Character_Traveler_Thumb.png",
  },
  {
    id: "ce714228-5ee7-42f5-a7e4-9e05852914a5",
    sortId: 84,
    name: "Thoma",
    element: ElementType.Pyro,
    weapon: WeaponType.Polearm,
    rarity: 4,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/8/8a/Character_Thoma_Thumb.png",
  },
  {
    id: "db8f3ec0-f645-4b35-bafe-d337e91a26de",
    sortId: 85,
    name: "Sangonomiya Kokomi",
    element: ElementType.Hydro,
    weapon: WeaponType.Catalyst,
    rarity: 5,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/c/cc/Character_Sangonomiya_Kokomi_Thumb.png",
  },
  {
    id: "69d4be21-d4db-4bd5-aea9-6a7dcdbb7cfb",
    sortId: 86,
    name: "Raiden Shogun",
    element: ElementType.Electro,
    weapon: WeaponType.Polearm,
    rarity: 5,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/5/52/Character_Raiden_Shogun_Thumb.png",
  },
  {
    id: "5373f185-e3a3-41b4-9d84-aacf189e2c63",
    sortId: 87,
    name: "Kujou Sara",
    element: ElementType.Electro,
    weapon: WeaponType.Bow,
    rarity: 4,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/96/Character_Kujou_Sara_Thumb.png",
  },
  {
    id: "9b12bccd-afeb-4f20-890b-f316040da117",
    sortId: 88,
    name: "Aloy",
    element: ElementType.Cryo,
    weapon: WeaponType.Bow,
    rarity: 5,
    colab: true,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Character_Aloy_Thumb.png",
  },
  {
    id: "cb604a26-5fca-4037-92fa-434680bba52c",
    sortId: 89,
    name: "Kamisato Ayaka",
    element: ElementType.Cryo,
    weapon: WeaponType.Sword,
    rarity: 5,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/f/fd/Character_Kamisato_Ayaka_Thumb.png",
  },
  {
    id: "a3fcbd3b-8813-45a9-a58d-3867a01ccdc3",
    sortId: 90,
    name: "Yoimiya",
    element: ElementType.Pyro,
    weapon: WeaponType.Bow,
    rarity: 5,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/05/Character_Yoimiya_Thumb.png",
  },
  {
    id: "3a2e30d1-bff6-4044-901a-ddbcbe5e46b5",
    sortId: 91,
    name: "Sayu",
    element: ElementType.Anemo,
    weapon: WeaponType.Claymore,
    rarity: 4,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/e/ec/Character_Sayu_Thumb.png",
  },
  {
    id: "dc4b2d97-f251-4f1d-b7ee-46e17982d66a",
    sortId: 92,
    name: "Kaedehara Kazuha",
    element: ElementType.Anemo,
    weapon: WeaponType.Sword,
    rarity: 5,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/f/f0/Character_Kaedehara_Kazuha_Thumb.png",
  },
  {
    id: "fe4453a6-708d-41fd-a5ab-05122b829ce4",
    sortId: 93,
    name: "Eula",
    element: ElementType.Cryo,
    weapon: WeaponType.Claymore,
    rarity: 5,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/d/d3/Character_Eula_Thumb.png",
  },
  {
    id: "67586bd2-8592-4488-ad3c-01664623528e",
    sortId: 94,
    name: "Yanfei",
    element: ElementType.Pyro,
    weapon: WeaponType.Catalyst,
    rarity: 4,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/1/1f/Character_Yanfei_Thumb.png",
  },
  {
    id: "377f4984-3fed-41b2-a8fc-a599a3a0e55b",
    sortId: 95,
    name: "Rosaria",
    element: ElementType.Cryo,
    weapon: WeaponType.Polearm,
    rarity: 4,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/f/f6/Character_Rosaria_Thumb.png",
  },
  {
    id: "8ed1afde-0c9e-43af-b5fe-9268909df6e9",
    sortId: 96,
    name: "Hu Tao",
    element: ElementType.Pyro,
    weapon: WeaponType.Polearm,
    rarity: 5,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/a/a4/Character_Hu_Tao_Thumb.png",
  },
  {
    id: "42173173-fe8e-40bb-a682-670abfd01073",
    sortId: 97,
    name: "Xiao",
    element: ElementType.Anemo,
    weapon: WeaponType.Polearm,
    rarity: 5,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Character_Xiao_Thumb.png",
  },
  {
    id: "6326bccc-d736-49c3-8e74-f569fc365a28",
    sortId: 98,
    name: "Ganyu",
    element: ElementType.Cryo,
    weapon: WeaponType.Bow,
    rarity: 5,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/0a/Character_Ganyu_Thumb.png",
  },
  {
    id: "5cb47113-4ce2-41ff-bd8d-c0dafd280ec1",
    sortId: 99,
    name: "Albedo",
    element: ElementType.Geo,
    weapon: WeaponType.Sword,
    rarity: 5,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/00/Character_Albedo_Thumb.png",
  },
  {
    id: "a3486a4d-7b40-4471-8641-ee993d7b094e",
    sortId: 100,
    name: "Zhongli",
    element: ElementType.Geo,
    weapon: WeaponType.Polearm,
    rarity: 5,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/c/c2/Character_Zhongli_Thumb.png",
  },
  {
    id: "8c9070a6-20d1-4515-ba95-5a17b4b2108b",
    sortId: 200,
    name: "Xinyan",
    element: ElementType.Pyro,
    weapon: WeaponType.Claymore,
    rarity: 4,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/9d/Character_Xinyan_Thumb.png",
  },
  {
    id: "55516ecc-f690-49f6-bebd-7961db049e7d",
    sortId: 300,
    name: "Tartaglia",
    element: ElementType.Hydro,
    weapon: WeaponType.Bow,
    rarity: 5,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/5/53/Character_Tartaglia_Thumb.png",
  },
  {
    id: "0fc1ebcb-6ebc-4f0e-ae1a-06f2949b5830",
    sortId: 400,
    name: "Diona",
    element: ElementType.Cryo,
    weapon: WeaponType.Bow,
    rarity: 4,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Character_Diona_Thumb.png",
  },
  {
    id: "1008e546-9c3c-4169-99ae-8c8decedac00",
    sortId: 500,
    name: "Klee",
    element: ElementType.Pyro,
    weapon: WeaponType.Catalyst,
    rarity: 5,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/c/c3/Character_Klee_Thumb.png",
  },
  {
    id: "5a2ad899-8f57-40e6-b3b9-79be460c9102",
    sortId: 600,
    name: "Venti",
    element: ElementType.Anemo,
    weapon: WeaponType.Bow,
    rarity: 5,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Character_Venti_Thumb.png",
  },
  {
    id: "31af0674-37ad-417e-b36e-48264b91417a",
    sortId: 700,
    name: "Keqing",
    element: ElementType.Electro,
    weapon: WeaponType.Sword,
    rarity: 5,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/06/Character_Keqing_Thumb.png",
  },
  {
    id: "8c4856c5-8d8a-4479-9662-64b1772fc0bf",
    sortId: 800,
    name: "Mona",
    element: ElementType.Hydro,
    weapon: WeaponType.Catalyst,
    rarity: 5,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Character_Mona_Thumb.png",
  },
  {
    id: "5335d1ef-9276-4c24-b790-2d946f48f60b",
    sortId: 900,
    name: "Qiqi",
    element: ElementType.Cryo,
    weapon: WeaponType.Sword,
    rarity: 5,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/d/d5/Character_Qiqi_Thumb.png",
  },
  {
    id: "d9943d74-2c6a-40ac-bd06-49c8953f8da6",
    sortId: 1000,
    name: "Diluc",
    element: ElementType.Pyro,
    weapon: WeaponType.Claymore,
    rarity: 5,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/02/Character_Diluc_Thumb.png",
  },
  {
    id: "ee8bb1fe-f99e-45bd-8f81-9cb88128d9e0",
    sortId: 1100,
    name: "Jean",
    element: ElementType.Anemo,
    weapon: WeaponType.Sword,
    rarity: 5,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/8/89/Character_Jean_Thumb.png",
  },
  {
    id: "a5b4b673-779f-49e0-bd84-22325513ab6d",
    sortId: 1200,
    name: "Sucrose",
    element: ElementType.Anemo,
    weapon: WeaponType.Catalyst,
    rarity: 4,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/6/61/Character_Sucrose_Thumb.png",
  },
  {
    id: "c906a398-1134-438c-9973-abc2a43c09c5",
    sortId: 1300,
    name: "Chongyun",
    element: ElementType.Cryo,
    weapon: WeaponType.Claymore,
    rarity: 4,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/6/68/Character_Chongyun_Thumb.png",
  },
  {
    id: "88c64bd9-4058-46ca-9b6d-658b5c44f2ed",
    sortId: 1400,
    name: "Noelle",
    element: ElementType.Geo,
    weapon: WeaponType.Claymore,
    rarity: 4,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/a/ab/Character_Noelle_Thumb.png",
  },
  {
    id: "25b40422-2445-4cb7-9527-846fa464990b",
    sortId: 1500,
    name: "Bennett",
    element: ElementType.Pyro,
    weapon: WeaponType.Sword,
    rarity: 4,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/7/7b/Character_Bennett_Thumb.png",
  },
  {
    id: "ec37926f-f3da-43eb-a0ba-baa4e01cfcf7",
    sortId: 1600,
    name: "Fischl",
    element: ElementType.Electro,
    weapon: WeaponType.Bow,
    rarity: 4,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/1/14/Character_Fischl_Thumb.png",
  },
  {
    id: "b1dbaff2-8dcf-429a-bdb3-e60236e1a7d4",
    sortId: 1700,
    name: "Ningguang",
    element: ElementType.Geo,
    weapon: WeaponType.Catalyst,
    rarity: 4,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/2/2b/Character_Ningguang_Thumb.png",
  },
  {
    id: "ea7c1fa6-23d8-4d3c-88f6-0e300b8c8b0f",
    sortId: 1800,
    name: "Xingqiu",
    element: ElementType.Hydro,
    weapon: WeaponType.Sword,
    rarity: 4,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/4a/Character_Xingqiu_Thumb.png",
  },
  {
    id: "1252d88a-3f53-4f4e-9524-4941b5516677",
    sortId: 1900,
    name: "Beidou",
    element: ElementType.Electro,
    weapon: WeaponType.Claymore,
    rarity: 4,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/6/61/Character_Beidou_Thumb.png",
  },
  {
    id: "f1654075-5fe7-4d04-bef9-75d5bf03ecc6",
    sortId: 2000,
    name: "Xiangling",
    element: ElementType.Pyro,
    weapon: WeaponType.Polearm,
    rarity: 4,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Character_Xiangling_Thumb.png",
  },
  {
    id: "1a5e658c-ea7a-4cfb-84fb-e99b046e809f",
    sortId: 2100,
    name: "Razor",
    element: ElementType.Electro,
    weapon: WeaponType.Claymore,
    rarity: 4,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/1/1d/Character_Razor_Thumb.png",
  },
  {
    id: "4b88df0e-3424-4c52-9d13-6b4383b564bc",
    sortId: 2200,
    name: "Barbara",
    element: ElementType.Hydro,
    weapon: WeaponType.Catalyst,
    rarity: 4,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/7/72/Character_Barbara_Thumb.png",
  },
  {
    id: "b24b8fc1-5861-4d81-a853-861f89f9061c",
    sortId: 2300,
    name: "Lisa",
    element: ElementType.Electro,
    weapon: WeaponType.Catalyst,
    rarity: 4,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/5/51/Character_Lisa_Thumb.png",
  },
  {
    id: "8c41c682-5bd8-42a3-b4c2-07c8dc827570",
    sortId: 2400,
    name: "Kaeya",
    element: ElementType.Cryo,
    weapon: WeaponType.Sword,
    rarity: 4,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Character_Kaeya_Thumb.png",
  },
  {
    id: "db008d83-6f7b-4360-9f31-1872e68648a2",
    sortId: 2500,
    name: "Amber",
    element: ElementType.Pyro,
    weapon: WeaponType.Bow,
    rarity: 4,
    colab: false,
    imageUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/c/c6/Character_Amber_Thumb.png",
  },
];

export const characterIds = characters.map((c) => c.id);
