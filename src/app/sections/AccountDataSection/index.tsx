"use client";
import React from "react";
import { motion } from "framer-motion";
import { Container } from "./styled";

export const AccountDataSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Container>
        <h3>
          Si deseas hacernos un regalo... te compartimos los datos de nuestra
          cuenta:
        </h3>
        <p>Banco Santander</p>
        <p>CBU: 0720175888000037261740</p>
        <p>Alias: juansecalvinio</p>
        <p>Titular: Calviño Juan Sebastian</p>
        <p>DNI: 37019595</p>
      </Container>
    </motion.section>
  );
};
