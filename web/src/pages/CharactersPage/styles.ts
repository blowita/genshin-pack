import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  padding: 1rem;
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin-bottom: 1rem;

  height: 3rem;
  overflow-y: auto;
  overflow-x: hidden;

  label {
    span {
      margin-left: 0.2rem;
    }

    & + label {
      margin-left: 1rem;
    }
  }
`;

export const Content = styled.div`
  margin-bottom: 2.5rem;
  padding-left: 1rem;
  height: calc(100vh - 8.5rem);

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