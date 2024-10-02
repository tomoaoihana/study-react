"use client";

import styles from "src/app/page.module.css";
import { Footer } from "src/components/Footer"; // これを追加
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

export default function About(props) {
  const {
    count,
    isShow,
    handleClick,
    handleDisplay,
    text,
    array,
    handleChange,
    handleAdd,
  } = props;

  return (
    <div className={styles.page}>
      <Header />
      <Main page="About" />
      {isShow ? <h1>{count}</h1> : null}
      <button href="/about" onClick={handleClick} className={styles.btn}>
        Click me
      </button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <button onClick={handleAdd}>追加する</button>

      <Footer />
    </div>
  );
}
