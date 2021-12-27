import styled, { css } from "styled-components";

import { shade } from "polished";

import { ElementType, WeaponType } from "../../data/characters";

interface Props {
  enabled: boolean;
}

interface CharacterElementAttrs {
  "data-title": ElementType;
}

interface CharacterWeaponAttrs {
  "data-title": WeaponType;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  width: 18rem;

  border: solid 1px;
  border-color: ${(props) => (props.enabled ? "white" : shade(0.4, "white"))};
  border-radius: 0.5rem;
  padding: 0.3rem;

  color: ${(props) => (props.enabled ? "white" : shade(0.4, "white"))};
  background-color: ${(props) =>
    props.enabled ? "#303030" : shade(0.4, "#303030")};
`;

export const CharacterInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;

  min-width: 17rem;
`;

export const CharacterName = styled.span`
  position: relative;
  font-size: 1.3rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  pointer-events: none;

  :after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 2rem;
    height: 1.5rem;
    z-index: 2;
    pointer-events: initial;
  }

  :hover + .tooltip {
    display: block;
    transition: opacity 0.5s ease;
    opacity: 1;
  }
`;

export const CharacterNameTooltip = styled.span.attrs({ className: "tooltip" })`
  z-index: 1;
  display: none;
  position: absolute;
  top: 0;
  left: 0;

  font-size: 1.3rem;
  background-color: #303030;
  padding-right: 0.3rem;

  white-space: nowrap;
  overflow: visible;

  opacity: 0;
  transition: opacity 0.5s ease;
`;

export const CharacterToggle = styled.label`
  position: relative;
  display: block;

  margin-left: 0.3rem;
  width: 2rem;
  min-width: 2rem;
  height: 1.2rem;

  span {
    position: absolute;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    cursor: pointer;
    background-color: #cccccc;
    border-radius: 0.6rem;

    transition: 0.4s;

    ::before {
      position: absolute;
      content: "";

      height: 0.8rem;
      width: 0.8rem;
      left: 0.2rem;
      bottom: 0.2rem;

      background-color: white;
      border-radius: 50%;

      transition: 0.4s;
    }
  }

  input:checked + span {
    background-color: #5e916c;
  }

  input:checked + span:before {
    transform: translateX(0.8rem);
  }

  input:disabled + span {
    opacity: 0.2;
  }

  input:focus + span,
  span:hover {
    box-shadow: 0 0 0.8rem #5e916c;
  }
`;

export const Filler = styled.div`
  flex-grow: 1;
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

const weaponImageUrls: Record<WeaponType, string> = {
  [WeaponType.Bow]: "/genshin-pack/static/images/weapon/WeaponType_Bow.png",
  [WeaponType.Catalyst]:
    "/genshin-pack/static/images/weapon/WeaponType_Catalyst.png",
  [WeaponType.Claymore]:
    "/genshin-pack/static/images/weapon/WeaponType_Claymore.png",
  [WeaponType.Polearm]:
    "/genshin-pack/static/images/weapon/WeaponType_Polearm.png",
  [WeaponType.Sword]: "/genshin-pack/static/images/weapon/WeaponType_Sword.png",
};

const getWeaponImageUrl = (weapon: WeaponType): string =>
  weaponImageUrls[weapon];

export const CharacterWeapon = styled.div.attrs(
  ({ "data-title": dataTitle }: CharacterWeaponAttrs) => ({
    dataTitle: dataTitle || "",
  })
)`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.2rem;

  background-image: url(${(props) => getWeaponImageUrl(props.dataTitle)});

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

export const Avatar = styled.div<Props>`
  display: flex;
  align-items: center;

  font-size: 1.2rem;
  margin-right: 0.3rem;

  ${(props) =>
    !props.enabled &&
    css`
      opacity: 0.6;
    `}
`;

export const LevelProgress = styled.fieldset`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  border-radius: 0.3rem;
  border-color: #ffffff22;
  padding: 0.3rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    fieldset {
      font-size: 1rem;
    }

    > div {
      margin-top: 0.3rem;

      > input {
        background-color: transparent;
        color: white;
        width: 3rem;
        border-radius: 0.3rem;
        margin-left: 0.3rem;
        margin-right: 0.2rem;
        text-align: right;
      }
    }
  }

  > span {
    text-align: center;
  }
`;

export const AscensionProgressFieldset = styled.fieldset`
  display: flex;
  flex-direction: row;
  align-items: center;

  border: none;
  border-radius: 0.3em;

  label {
    display: flex;
    flex-direction: row;

    svg {
      cursor: pointer;

      color: #555555;

      width: 1em;
      height: 1em;
    }

    input:checked ~ svg {
      color: white;
    }

    input:disabled ~ svg {
      opacity: 0.6;
    }

    :hover svg {
      color: white;
      transform: scale(1.2);
    }

    .fulfilled {
      color: white;
    }

    &[data-title]:after {
      top: -1.8em;

      white-space: nowrap;

      background-color: white;
      color: black;
      padding: 0 0.2em;
      border-radius: 0.3em;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  label + label {
    margin-left: 0.2em;
  }

  label:first-of-type svg {
    visibility: hidden;
  }

  :disabled svg {
    opacity: 0.5;
  }

  :focus-within {
    box-shadow: 0 0 0.8em #5e916c;
  }
`;

export const Talents = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;

  border-radius: 0.3rem;
  border-color: #ffffff22;
  padding: 0.3rem;

  div {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;

    span:first-of-type {
      width: 4rem;
    }

    input {
      background-color: transparent;
      color: white;
      width: 2.5rem;
      border-radius: 0.3rem;
      text-align: right;
    }

    input + span {
      margin-left: 0.3rem;
      margin-right: 0.25rem;
    }

    span svg {
      opacity: 0.6;
    }

    & + div {
      margin-top: 0.5rem;
    }
  }
`;
