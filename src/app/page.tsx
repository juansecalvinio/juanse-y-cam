import CountdownTimer from "./components/CountdownTimer";
import styles from "./page.module.css";

export default function Home() {
  const weddingDate = new Date("2024-03-03T16:00:00");

  return (
    <main className={styles.main}>
      <CountdownTimer targetDate={weddingDate} />
    </main>
  );
}
