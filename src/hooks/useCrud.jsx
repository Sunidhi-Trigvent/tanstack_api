import React from "react";
import useAuth from "./useAuth";
import { useMutation, useQuery } from "react-query";

const useCrud = () => {
  const { request } = useAuth();
  const {
    data: posts,
    refetch: refetchPosts,
    isLoading: PostsLoading,
    isError: errorInLoadingPosts,
  } = useQuery("posts", async () => (await request.get("/posts")).data);

  const {
    mutateAsync: deletePosts,
    isLoading: deletingPosts,
    isError,
  } = useMutation(
    async (id) => {
      await request.delete(`/posts/${id}`);
    },
    {
      onSuccess: () => refetchPosts(),
    }
  );

  return {
    posts,
    PostsLoading,
    deletePosts,
    deletingPosts,
  };
};

export default useCrud;
