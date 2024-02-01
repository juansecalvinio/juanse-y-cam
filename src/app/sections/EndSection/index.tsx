"use client";
import React from "react";
import { motion } from "framer-motion";
import { Container, Footer } from "./styled";

export const EndSection = () => {
  return (
    <Footer
      as={motion.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <h2>Te esperamos!</h2>
      </Container>
    </Footer>
  );
};
