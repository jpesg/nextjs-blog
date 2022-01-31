import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.csw(), "posts");

export const getPostData = (fileName) => {
  const filePath = path.join(postDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, "");
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
};
export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postDirectory);
  const allPosts = postFiles.map(getPostData);
  return allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
};

export const getFeaturedPost = () => {
  return getAllPosts().filter((post) => post.isFeatued);
};
