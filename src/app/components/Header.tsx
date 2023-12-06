"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Container, ImageWrapper } from "./Header.styled";

export const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Container>
        <h2>Juanse</h2>
        <p>&</p>
        <h2>Cami</h2>
        <ImageWrapper>
          <Image
            src="/images/rings.webp"
            alt="Alianzas"
            width={100}
            height={50}
          />
        </ImageWrapper>
      </Container>
    </motion.div>
  );
};
