import "src/app/globals.css";
import { Layout } from "src/components/Layout";

//hooks

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
