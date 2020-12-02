import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  margin-left: -1rem;
  margin-top: -1rem;

  > div {
    margin-left: 1rem;
    margin-top: 1rem;
  }
`
