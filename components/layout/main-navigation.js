import Link from "next/link";
import Logo from "./logo";
import classes from "./main-navigation.module.css";
function MainNaivation(props) {
  return (
    <header className={classes.header}>
      <Link href={"/"}>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/post">Post</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNaivation;
