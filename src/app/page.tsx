import CountdownTimer from "./components/CountdownTimer";
import { Header } from "./components/Header";

import styles from "./app.module.css";

export default function Home() {
  const weddingDate = new Date("2024-03-03T16:00:00");

  return (
    <main className={styles.main}>
      <Header />
      <CountdownTimer targetDate={weddingDate} />
    </main>
  );
}
