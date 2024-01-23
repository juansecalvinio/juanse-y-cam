"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

import { Container, ImageWrapper } from "./styled";

export const MainSection = () => {
  return (
    <motion.section
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
        <IoIosArrowDown
          color="#7d5427"
          size={"50px"}
          style={{
            marginTop: "5rem",
          }}
        />
      </Container>
    </motion.section>
  );
};
