import styled from "styled-components";

export const Container = styled.header`
  font-family: "Dancing Script", cursive;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  h2 {
    font-size: 5rem;
    font-weight: normal;
    line-height: 5rem;
  }

  p {
    font-size: 2rem;
  }

  & :nth-child(3) {
    line-height: 1rem;
  }
`;

export const ImageWrapper = styled.div`
  margin-top: 4rem;
`;
