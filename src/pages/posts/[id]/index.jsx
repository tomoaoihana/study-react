"use client";

import { Header } from "src/components/Header";
import styles from "src/app/page.module.css";
import { Post } from "src/components/Post";

const PostId = () => {
  return (
    <div className={styles.page}>
      <Header />
      <Post />
    </div>
  );
};

export default PostId;
