import styles from "./page.module.css";
import { Footer } from "../components/footer"; // これを追加
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Main page="index" />
      <Footer />
    </div>
  );
}
