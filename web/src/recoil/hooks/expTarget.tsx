import React from "react";

import { CharacterEntity, characterStore } from "../entities";

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

  const calculateExpTarget = (): number => {
    return characters.reduce((sum, character) => {
      const exp = character.enabled ? calculateExpForCharacter(character) : 0;
      return sum + exp;
    }, 0);
  };

  let expTarget = calculateExpTarget();

  // get ExpBook numbers for each rarity, get their total Exp value, subtract from expTarget, then return appropriate value for indicated rarity
  expTarget = expTarget - 0;

  switch (rarity) {
    case 4:
      return { expBooks: Math.ceil(expTarget / 20000) };
    case 3:
      return { expBooks: Math.ceil((expTarget % 20000) / 5000) };
    case 2:
      return { expBooks: Math.ceil(((expTarget % 20000) % 5000) / 1000) };
    default:
      return { expBooks: Math.ceil(expTarget / 20000) };
  }
};

export { useExpTarget };
