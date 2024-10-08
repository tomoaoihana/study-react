import useSWR from "swr";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());
const fetcher = async (...args) => {
  const res = await fetch(...args);

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  const json = await res.json();
  return json;
};

export const usePosts = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};
