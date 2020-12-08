import styled from 'styled-components'

export const Container = styled.div`
  display: inline-flex;
  flex-direction: row;

  position: relative;

  label {
    display: flex;
    flex-direction: row;

    svg {
      cursor: pointer;

      color: grey;

      width: 1em;
      height: 1em;
    }

    input:checked ~ svg {
      color: white;
    }

    :hover svg {
      color: white;
      transform: scale(1.2);
    }

    .fulfilled {
      color: white;
    }
  }

  :hover > span {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.2s ease-out 0.5s, visibility 0.2s ease-out 0.5s;
  }
`

export const Tooltip = styled.span`
  white-space: nowrap;

  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease-out 0s, visibility 0.2s ease-out 0s;

  position: absolute;
  z-index: 1;
  top: -1.5em;
  left: 0;

  background-color: white;
  color: black;
  padding: 0 0.2em;
  border-radius: 0.3em;
`
