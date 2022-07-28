import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 100vw;
  margin: 0 auto;

  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;
`;
