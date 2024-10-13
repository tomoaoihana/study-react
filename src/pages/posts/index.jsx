"use client";

import { Header } from "src/components/Header";
import { Posts } from "src/components/Posts";
import styles from "src/app/page.module.css";

const Home = () => {
  return (
    <div className={styles.page}>
      <Header />
      <Posts />
    </div>
  );
};

export default Home;