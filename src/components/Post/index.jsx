"use client";
import Head from "next/head";
import { usePost } from "../../hooks/usePost";

export const Post = () => {
  const { post, user, error, isLoading } = usePost();

  if (isLoading) {
    return <p>ローディング中です・・・・</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      <br></br>
      {user?.name ? <div>Created by :{user.name}</div> : null}
    </div>
  );
};
