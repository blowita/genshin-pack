import React from "react";

import { characters } from "../../data/characters";

import RarityDisplay from "../RarityDisplay";

import { Container } from "./styles";

interface CharacterAvatarProps {
  characterId: string;
}

const CharacterAvatar: React.FC<CharacterAvatarProps> = ({ characterId }) => {
  const character = characters.find((c) => c.id === characterId);

  return character ? (
    <Container
      characterImageUrl={character.imageUrl}
      characterRarity={character.rarity}
      characterColab={character.colab}
    >
      <RarityDisplay rarity={character.rarity} />
    </Container>
  ) : (
    <Container
      characterImageUrl="https://static.wikia.nocookie.net/gensin-impact/images/d/dd/Character_Yaoyao_Thumb.png"
      characterRarity={0}
      characterColab={false}
    />
  );
};

export default CharacterAvatar;
