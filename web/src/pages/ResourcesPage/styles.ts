import styled from 'styled-components'

import { shade } from 'polished'

interface CategoryButtonProps {
  selected: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;
`

export const Categories = styled.div`
  > button + button {
    margin-left: 0.3rem;
  }
`

export const CategoryButton = styled.button<CategoryButtonProps>`
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

  &[data-title]:after {
    top: 3rem;
    left: 50%;

    width: 6rem;
    margin-left: -3rem;

    background-color: white;
    color: black;
    padding: 0.2rem 0;
    border-radius: 0.3rem;
    text-align: center;
    font-size: 1rem;
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

    > div {
      margin: 0.5rem;
    }
  }
`
