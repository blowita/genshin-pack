import styled, { css } from "styled-components";

interface CharacterAvatarProps {
  characterImageUrl: string;
  characterRarity: number;
  characterColab: boolean;
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

export const Container = styled.div<CharacterAvatarProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 4em;
  height: 4.5em;

  padding: 0.1em;
  border-radius: 0.3em;

  ${(props) =>
    props.characterImageUrl &&
    css`
      background-image: url(${props.characterImageUrl});
    `}
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top center;
  background-origin: content-box;

  background-color: ${(props) =>
    handleRarityType(props.characterRarity, props.characterColab)};

  > div {
    font-size: 0.7em;
    background-color: #00000055;
    padding: 0.1em;
    border-radius: 0.3em;
  }
`;
