import styled from 'styled-components'

import { shade } from 'polished'

export const Categories = styled.div`
  div.wrapper {
    position: relative;
    display: inline-block;

    button {
      width: 3rem;
      height: 3rem;
      font-size: 2rem;
      border-radius: 0.3rem;

      background-color: ${shade(0.2, '#c0c0c0')};

      :hover {
        background-color: #c0c0c0;
      }

      &.selected {
        background-color: ${shade(0.2, '#33ff33')};

        :hover {
          background-color: #33ff33;
        }
      }
    }

    span.tooltip {
      visibility: hidden;
      min-width: 8rem;
      background-color: white;
      color: black;
      text-align: center;
      font-size: 0.9rem;
      padding: 0.3rem;
      border-radius: 0.3rem;

      position: absolute;
      z-index: 1;

      top: 115%;
      left: 50%;
      margin-left: -4rem;

      opacity: 0;
      transition: opacity 0.2s ease-out 0s, visibility 0.2s ease-out 0s;

      &::after {
        content: ' ';
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: -0.3rem;
        border-width: 0.3rem;
        border-style: solid;
        border-color: transparent transparent white transparent;
      }
    }

    &:hover .tooltip {
      visibility: visible;
      opacity: 1;
      transition: opacity 0.2s ease-out 0.5s, visibility 0.2s ease-out 0.5s;
    }

    & + div.wrapper {
      margin-left: 0.3rem;
    }
  }
`

export const Content = styled.div`
  margin: -0.5rem;
  margin-top: 0.5rem;

  > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    ::-webkit-scrollbar {
      width: 20px;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: #888888;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: rgb(54, 56, 58);
    }

    > div {
      margin: 0.5rem;
    }
  }

  > button {
    width: 1.2rem;
    height: 1.2rem;
    font-size: 1.2rem;
    border: none;
    border-radius: 0.5rem;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  padding: 1rem;
`
