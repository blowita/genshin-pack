import styled from 'styled-components'

import { shade } from 'polished'

interface ButtonProps {
  selected: boolean
}

export const Container = styled.div`
  position: relative;
  display: inline-block;

  &:hover span {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.2s ease-out 0.5s, visibility 0.2s ease-out 0.5s;
  }
`

export const Button = styled.button<ButtonProps>`
  width: 3rem;
  height: 3rem;
  font-size: 2rem;
  border-radius: 0.3rem;

  background-color: ${(props) =>
    props.selected ? shade(0.2, '#33ff33') : shade(0.2, '#c0c0c0')};

  &:hover,
  &:focus {
    background-color: ${(props) => (props.selected ? '#33ff33' : '#c0c0c0')};
  }
`

export const Tooltip = styled.span`
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease-out 0s, visibility 0.2s ease-out 0s;

  position: absolute;
  z-index: 1;
  top: 115%;
  left: 50%;

  min-width: 8rem;
  margin-left: -4rem;

  background-color: white;
  color: black;
  text-align: center;
  font-size: 0.9rem;
  padding: 0.3rem;
  border-radius: 0.3rem;

  ::after {
    content: ' ';
    position: absolute;
    bottom: 100%;
    left: 50%;

    margin-left: -0.3rem;

    border-width: 0.3rem;
    border-style: solid;
    border-color: transparent transparent white transparent;
  }
`
