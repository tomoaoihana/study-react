import { useEffect } from "react";

export const useBgLightBlue = () => {
  useEffect(() => {
    //DOMに直接アクセスする場合はuseEffectを使う
    document.body.style.backgroundColor = "lightblue"; //マウント時に実行される
    //クリーンアップ関数
    return () => {
      document.body.style.backgroundColor = ""; //アンマウント時に実行される
    };

    //配列なので、幾つでも指定できる
  }, []);
};
