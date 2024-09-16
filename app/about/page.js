"use client";

import styles from "../page.module.css";
import { Footer } from "@/components/footer";

import { Main } from "@/components/Main";

export default function Home() {
  return (
    <div className={styles.page}>
      <Main page="about" />
      <Footer />
    </div>
  );
}
