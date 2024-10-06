"use client";

import { useCallback, useEffect, useState, useReducer } from "react";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "end": {
      console.log(action);
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    }

    case "error": {
      console.log(action);
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }

    default: {
      throw new Error("no such action type!");
    }
  }
};

export const Posts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("えらーが発生しました、データの取得に失敗しました");
      }

      const json = await res.json();
      dispatch({ type: "end", data: json });
    } catch (error) {
      dispatch({ type: "error", error });
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  console.log("foo");

  if (state.loading) {
    return <p>ローディング中です・・・・</p>;
  }

  if (state.error) {
    return <p>{state.error.message}</p>;
  }

  if (state.data.length === 0) {
    return <p>データがありません</p>;
  }

  return (
    <ol>
      {state.data.map((post) => {
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
