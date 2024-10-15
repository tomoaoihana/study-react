"use client";

import styles from "src/app/page.module.css";
import Head from "next/head";

import { Header } from "src/components/Header";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <div className={styles.innerTop}>
        <h1>Next.jsで学ぶReact講座</h1>
        <p>JSONPlaceholderのAPIを色々叩いてみるよ！</p>
      </div>
    </div>
  );
};

export default Index;
