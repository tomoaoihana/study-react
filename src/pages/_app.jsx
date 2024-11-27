import "src/app/globals.css";
import { Layout } from "src/components/Layout";
import { SWRConfig } from "swr";

const fetcher = async (...args) => {
  const res = await fetch(...args);

  // console.log("static pageの処理が実行されました");

  if (!res.ok) {
    throw new Error("データにエラーが発生しました");
  }

  const json = await res.json();

  return json;
};

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  );
};

export default MyApp;
