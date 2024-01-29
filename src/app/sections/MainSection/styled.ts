import styled from "styled-components";

export const Container = styled.div`
  font-family: "Style Script", cursive;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;
  height: 100vh;

  h2 {
    font-size: 8rem;
    font-weight: normal;
    line-height: 1rem;

    /* Mobile */
    @media (max-width: 700px) {
      font-size: 6rem;
    }
  }

  p {
    font-size: 3rem;
    line-height: 8rem;
  }

  & :nth-child(3) {
    line-height: 1rem;
  }
`;

export const ImageWrapper = styled.div`
  margin-top: 4rem;
`;
