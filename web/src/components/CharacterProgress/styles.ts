import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  width: 20rem;
  border: solid 1px white;
  border-radius: 0.5rem;
  padding: 0.3rem;
  background-color: #303030;

  > div {
    margin-right: 0.3rem;
  }

  .talents .label {
    display: inline-block;
    width: 10rem;
  }

  span.ascension,
  span.current {
    margin-right: 1.5rem;
  }
`

export const LevelProgress = styled.div`
  flex-direction: row;

  .element,
  .weapon {
    margin-left: 0.5rem;
  }

  .label {
    margin-right: 1.5rem;
  }
`
