import classes from "./post-content.module.css";
import PostHeader from "./post-header";
function PostContent(props) {
  const { image, slug, title, content } = props.post;
  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
    </article>
  );
}
export default PostContent;
