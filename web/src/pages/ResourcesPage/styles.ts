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
  overflow-y: scroll;
  overflow-x: hidden;
  margin-bottom: 2.5rem;
  padding-left: 1rem;
  padding-top: 1rem;

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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: -0.5rem;

    > div {
      margin: 0.5rem;
    }
  }
`;
