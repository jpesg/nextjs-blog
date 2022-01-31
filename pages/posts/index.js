import AllPosts from "../../components/posts/all-post";
import { getAllPosts } from "../../lib/posts-utils";

function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
}
export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
    revalidate: 100000, //regenerate every xxx seconds
  };
}
export default AllPostsPage;
