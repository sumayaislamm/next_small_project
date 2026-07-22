import { revalidateTag } from "next/cache";

export const getBlogs = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["posts from tags"],
    },
  });
  const postData = await posts.json();
  console.log(postData);

  return postData;
};

const renewBlogCache = () => {
  revalidateTag("posts from tags", {
    expire: 60 * 60 * 24 * 7,
  });
};
