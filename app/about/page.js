"use client";

import styles from "../page.module.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/Header";

import { Main } from "@/components/Main";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Main page="About" />
      <Footer />
    </div>
  );
}
