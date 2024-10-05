"use client";

import { useCallback, useEffect, useState } from "react";

export const Posts = () => {
  //⭐︎初期値を指定しないとエラーになる
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("えらーが発生しました、データの取得に失敗しました");
      }

      const json = await res.json();
      setPosts(json);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (loading) {
    return <p>ローディング中です・・・・</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (posts.length === 0) {
    return <p>データがありません</p>;
  }

  return (
    <ol>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        );
      })}
    </ol>
  );
};
