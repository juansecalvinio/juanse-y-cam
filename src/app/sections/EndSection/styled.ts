import styled from "styled-components";

export const Section = styled.section`
  background-image: url("./images/tranquera-01.jpg");
  background-position: center;
  background-position-y: 50%;
  background-size: cover;
  width: 100%;
`;

export const Container = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  margin: 0 auto;
  padding-top: 2.5rem;

  h2 {
    color: #ffffff;
    font-family: "Style Script", sans-serif;
    font-size: 5rem;
    font-weight: normal;

    /* Mobile */
    @media (max-width: 700px) {
      font-size: 3rem;
    }
  }
`;
