"use client";

import { Header } from "src/components/Header";
import { Posts as PostsComponent } from "src/components/Posts";
import styles from "src/app/page.module.css";

const Posts = () => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.inner}>
        <PostsComponent />
      </div>
    </div>
  );
};

export default Posts;
