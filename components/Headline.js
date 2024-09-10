import styles from "../style/page.module.css";

export function Headline(props) {
  //なぜプロップス？？？
  //プロパティの略
  //プロパティとは、コンポーネントに渡す値のこと
  //プロパティを使うことで、コンポーネントを再利用できる
  //プロパティは、コンポーネントの引数として渡す
  //プロパティは、コンポーネント内でpropsという名前で参照できる

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
