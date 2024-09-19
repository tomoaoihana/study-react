"use client";

import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import styles from "src/app/page.module.css";
import { useCallback } from "react";
import Link from "next/link";

export default function Home() {
  const foo = "bar"; //引数を定義する場合は内部で定義する

  const handleClick = useCallback((e) => {
    e.preventDefault();
    console.log(e.target.textContent);
    alert(foo);
  }, []);

  return (
    <div className={styles.page}>
      <Header />
      <Link href="/about" onClick={handleClick}>
        Click me
      </LinK>
      <Main page="index" />
      <Footer />
    </div>
  );
}
