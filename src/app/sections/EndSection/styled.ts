import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
  padding-top: 2.5rem;

  h2 {
    font-family: "Style Script", sans-serif;
    font-size: 5rem;
    font-weight: normal;

    /* Mobile */
    @media (max-width: 700px) {
      font-size: 3rem;
    }
  }
`;
