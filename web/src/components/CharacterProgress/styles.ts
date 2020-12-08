import styled, { css } from 'styled-components'

import { shade } from 'polished'

import { ElementType, WeaponType } from '../../data/characters'

interface Props {
  enabled: boolean
}

interface CharacterElementProps {
  element: ElementType
}

interface CharacterWeaponProps {
  weapon: WeaponType
}

export const Container = styled.div<Props>`
  width: 20rem;
  border: solid 1px;
  border-color: ${(props) => (props.enabled ? 'white' : shade(0.4, 'white'))};
  border-radius: 0.5rem;
  padding: 0.3rem;
  color: ${(props) => (props.enabled ? 'white' : shade(0.4, 'white'))};
  background-color: ${(props) =>
    props.enabled ? '#303030' : shade(0.4, '#303030')};

  .talents {
    display: flex;
    flex-direction: row;
    margin-top: 0.3rem;
    margin-bottom: 0.2rem;
  }

  .talents > div {
    display: block;
    white-space: nowrap;
    margin-right: 1rem;
  }

  .talents .label {
    display: inline-block;
    width: 3.5rem;
  }

  .talents .current {
    font-weight: 300;
  }

  .talents .target {
    font-weight: 300;
  }
`

export const TopRow = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  > div:first-of-type {
    margin-right: 0.3rem;
    ${(props) =>
      !props.enabled &&
      css`
        opacity: 0.6;
      `}
  }

  > div:last-of-type {
    flex-grow: 1;
  }
`

export const CharacterInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const CharacterName = styled.span`
  font-size: 1.3rem;
  margin-right: 0.3rem;
`

export const Filler = styled.div`
  flex-grow: 1;
`

const elementImageUrls: Record<ElementType, string> = {
  [ElementType.Adaptative]: '',
  [ElementType.Anemo]:
    'https://static.wikia.nocookie.net/gensin-impact/images/a/a4/Element_Anemo.png',
  [ElementType.Cryo]:
    'https://static.wikia.nocookie.net/gensin-impact/images/8/88/Element_Cryo.png',
  [ElementType.Dendro]:
    'https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Element_Dendro.png',
  [ElementType.Electro]:
    'https://static.wikia.nocookie.net/gensin-impact/images/7/73/Element_Electro.png',
  [ElementType.Geo]:
    'https://static.wikia.nocookie.net/gensin-impact/images/4/4a/Element_Geo.png',
  [ElementType.Hydro]:
    'https://static.wikia.nocookie.net/gensin-impact/images/3/35/Element_Hydro.png',
  [ElementType.Pyro]:
    'https://static.wikia.nocookie.net/gensin-impact/images/e/e8/Element_Pyro.png',
}

const getElementImageUrl = (element: ElementType): string =>
  elementImageUrls[element]

export const CharacterElement = styled.div<CharacterElementProps>`
  position: relative;

  width: 1.5rem;
  height: 1.5rem;

  ${(props) =>
    getElementImageUrl(props.element) &&
    css`
      background-image: url(${getElementImageUrl(props.element)});
    `}

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-origin: content-box;

  :hover span {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.2s ease-out 0.5s, visibility 0.2s ease-out 0.5s;
  }
`

const weaponImageUrls: Record<WeaponType, string> = {
  [WeaponType.Bow]:
    'https://static.wikia.nocookie.net/gensin-impact/images/9/97/Weapon-class-bow-icon.png',
  [WeaponType.Catalyst]:
    'https://static.wikia.nocookie.net/gensin-impact/images/0/02/Weapon-class-catalyst-icon.png',
  [WeaponType.Claymore]:
    'https://static.wikia.nocookie.net/gensin-impact/images/5/51/Weapon-class-claymore-icon.png',
  [WeaponType.Polearm]:
    'https://static.wikia.nocookie.net/gensin-impact/images/9/91/Weapon-class-polearm-icon.png',
  [WeaponType.Sword]:
    'https://static.wikia.nocookie.net/gensin-impact/images/9/95/Weapon-class-sword-icon.png',
}

const getWeaponImageUrl = (weapon: WeaponType): string =>
  weaponImageUrls[weapon]

export const CharacterWeapon = styled.div<CharacterWeaponProps>`
  position: relative;

  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.5rem;

  ${(props) =>
    getWeaponImageUrl(props.weapon) &&
    css`
      background-image: url(${getWeaponImageUrl(props.weapon)});
    `}

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-origin: content-box;

  :hover span {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.2s ease-out 0.5s, visibility 0.2s ease-out 0.5s;
  }
`

export const Tooltip = styled.span`
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease-out 0s, visibility 0.2s ease-out 0s;

  position: absolute;
  z-index: 1;
  top: -1.2rem;
  left: 0.9rem;

  background-color: white;
  color: black;
  padding: 0 0.2rem;
  border-radius: 0.3rem;
`

export const LevelProgress = styled.div`
  flex-direction: column;

  font-weight: 300;

  div {
    flex-direction: row;
  }

  .label,
  .ascension {
    margin-right: 0.2rem;
  }

  .level {
    margin-left: 0.2rem;
  }

  .label {
    font-weight: 300;
  }
`
