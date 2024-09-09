import styles from "../style/page.module.css";

export default function Headline(props) {
  console.log(props.title);

  return (
    <div>
      <h1 className={styles.heading}>{props.page} page</h1>
      <ol>
        <li>
          INDEX
          <code>app/{props.page}.js</code>.
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>
    </div>
  );
}
