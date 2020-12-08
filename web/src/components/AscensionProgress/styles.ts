import styled from 'styled-components'

export const Container = styled.div`
  display: inline-flex;
  flex-direction: row;

  fieldset {
    display: inline-flex;
    flex-direction: row;
    align-self: baseline;

    margin-inline: 0;
    padding-inline: 0;
    padding-block: 0;
    border: none;

    font-size: 1rem;

    div + div {
      margin-left: 0.1rem;
    }

    div:first-of-type svg {
      visibility: hidden;
    }

    :disabled svg {
      opacity: 0.5;
    }
  }
`
