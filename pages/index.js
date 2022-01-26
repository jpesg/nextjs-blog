import Hero from "../components/home-page/hero";
import FeaturedPost from "../components/home-page/featured-posts";
const dummyPosts = [
  {
    slug: "1",
    title: "title",
    image: "image",
    date: new Date(),
    excerpt: "EXCERPT",
  },
];
function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPost posts={dummyPosts} />
    </Fragment>
  );
}
export default HomePage;
