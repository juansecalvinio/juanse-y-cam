"use client";
import React from "react";
import { motion } from "framer-motion";
import { Container } from "./styled";

export const WhySection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <h3>¿Por qué?</h3>
        <p>
          Porque queremos celebrar junto a vos la decisión de caminar juntos el
          resto de nuestra vida en amor incondicional.
        </p>
        {/* <p>
          <strong>1 Juan 4</strong>
        </p> */}
      </Container>
    </motion.section>
  );
};
