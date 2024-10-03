"use client";

import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import styles from "src/app/page.module.css";

const Home = (props) => {
  return (
    <div className={styles.page}>
      <Header />
      <Main page="index" />
      {props.isShow ? <h1>{props.count}</h1> : null}
      <button href="/about" onClick={props.handleClick} className={styles.btn}>
        Click me
      </button>
      <button onClick={props.handleDisplay}>
        {props.isShow ? "非表示" : "表示"}
      </button>

      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加する</button>
      <ul>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <Footer />
    </div>
  );
};

export default Home;
