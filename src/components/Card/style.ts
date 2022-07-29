import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 15rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.125rem;
  background-color: ${(props) => props.theme["gray-100"]};
  border-radius: 0.5rem;
  padding: 1.25rem;
  box-shadow: 0 0 0.5rem ${(props) => props.theme["gray-700"]};
  color: black;
  overflow: hidden;

  div {
    display: flex;
    align-items: center;

    span {
      text-align: center;
      padding-top: 0.25rem;
      width: 1.5rem;
      height: 1.5rem;
      font-weight: bold;
      background-color: ${(props) => props.theme["red-500"]};
      border-radius: 1rem;
    }

    strong {
      flex: 1;
      text-align: center;
    }
  }

  p {
    height: 12.5rem;
    overflow: hidden;
  }

  button {
    width: 100%;
    height: 2.25rem;
    border: 0;
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme["red-500"]};
    color: ${(props) => props.theme["gray-100"]};
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;
