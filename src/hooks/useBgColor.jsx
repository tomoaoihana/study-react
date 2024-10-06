import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";

export const useBgColor = () => {
  const router = useRouter();

  // console.log(router);

  //useMemoは値をキャッシュする
  //色の変更がある場合は再計算される
  // const bgColor = useMemo(() => {
  //   return router.pathname === "/" ? "lightblue" : "beige";
  // }, [router.pathname]);

  //switch文でも
  //switch文とは？
  //📝
  const bgColor = useMemo(() => {
    switch (router.pathname) {
      case "/": {
        return "lightblue";
      }
      case "/about": {
        return "beige";
      }
      default: {
        return "";
      }
    }
  }, [router.pathname]);

  useEffect(() => {
    //DOMに直接アクセスする場合はuseEffectを使う
    document.body.style.backgroundColor = bgColor; //マウント時に実行される
    //クリーンアップ関数
    return () => {
      document.body.style.backgroundColor = ""; //アンマウント時に実行される
    };

    //配列なので、幾つでも指定できる
  }, [bgColor]);
};
