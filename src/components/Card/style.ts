import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 15rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.125rem;
  background-color: ${(props) => props.theme["gray-100"]};
  border-radius: 0.5rem;
  padding: 1.25rem;
  box-shadow: 0 0 0.5rem ${(props) => props.theme["gray-700"]};
  color: black;

  div {
    display: flex;
    justify-content: center;

    span {
      text-align: center;
      font-weight: bold;
      background-color: ${(props) => props.theme["red-500"]};
      padding: 0.5rem;
      width: 2rem;
      border-radius: 1rem;
    }
  }
`;
