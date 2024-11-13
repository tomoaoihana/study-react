import useSWR from "swr";

import { useRouter } from "next/router";
import { API_URL } from "src/utils/const";

export const useComment = () => {
  const router = useRouter();

  const { data, error } = useSWR(
    router.query.id
      ? `${API_URL}/comments/${router.query.id}`
      : null
  );

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};
