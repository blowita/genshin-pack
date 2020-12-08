import styled from 'styled-components'

export const Container = styled.div`
  label {
    position: relative;
    display: block;

    width: 2rem;
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
        content: '';

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

    input:focus + span,
    span:hover {
      box-shadow: 0 0 0.8rem #5e916c;
    }
  }
`
