import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;

  height: 20rem;
  background-color: ${(props) => props.theme["red-500"]};

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
  }

  @media ${(props) => props.theme.mobile} {
    div {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;
