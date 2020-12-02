import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  padding: 1rem;
`

export const Categories = styled.div`
  > div + div {
    margin-left: 0.3rem;
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
      width: 1.2rem;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 0.3rem grey;
      border-radius: 0.6rem;
    }

    ::-webkit-scrollbar-thumb {
      background: #888888;
      border-radius: 0.6rem;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #777777;
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
    border-radius: 50%;
  }
`
