import styled from 'styled-components'

export const Container = styled.div`
  display: inline-flex;
  flex-direction: row;

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
`
