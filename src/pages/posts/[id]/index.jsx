"use client";

import { Header } from "src/components/Header";
import styles from "src/app/page.module.css";
import { Post } from "src/components/Post";

const PostsId = () => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.inner}>
        <Post />
      </div>
    </div>
  );
};

export default PostsId;
