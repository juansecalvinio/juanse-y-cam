"use client";
import {
  AccountDataSection,
  CountDownSection,
  DateLocationSection,
  EndSection,
  MainSection,
  WhySection,
} from "./sections";
import { MainContainer, MainContent } from "./page.styled";
import { Footer } from "./sections/Footer";

export default function Home() {
  const weddingDate = new Date("2024-03-03T16:00:00");

  return (
    <MainContainer>
      <MainContent>
        <MainSection />
        <CountDownSection targetDate={weddingDate} />
        <DateLocationSection />
        <WhySection />
        <AccountDataSection />
        <EndSection />
        <Footer />
      </MainContent>
    </MainContainer>
  );
}
