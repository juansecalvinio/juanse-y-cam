import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: #000000;
  width: 100%;
`;

export const Container = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 700px;
  margin: 0 auto;
  padding: 1rem;

  p {
    color: #ffffff;
  }

  /* Mobile */
  @media (max-width: 700px) {
    p {
      font-size: 0.7rem;
    }
  }
`;
