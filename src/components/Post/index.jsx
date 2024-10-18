"use client";
import Head from "next/head";
import { usePost } from "../../hooks/usePost";
import { CommentsByPostId } from "src/components/Comments/CommentsByPostId";
import { UserByUserId } from "src/components/User/UserByUserId";
import { useRouter } from "next/router";

export const Post = () => {
  const router = useRouter();
  const { data, error, isLoading } = usePost(router.query.id);

  if (isLoading) {
    return <p>ローディング中です・・・・</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
      <br></br>
      {/* {user?.name ? <div>Created by :{user.name}</div> : null} */}
      <UserByUserId id={data?.userId} />

      <CommentsByPostId id={data?.id} />
    </div>
  );
};
