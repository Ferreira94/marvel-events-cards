import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  background-color: ${(props) => props.theme["gray-100"]};
  border-radius: 0.5rem;
  padding: 1.25rem;
  box-shadow: 0 0 0.5rem ${(props) => props.theme["gray-700"]};
  min-width: 16.25rem;
  max-width: 16.25rem;

  input {
    width: 100%;
    height: 2.25rem;
    border: 0;
    border-radius: 0.5rem;
    padding-left: 0.5rem;
    border: 1px solid ${(props) => props.theme["gray-600"]};

    &:focus {
      border-color: ${(props) => props.theme["yellow-500"]};
    }
  }

  button {
    width: 100%;
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
  }

  span {
    color: ${(props) => props.theme["red-500"]};
    text-align: center;
  }
`;
