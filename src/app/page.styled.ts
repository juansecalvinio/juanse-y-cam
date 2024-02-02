import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;

  /* Mobile */
  @media (max-width: 700px) {
  }

  /* Tablet and Smaller Desktop */
  @media (min-width: 701px) and (max-width: 1120px) {
  }
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
