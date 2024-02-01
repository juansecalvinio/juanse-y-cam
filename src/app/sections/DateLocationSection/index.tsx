"use client";
import React, { useRef } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { Container, ContentWrapper, IFrame, Section } from "./styled";

export const DateLocationSection = () => {
  return (
    <Section
      as={motion.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <ContentWrapper
          as={motion.div}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>¿Cuándo?</h3>
          <p>Domingo 03 de Marzo</p>
          <p>16:00 hs</p>
        </ContentWrapper>
        <ContentWrapper
          as={motion.div}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>¿Dónde?</h3>
          <a href="https://maps.app.goo.gl/wPT34zJ65XAkCfQC9" target="_blank">
            <p>Quinta Los Diez</p>
          </a>
          <p>Suiza 1451, Villa de Mayo</p>
          <p>Buenos Aires</p>
        </ContentWrapper>
        <IFrame
          as={motion.iframe}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.574016992085!2d-58.68468952407337!3d-34.51368225274919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbcda985d3c37%3A0xc5ea56f079cd5418!2sQuinta%20Los%20Diez!5e0!3m2!1ses-419!2sar!4v1706026853870!5m2!1ses-419!2sar"
          loading="lazy"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        ></IFrame>
      </Container>
    </Section>
  );
};
