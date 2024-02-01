import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
`;

export const Container = styled.div`
  bottom: 8rem;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  max-width: 60vw;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;

  /* Mobile */
  @media (max-width: 700px) {
    max-width: 100vw;
  }

  h3 {
    font-family: "Style Script", sans-serif;
    font-size: 3rem;
    font-weight: normal;
  }

  p {
    font-family: "Old Standard TT", sans-serif;
    font-size: 1.5rem;
    text-align: center;
  }

  /* Mobile */
  @media (max-width: 700px) {
    p {
      font-size: 1.25rem;
    }
  }
`;
