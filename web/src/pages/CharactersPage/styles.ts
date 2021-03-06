import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;
`

export const Controls = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin-bottom: 1rem;

  label {
    span {
      margin-left: 0.2rem;
    }

    & + label {
      margin-left: 1rem;
    }
  }
`

export const Content = styled.div`
  margin-left: -1rem;
  margin-top: -1rem;

  > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    > div {
      margin-left: 1rem;
      margin-top: 1rem;
    }
  }
`
