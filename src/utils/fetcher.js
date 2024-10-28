export const fetcher = async (...args) => {
  const res = await fetch(...args);

  if (!res.ok) {
    throw new Error("データにエラーが発生しました");
  }

  const json = await res.json();
  return json;
};
