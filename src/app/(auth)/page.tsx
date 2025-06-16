"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClient = () => {
    // router.push("/client");
    return null;
  };

  const handleTrainer = () => {
    return router.push("/trainer");
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.navbar}>
          <Image
            src="/assets/logo-black.png"
            alt="Blog AI logo"
            width={80}
            height={80}
            priority
          />
          <div className={styles.buttons}>
            <button 
              onClick={handleClient} 
              className={styles.client}>
              Client
            </button>
            <button 
              onClick={handleTrainer} 
              className={styles.trainer}>
              Trainer
            </button>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <h1>NutriSync</h1>
        <h2>Meal Prep Made Easy</h2>
        <button 
          onClick={handleTrainer} 
          className={styles.getStarted}>Get Started</button>
      </main>
    </div>
  );
}
