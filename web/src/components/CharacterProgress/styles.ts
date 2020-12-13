import styled, { css } from 'styled-components'

import { shade } from 'polished'

import { ElementType, WeaponType } from '../../data/characters'

interface Props {
  enabled: boolean
}

interface CharacterElementAttrs {
  'data-title': ElementType
}

interface CharacterWeaponAttrs {
  'data-title': WeaponType
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  width: 21rem;

  border: solid 1px;
  border-color: ${(props) => (props.enabled ? 'white' : shade(0.4, 'white'))};
  border-radius: 0.5rem;
  padding: 0.3rem;

  color: ${(props) => (props.enabled ? 'white' : shade(0.4, 'white'))};
  background-color: ${(props) =>
    props.enabled ? '#303030' : shade(0.4, '#303030')};
`

export const CharacterInfo = styled.div`
  order: 1;

  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;

  min-width: 20rem;
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

export const CharacterElement = styled.div.attrs(
  ({ 'data-title': dataTitle }: CharacterElementAttrs) => ({
    dataTitle: dataTitle || '',
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
    top: -1.8rem;

    background-color: white;
    color: black;
    padding: 0 0.2rem;
    border-radius: 0.3rem;
    font-size: 1rem;
    line-height: 1.5rem;
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

export const CharacterWeapon = styled.div.attrs(
  ({ 'data-title': dataTitle }: CharacterWeaponAttrs) => ({
    dataTitle: dataTitle || '',
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
    top: -1.8rem;

    background-color: white;
    color: black;
    padding: 0 0.2rem;
    border-radius: 0.3rem;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

export const Avatar = styled.div<Props>`
  order: 3;

  display: flex;
  align-items: center;

  font-size: 1.3rem;
  margin-right: 0.3rem;

  ${(props) =>
    !props.enabled &&
    css`
      opacity: 0.6;
    `}
`

export const LevelProgress = styled.fieldset`
  order: 2;

  display: flex;
  flex-direction: column;
  flex-grow: 1;

  border-radius: 0.3rem;
  border-color: #ffffff22;
  padding: 0.3rem;

  > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    fieldset {
      font-size: 1rem;
      margin-right: 0.2rem;
    }

    fieldset + span {
      margin-left: 0.8rem;
    }

    > input {
      background-color: transparent;
      color: white;
      width: 3rem;
      border-radius: 0.3rem;
      margin-left: 0.3rem;
      margin-right: 0.2rem;
      text-align: right;
    }

    & + div {
      margin-top: 0.5rem;
    }
  }
`

export const Talents = styled.fieldset`
  order: 4;

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
`
