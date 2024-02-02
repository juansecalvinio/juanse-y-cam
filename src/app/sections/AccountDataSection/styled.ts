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
  text-align: center;
  gap: 0.5rem;
  max-width: 50vw;
  margin: 0 auto;
  padding: 5rem 1rem;

  /* Mobile */
  @media (max-width: 700px) {
    max-width: 100vw;
  }

  h3 {
    font-family: "Style Script", sans-serif;
    font-weight: normal;
    font-size: 3rem;
    line-height: 1;
    margin-bottom: 1rem;

    /* Mobile */
    @media (max-width: 700px) {
      font-size: 2rem;
    }
  }

  p {
    font-family: "Old Standard TT", sans-serif;
    font-size: 1.5rem;

    /* Mobile */
    @media (max-width: 700px) {
      font-size: 1.2rem;
    }
  }
`;
