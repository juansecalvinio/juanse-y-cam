import styled from "styled-components";

export const Container = styled.div`
  bottom: 8rem;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
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
    font-size: 1.5rem;
  }

  a p {
    font-weight: bold;
    text-decoration: underline;
  }
`;
