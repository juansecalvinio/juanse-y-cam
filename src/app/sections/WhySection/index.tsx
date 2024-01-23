"use client";
import React from "react";
import { motion } from "framer-motion";
import { Container } from "./styled";

export const WhySection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Container>
        <h3>¿Por qué?</h3>
        <p>
          Porque queremos celebrar junto a vos la decisión de caminar juntos el
          resto de nuestra vida en amor incondicional.
        </p>
        <p>
          <strong>1 Juan 4</strong>
        </p>
      </Container>
    </motion.section>
  );
};
