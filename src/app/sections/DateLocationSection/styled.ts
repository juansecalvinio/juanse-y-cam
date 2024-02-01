import styled from "styled-components";

export const Section = styled.section``;

export const Container = styled.div`
  bottom: 8rem;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  max-width: 700px;
  padding: 2.5rem 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  gap: 0.5rem;

  h3 {
    font-family: "Style Script", sans-serif;
    font-size: 3rem;
    font-weight: normal;
  }

  p {
    font-family: "Old Standard TT", sans-serif;
    font-size: 2rem;
  }

  a p {
    font-weight: bold;
    text-decoration: underline;
  }

  /* Mobile */
  @media (max-width: 700px) {
    p {
      font-size: 1.5rem;
    }
  }
`;

export const IFrame = styled.iframe`
  border: 0;
  border-radius: 6px;
  width: 500px;
  height: 350px;

  /* Mobile */
  @media (max-width: 700px) {
    width: 300px;
    height: 250px;
  }
`;
