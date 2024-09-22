"use client";

import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import styles from "src/app/page.module.css";
import { useCallback, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const foo = "bar"; //引数を定義する場合は内部で定義する

  const handleClick = useCallback((e) => {
    e.preventDefault();
    console.log(e.target.textContent);
    alert(foo);
  }, []);

  useEffect(() => {
    //DOMに直接アクセスする場合はuseEffectを使う
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue"; //マウント時に実行される
    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = ""; //アンマウント時に実行される
    };
  }, []);

  return (
    <div className={styles.page}>
      <Header />
      <Link href="/about" onClick={handleClick}>
        Click me
      </Link>
      <Main page="index" />
      <Footer />
    </div>
  );
}
