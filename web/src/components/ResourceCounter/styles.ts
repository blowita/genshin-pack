import styled from 'styled-components'

import { shade } from 'polished'

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  width: 100%;

  button {
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 0.2rem;
    margin: 0.2rem;

    color: #222222;

    transition: background-color 0.2s;
  }

  button:first-child {
    background: ${shade(0.2, '#ff3333')};

    &:hover {
      background: #ff3333;
    }
  }

  button:last-child {
    background: ${shade(0.2, '#33ff33')};

    &:hover {
      background: #33ff33;
    }
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  width: 5rem;
  height: 6rem;
  border-radius: 0.3rem;

  background: #999999
    url('https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Boreal_Wolf%27s_Cracked_Tooth.png')
    no-repeat top center;
  background-size: contain;
`

export const Counter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  border-radius: 0 0 0.3rem 0.3rem;

  background: #666666;

  /*  use when requirement is greater than 9999
  span {
    font-size: 0.8rem;
  } */
`
