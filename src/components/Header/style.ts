import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  padding: 2rem;
  background-color: ${(props) => props.theme["red-500"]};
`;
