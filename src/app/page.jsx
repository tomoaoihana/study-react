"use client";

import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import styles from "src/app/page.module.css";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  //分割代入で変数を定義する
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([]);

  const handleClick = useCallback(() => {
    //この書き方は非推奨
    //ここだと直接fooの値を変更している
    // setFoo(foo + 1);

    //この書き方が推奨されている
    //fooじゃなくてもprevという変数名で前回の値を取得できる
    //なぜ？
    //setFooは非同期で実行されるため、fooの値が変わっている可能性がある
    //そのため、前回の値を取得するためにはprevという変数を使う
    if (count < 10) {
      //ここはuseStateの値を変更している
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);

  useEffect(() => {
    //DOMに直接アクセスする場合はuseEffectを使う
    document.body.style.backgroundColor = "lightblue"; //マウント時に実行される
    //クリーンアップ関数
    return () => {
      document.body.style.backgroundColor = ""; //アンマウント時に実行される
    };

    //配列なので、幾つでも指定できる
  }, [count]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以上は入力できません");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      //スプレッド構文で配列を展開して新しい配列を作成する
      //なぜスプレッド構文を使うのか？
      //・配列・オブジェクトの破壊的メソッドは使わないために
      //（NG）push, splice, unshift, pop, shift, reverse, sort
      //⭐️勉強メモへ
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素は追加できません");
        return prevArray;
      }
      // const newArray = [...prevArray, text];
      // console.log(newArray === prevArray); //false
      return [...prevArray, text];
    });
  }, [text]);

  return (
    <div className={styles.page}>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button href="/about" onClick={handleClick} className={styles.btn}>
        Click me
      </button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <button onClick={handleAdd}>追加する</button>
      <Main page="index" />
      <Footer />
    </div>
  );
}
