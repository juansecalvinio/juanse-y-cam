import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 8rem;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);

  h3 {
    font-family: "Dancing Script", sans-serif;
    font-size: 32px;
  }

  p {
    font-size: 20px;
  }
`;
