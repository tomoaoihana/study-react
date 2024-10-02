import "src/app/globals.css";

//hooks
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgColor } from "src/hooks/useBgColor";

function MyApp({ Component, pageProps }) {
  const counter = useCounter(); //カスタムフックを呼び出す
  const inputArray = useInputArray(); //カスタムフックを呼び出す
  useBgColor(); //カスタムフックを呼び出す

  return (
    <>
      <Component {...pageProps} {...counter} {...inputArray} />
    </>
  );
}

export default MyApp;
