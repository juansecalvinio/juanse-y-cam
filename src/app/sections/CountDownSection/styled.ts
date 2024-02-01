import styled from "styled-components";

export const Section = styled.section`
  background-image: url("./images/tranquera-02.jpg");
  background-position: center;
  background-size: cover;
  width: 100%;
`;

export const Container = styled.div`
  height: 700px;
  bottom: 8rem;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  max-width: 100vw;
  margin: 0 auto;
  padding-bottom: 2.5rem;

  h2,
  h3 {
    font-family: "Style Script", sans-serif;
    font-weight: normal;
  }

  h2 {
    color: #ffffff;
    font-size: 5rem;
    /* Mobile */
    @media (max-width: 700px) {
      font-size: 4rem;
    }
  }

  h3 {
    color: #ffffff;
    font-size: 4rem;

    /* Mobile */
    @media (max-width: 700px) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1.5rem;
  }
`;

export const TimerElementsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

export const TimerElement = styled.div`
  background-color: white;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  width: 75px;
  height: 75px;

  h4 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }
`;
