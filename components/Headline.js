import styles from "../style/page.module.css";

export function Headline(props) {
  //なぜプロップス？？？
  //プロパティの略
  //プロパティとは、コンポーネントに渡す値のこと
  //プロパティを使うことで、コンポーネントを再利用できる
  //プロパティは、コンポーネントの引数として渡す
  //プロパティは、コンポーネント内でpropsという名前で参照できる
  return (
    <div>
      <h1 className={styles.heading}>{props.page} page</h1>

      <ol>
        <li>INDEX {props.children}</li>
        <li>Save and see your changes instantly.</li>
      </ol>

      <button onClick={props.onClick}>ぼたん</button>
    </div>
  );
}
