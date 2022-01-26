import classes from "./hero.module.css";
import Image from "next/image";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/max.png" alt="Me" width={300} height={300} />
      </div>
      <div>Hi, I'm Javier</div>
      <p>I blog about web development</p>
    </section>
  );
}
export default Hero;
