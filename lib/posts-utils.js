import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.csw(), "posts");

export const getPostData = (postId) => {
  const postSlug = postId.replace(/\.md$/, "");
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
};

export const getPostsFiles = () => fs.readdirSync(postDirectory);

export const getAllPosts = () => {
  const postFiles = getPostsFiles();
  const allPosts = postFiles.map(getPostData);
  return allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
};

export const getFeaturedPost = () => {
  return getAllPosts().filter((post) => post.isFeatued);
};
