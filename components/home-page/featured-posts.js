import PostGrid from "../posts/posts-grid";
import classes from "./featured-post.module.css";
function FeaturedPost(props) {
  return (
    <section className={classes.lates}>
      <h2>Featured Post</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
}
export default FeaturedPost;
