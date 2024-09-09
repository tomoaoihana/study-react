import styles from "./page.module.css";
import { Footer } from "../components/footer"; // これを追加
import { Links } from "@/components/Links";
import Headline from "@/components/Headline";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Headline page="index" />
        <Links />
      </main>
      <Footer />
    </div>
  );
}
