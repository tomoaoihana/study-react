"use client";

import styles from "src/app/page.module.css";
import { Footer } from "src/components/Footer"; // これを追加
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

const About = (props) => {
  return (
    <div className={styles.page}>
      <Header />
      <Main page="About" />
      {props.isShow ? <h1>{props.doubleCount}</h1> : null}
      <button href="/about" onClick={props.handleClick} className={styles.btn}>
        Click me
      </button>
      <button onClick={props.handleDisplay}>
        {props.isShow ? "非表示" : "表示"}
      </button>
      <input type="text" value={props.text} onChange={props.handleChange} />
      <ul>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <button onClick={props.handleAdd}>追加する</button>

      <Footer />
    </div>
  );
};

export default About;
