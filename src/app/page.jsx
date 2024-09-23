"use client";

import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import styles from "src/app/page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  //分割代入で変数を定義する
  const [count, setCount] = useState(1);

  const handleClick = (e) => {
    //この書き方は非推奨
    //ここだと直接fooの値を変更している
    // setFoo(foo + 1);

    //この書き方が推奨されている
    //fooじゃなくてもprevという変数名で前回の値を取得できる
    //なぜ？
    //setFooは非同期で実行されるため、fooの値が変わっている可能性がある
    //そのため、前回の値を取得するためにはprevという変数を使う
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    //DOMに直接アクセスする場合はuseEffectを使う
    document.body.style.backgroundColor = "lightblue"; //マウント時に実行される
    return () => {
      document.body.style.backgroundColor = ""; //アンマウント時に実行される
    };
  }, []);

  return (
    <div className={styles.page}>
      <Header />
      <h1>{count}</h1>
      <button href="/about" onClick={handleClick} className={styles.btn}>
        Click me
      </button>
      <Main page="index" />
      <Footer />
    </div>
  );
}
