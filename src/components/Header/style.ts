import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 20rem;
  padding: 2rem;
  background-color: ${(props) => props.theme["red-500"]};

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media ${(props) => props.theme.mobile} {
    padding: 1rem;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme["gray-100"]};

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;
