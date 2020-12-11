import styled from 'styled-components'

export const Container = styled.fieldset`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-inline: 0;
  padding-inline: 0;
  padding-block: 0;
  border: none;
  border-radius: 0.3em;

  div + div {
    margin-left: 0.2em;
  }

  div:first-of-type svg {
    visibility: hidden;
  }

  :disabled svg {
    opacity: 0.5;
  }

  :focus-within {
    box-shadow: 0 0 0.8em #5e916c;
  }
`
