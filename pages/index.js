import Hero from "../components/home-page/hero";
import FeaturedPost from "../components/home-page/featured-posts";
import { getFeaturedPost } from "../lib/posts-utils";

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPost = getFeaturedPost();
  return {
    props: {
      posts: featuredPost,
    },
    revalidate: 100000, //regenerate every xxx seconds
  };
}

export default HomePage;
