import { useCallback, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

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

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  return { count, isShow, handleClick, handleDisplay };
};