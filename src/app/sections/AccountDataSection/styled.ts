import styled from "styled-components";

export const Container = styled.div`
  bottom: 8rem;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;

  h3 {
    font-family: "Style Script", sans-serif;
    font-weight: normal;
    font-size: 3rem;

    /* Mobile */
    @media (max-width: 370px) {
      font-size: 2rem;
    }
  }

  p {
    font-family: "Old Standard TT", sans-serif;
    font-size: 1.5rem;

    /* Mobile */
    @media (max-width: 370px) {
      font-size: 1.2rem;
    }
  }
`;
