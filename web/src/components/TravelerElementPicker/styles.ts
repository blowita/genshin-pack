import styled from "styled-components";

import { ElementType } from "../../data/characters";

interface CharacterElementAttrs {
  "data-title": ElementType;
}

export const Container = styled.div`
  position: relative;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: transparent;
  color: white;
  border-radius: 0.5rem;

  :focus {
    box-shadow: 0 0 0.8rem #5e916c;
  }
`;

const elementImageUrls: Record<ElementType, string> = {
  [ElementType.Adaptative]: "",
  [ElementType.Anemo]: "/genshin-pack/static/images/element/Element_Anemo.png",
  [ElementType.Cryo]: "/genshin-pack/static/images/element/Element_Cryo.png",
  [ElementType.Dendro]:
    "/genshin-pack/static/images/element/Element_Dendro.png",
  [ElementType.Electro]:
    "/genshin-pack/static/images/element/Element_Electro.png",
  [ElementType.Geo]: "/genshin-pack/static/images/element/Element_Geo.png",
  [ElementType.Hydro]: "/genshin-pack/static/images/element/Element_Hydro.png",
  [ElementType.Pyro]: "/genshin-pack/static/images/element/Element_Pyro.png",
};

const getElementImageUrl = (element: ElementType): string =>
  elementImageUrls[element];

export const CharacterElement = styled.div.attrs(
  ({ "data-title": dataTitle }: CharacterElementAttrs) => ({
    dataTitle: dataTitle || "",
  })
)`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.2rem;

  background-image: url(${(props) => getElementImageUrl(props.dataTitle)});

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-origin: content-box;

  &[data-title]:after {
    top: 1.5rem;
    right: 1rem;

    background-color: white;
    color: black;
    padding: 0 0.2rem;
    border-radius: 0.3rem;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export const DropdownList = styled.div`
  z-index: 100;
  position: absolute;
  top: 1.8rem;
  left: -0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.2rem;

  background-color: #444;
  border-radius: 0.5rem;

  > button + button {
    margin-top: 0.3rem;
  }
`;

export const DropdownListItem = styled.button.attrs({ type: "button" })`
  background-color: transparent;
  width: 3rem;
  border-radius: 0.5rem;

  :focus-within {
    box-shadow: 0 0 0.8em #5e916c;
  }
`;
