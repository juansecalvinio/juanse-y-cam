"use client";
import React from "react";
import { motion } from "framer-motion";
import { Container, Section } from "./styled";

export const EndSection = () => {
  return (
    <Section
      as={motion.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <h2>Te esperamos!</h2>
      </Container>
    </Section>
  );
};
