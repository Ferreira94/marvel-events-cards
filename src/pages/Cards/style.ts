import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: -10rem;
  gap: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    width: 9rem;
    height: 2.25rem;
    border: 0;
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme["yellow-500"]};
    color: ${(props) => props.theme["gray-100"]};
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    &:disabled {
      background-color: ${(props) => props.theme["gray-500"]};
      cursor: not-allowed;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;
