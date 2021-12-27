import React from "react";

import { characters } from "../../data/characters";

import RarityDisplay from "../RarityDisplay";

import { Container, CharacterImage } from "./styles";

interface CharacterAvatarProps {
  characterId: string;
}

const CharacterAvatar: React.FC<CharacterAvatarProps> = ({ characterId }) => {
  const character = characters.find((c) => c.id === characterId);

  return character ? (
    <Container
      characterRarity={character.rarity}
      characterColab={character.colab}
    >
      <CharacterImage characterImageUrl={character.imageUrl}>
        <RarityDisplay rarity={character.rarity} />
      </CharacterImage>
    </Container>
  ) : (
    <Container characterRarity={0} characterColab={false}>
      <CharacterImage characterImageUrl="/genshin-pack/static/images/avatar/Avatar_Unknown.png" />
    </Container>
  );
};

export default CharacterAvatar;
