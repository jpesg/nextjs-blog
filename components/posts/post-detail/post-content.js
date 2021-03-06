import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function PostContent(props) {
  const { image, slug, title, content } = props.post;
  const imagePath = `/images/posts/${slug}/${image}`;

  const customRenderes = {
    //react markdown renders images as paragrahs
    /* img(image) {
      return (
        <Image
          src={`/images/posts/${post.src}/${image.url}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },*/
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].type === "img") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code() {
      const { className, children } = code;
      const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown renderers={customRenderes}>{content}</ReactMarkdown>
    </article>
  );
}
export default PostContent;
