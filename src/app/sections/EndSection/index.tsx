"use client";
import React from "react";
import { motion } from "framer-motion";
import { Container } from "./styled";

export const EndSection = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Container>
        <h2>Te esperamos!</h2>
      </Container>
    </motion.footer>
  );
};
