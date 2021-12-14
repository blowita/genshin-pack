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
    margin-left: -1rem;
    margin-top: -1.5rem;

    > div {
      margin-left: 1rem;
      margin-top: 1rem;
    }
  }
`;
