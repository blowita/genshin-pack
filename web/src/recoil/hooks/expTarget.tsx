import { CharacterEntity, characterStore, resourceStore } from "../entities";

import { characterIds } from "../../data/characters";
import { expTable } from "../../data/levelingData";

const calculateExpForCharacter = (character: CharacterEntity): number => {
  return (
    expTable[character.level.desired - 1] -
    expTable[character.level.current - 1]
  );
};

const useExpTarget = (rarity: number): { expBooks: number } => {
  const characters = characterStore.useEntityList(characterIds);
  const rarity4XpBook = resourceStore.useEntityValue(
    "980840b2-b68a-4f5b-8ec8-ea1a7feb07fb"
  );
  const rarity3XpBook = resourceStore.useEntityValue(
    "6efcc643-6ba1-46d8-b8e3-bc534ce868f1"
  );
  const rarity2XpBook = resourceStore.useEntityValue(
    "3bf43090-9ee8-4b45-825f-c3b19b420f95"
  );

  const calculateExpTarget = (): number => {
    return characters.reduce((sum, character) => {
      const exp = character.enabled ? calculateExpForCharacter(character) : 0;
      return sum + exp;
    }, 0);
  };

  const expTargetScaledDown = Math.ceil(calculateExpTarget() / 1000);

  if (!expTargetScaledDown) {
    return { expBooks: 0 };
  }

  const usableStock4 = Math.min(
    rarity4XpBook.stock,
    Math.floor(expTargetScaledDown / 20)
  );
  const usableStock3 = Math.min(
    rarity3XpBook.stock,
    Math.floor((expTargetScaledDown - usableStock4 * 20) / 5)
  );
  const usableStock2 = Math.min(
    rarity2XpBook.stock,
    expTargetScaledDown - usableStock4 * 20 - usableStock3 * 5
  );

  let mustFit =
    expTargetScaledDown - usableStock4 * 20 - usableStock3 * 5 - usableStock2;

  const target4 = usableStock4 + Math.floor(mustFit / 20);
  mustFit -= 20 * Math.floor(mustFit / 20);

  const target3 = usableStock3 + Math.floor(mustFit / 5);
  mustFit -= 5 * Math.floor(mustFit / 5);

  switch (rarity) {
    case 4:
      return { expBooks: target4 };
    case 3:
      return { expBooks: target3 };
    case 2:
      return { expBooks: usableStock2 + mustFit };
    default:
      return { expBooks: 0 };
  }
};

export { useExpTarget };
