import { API_URL } from "src/utils/const";
import useSWRImmutable from "swr/immutable";
// import { fetcher } from "src/utils/fetcher";

const useFetchArray = (url) => {
  const { data, error } = useSWRImmutable(url);

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};



//posts
export const usePosts = () => {
  return useFetchArray(`${API_URL}/posts`);
};

//users
export const useUsers = () => {
  return useFetchArray(`${API_URL}/users`);
};

export const usePostsByUserId = (id) => {
  return useFetchArray(id ? `${API_URL}/posts?userId=${id}` : null);
};

//comments
export const useComments = () => {
  return useFetchArray(`${API_URL}/comments`);
};

export const useCommentsByPostId = (id) => {
  return useFetchArray(id ? `${API_URL}/comments?postId=${id}` : null);
};

// export const usePostsByCommentId = (id) => {
//   return useFetchArray(id ? `${API_URL}/posts?id=${id}` : null);
// };
