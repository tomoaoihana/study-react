"use client";

import { Header } from "src/components/Header";
import styles from "src/app/page.module.css";
import { useRouter } from "next/router";

const PostId = () => {
  const router = useRouter();

  console.log(router.query.id);

  return (
    <div className={styles.page}>
      <Header />
      <div>{router.query.id}</div>
    </div>
  );
};

export default PostId;
