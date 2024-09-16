import styles from "../style/page.module.css";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";

export function Main(props) {
  return (
    <main className={styles.main}>
      <Headline page={props.page}>
        <code>app/{props.page}.js</code>
      </Headline>

      <Links />
    </main>
  );
}
