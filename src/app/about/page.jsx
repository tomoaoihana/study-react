"use client";

import styles from "src/app/page.module.css";
import { Footer } from "src/components/Footer"; // これを追加
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Main page="About" />
      <Footer />
    </div>
  );
}
