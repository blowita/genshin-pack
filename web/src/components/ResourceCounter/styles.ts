import styled, { css } from 'styled-components'

import { shade } from 'polished'

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  width: 100%;

  &.hidden {
    visibility: hidden;
  }

  button {
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 0.2rem;

    color: #222222;

    transition: background-color 0.2s;
  }

  button.minus {
    background: ${shade(0.2, '#ff3333')};

    &:hover {
      background: #ff3333;
    }
  }

  button.plus {
    background: ${shade(0.2, '#33ff33')};

    &:hover {
      background: #33ff33;
    }
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 5rem;
  height: 6rem;
  border-radius: 0.3rem;

  background: white;
`

export const Counter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  width: 100%;
  border-radius: 0 0 0.3rem 0.3rem;

  background: white;
  padding-right: 0.2rem;

  input {
    color: black;
    font-weight: 500;
    border: none;
    background-color: transparent;
    text-align: right;
  }

  span {
    color: black;
    font-weight: 500;
    cursor: default;

    &.required {
      color: red;
    }

    &.fulfilled {
      color: green;
    }
  }
`

interface CoverProps {
  resourceUrl: string
}

export const Cover = styled.div<CoverProps>`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 1rem 1rem;

  padding: 0.3rem;

  ${(props) => css`
    background-image: url(${props.resourceUrl});
  `}
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-origin: content-box;

  background-color: #aaaaaa;

  &.rarity-2 {
    background-color: #6faa88;
  }
  &.rarity-3 {
    background-color: #6faacc;
  }
  &.rarity-4 {
    background-color: #886faa;
  }
  &.rarity-5 {
    background-color: #cc9000;
  }
`

export const Filler = styled.div`
  flex-grow: 1;
`

export const Stars = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  margin-bottom: -0.1rem;

  color: #ffcc00;
  font-size: 0.9rem;
`