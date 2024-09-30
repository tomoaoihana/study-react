const { useState, useCallback } = require("react");

//カスタムフック
export const useInputArray = () => {
  //分割代入で変数を定義する
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以上は入力できません");
      return;
    }
    setText(e.target.value.trim());
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

  return { text, array, handleChange, handleAdd };
};
