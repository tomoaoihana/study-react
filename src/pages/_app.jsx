import "src/app/globals.css";

//hooks
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgLightBlue } from "src/hooks/useBgLightBlue";

function MyApp({ Component, pageProps }) {
  const counter = useCounter(); //カスタムフックを呼び出す
  const inputArray = useInputArray(); //カスタムフックを呼び出す
  useBgLightBlue(); //カスタムフックを呼び出す

  return (
    <>
      <Component {...pageProps} {...counter} {...inputArray} />
    </>
  );
}

export default MyApp;
