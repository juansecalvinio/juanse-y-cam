"use client";
import React from "react";
import { Container, FooterStyled } from "./styled";

export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <p>
          Diseño web de @juansecalvinio | Fotografías de{" "}
          <a href="https://www.instagram.com/bastianlotoph" target="_blank">
            @bastianlotoph
          </a>
        </p>
      </Container>
    </FooterStyled>
  );
};
