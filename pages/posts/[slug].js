import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-utils";

function PostDetailsPage(props) {
  return <PostContent post={props.post} />;
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const post = getPostData(slug);
  return {
    props: {
      post,
    },
    revalidate: 600, //regenerate in case the markdown file is updated
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
export default PostDetailsPage;
/*
1) Hero => Present ourselves
2) featured post
*/
