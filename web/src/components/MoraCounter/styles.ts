import styled, { css } from 'styled-components'

interface CoverProps {
  resourceImageUrl: string
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 5rem;
  height: 6rem;
  border-radius: 0.3rem;

  background: white;
`

export const Cover = styled.div<CoverProps>`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 1rem 1rem;

  padding: 0.3rem;

  ${(props) =>
    props.resourceImageUrl &&
    css`
      background-image: url(${props.resourceImageUrl});
    `}
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-origin: content-box;

  background-color: #6faacc;
`

export const Filler = styled.div`
  flex-grow: 1;
`

export const Stars = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  margin-bottom: -0.1rem;

  color: #ffcc00;
  font-size: 0.9rem;
`

export const Counter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 100%;
  border-radius: 0 0 0.3rem 0.3rem;

  background: white;
  padding-right: 0.2rem;

  input {
    color: black;
    font-size: 0.9rem;
    font-weight: 500;
    border: none;
    border-bottom: 1px solid black;
    background-color: transparent;
    text-align: right;
  }

  span {
    color: black;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: default;

    &.required {
      color: red;
    }

    &.fulfilled {
      color: green;
    }
  }
`
