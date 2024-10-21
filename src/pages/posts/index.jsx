"use client";

import { Header } from "src/components/Header";
import { Posts as PostsComponent } from "src/components/Posts";

const Posts = () => {
  return (
    <div>
      <Header />
      <div>
        <PostsComponent />
      </div>
    </div>
  );
};

export default Posts;
