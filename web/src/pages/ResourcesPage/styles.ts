import styled from "styled-components";

import { shade } from "polished";

interface CategoryButtonProps {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  padding: 1rem;
`;

export const Categories = styled.div`
  margin-bottom: 1rem;

  > button + button {
    margin-left: 0.3rem;
  }
`;

export const CategoryButton = styled.button<CategoryButtonProps>`
  width: 3rem;
  height: 3rem;
  font-size: 2rem;
  border-radius: 0.3rem;

  background-color: ${(props) =>
    props.selected ? shade(0.2, "#33ff33") : shade(0.2, "#c0c0c0")};

  &:hover,
  &:focus {
    background-color: ${(props) => (props.selected ? "#33ff33" : "#c0c0c0")};
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
`;

export const Content = styled.div`
  margin-bottom: 2.5rem;
  padding-left: 1rem;
  height: calc(100vh - 8.25rem);

  > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    margin-left: -0.5rem;
    margin-top: -0.5rem;
    height: 100%;

    overflow-y: auto;
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: 1rem;
    }

    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.3);
      border-radius: 0.9rem;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 0.9rem;
      background-color: #444;
      -webkit-box-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.5);
    }

    > div {
      margin: 0.5rem;
    }
  }
`;
