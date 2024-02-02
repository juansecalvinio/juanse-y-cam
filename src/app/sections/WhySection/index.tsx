"use client";
import React from "react";
import { motion } from "framer-motion";
import { Container, Section } from "./styled";

export const WhySection = () => {
  return (
    <Section
      as={motion.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <h3>¿Por qué?</h3>
        <p>
          Porque queremos celebrar junto a vos la decisión de amarnos y caminar
          juntos el resto de nuestra vida.
        </p>
        <br />
        <p>
          <i>
            “Al saber que Dios nos ama y poner nuestra confianza en su amor, el
            nuestro crece hasta hacerse perfecto. En esa clase de amor no hay
            temor, sino que el perfecto amor echa fuera el temor.”
          </i>
        </p>
        <p>
          <strong>1 Juan 4:16-19</strong>
        </p>
      </Container>
    </Section>
  );
};
