"use client";

import { useCallback, useEffect, useState } from "react";
import { Header } from "src/components/Header";
import styles from "src/app/page.module.css";

const Home = (props) => {
  //⭐︎初期値を指定しないとエラーになる
  const [posts, setPosts] = useState([]);

  const getPosts = useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    setPosts(json);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  console.log(posts);

  return (
    <div className={styles.page}>
      <Header />
      <ol>
        {posts.length > 0
          ? posts.map((post) => {
              return (
                <li key={post.id}>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </li>
              );
            })
          : "Loading..."}
      </ol>
    </div>
  );
};

export default Home;
