"use client";
import React, { useState, useEffect, useRef } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { Container, TimerElement, TimerElementsWrapper } from "./styled";

interface CountDownSectionProps {
  targetDate: Date;
}

export const CountDownSection = ({ targetDate }: CountDownSectionProps) => {
  const [isClient, setIsClient] = useState(false);
  const [isWeddingDay, setIsWeddingDay] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    setIsClient(true);
    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        setTimeLeft({ days, hours, minutes });
      } else {
        setIsWeddingDay(true);
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!isClient) {
    // Renderiza un estado de carga o un marcador de posición
    return <div>Cargando...</div>;
  }

  if (isWeddingDay) return null;

  const { days, hours, minutes } = timeLeft;

  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <h2>Faltan...</h2>
        <motion.p>
          <TimerElementsWrapper>
            <TimerElement>
              <h4>{days}</h4>
              <p>{days === 1 ? "Día" : "Días"}</p>
            </TimerElement>
            <TimerElement>
              <h4>{hours}</h4>
              <p>{hours === 1 ? "Hora" : "Horas"}</p>
            </TimerElement>
            <TimerElement>
              <h4>{minutes}</h4>
              <p>{minutes === 1 ? "Minuto" : "Minutos"}</p>
            </TimerElement>
          </TimerElementsWrapper>
        </motion.p>
        <h3>...para nuestra boda!</h3>
      </Container>
    </motion.section>
  );
};
