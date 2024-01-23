import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: "Style Script", sans-serif;
    font-size: 5rem;
    font-weight: normal;

    /* Mobile */
    @media (max-width: 370px) {
      font-size: 3rem;
    }
  }
`;
