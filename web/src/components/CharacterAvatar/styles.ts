import styled, { css } from "styled-components";

interface CharacterAvatarProps {
  characterRarity: number;
  characterColab: boolean;
}

interface CharacterImageProps {
  characterImageUrl: string;
}

const handleRarityType = (rarity: number, colab: boolean): string => {
  switch (rarity) {
    case 5:
      return colab ? "#a84432" : "#cc9000";
    case 4:
      return "#886faa";
    case 3:
      return "#6faacc";
    case 2:
      return "#6faa88";
    default:
      return "#aaaaaa";
  }
};

const handleRarityBackground = (rarity: number, colab: boolean): string => {
  switch (rarity) {
    case 5:
      return colab
        ? "/genshin-pack/static/images/background/BG_Rarity_5_Colab.png"
        : "/genshin-pack/static/images/background/BG_Rarity_5.png";
    case 4:
      return "/genshin-pack/static/images/background/BG_Rarity_4.png";
    case 3:
      return "/genshin-pack/static/images/background/BG_Rarity_3.png";
    case 2:
      return "/genshin-pack/static/images/background/BG_Rarity_2.png";
    default:
      return "/genshin-pack/static/images/background/BG_Rarity_1.png";
  }
};

export const Container = styled.div<CharacterAvatarProps>`
  width: 4em;
  height: 4.5em;

  padding: 0.1em;
  border-radius: 0.3em;

  background-color: ${(props) =>
    handleRarityType(props.characterRarity, props.characterColab)};

  ${(props) => css`
    background-image: url(${handleRarityBackground(
      props.characterRarity,
      props.characterColab
    )});
  `}

  background-size: contain;
  background-repeat: no-repeat;
  background-position: top center;
  background-origin: content-box;
`;

export const CharacterImage = styled.div<CharacterImageProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 100%;
  height: 100%;

  ${(props) =>
    props.characterImageUrl &&
    css`
      background-image: url(${props.characterImageUrl});
    `}
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top center;
  background-origin: content-box;

  > div {
    font-size: 0.7em;
    background-color: #00000055;
    padding: 0.1em;
    border-radius: 0.3em;
  }
`;
