import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import styles from "src/app/page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Main page="index" />
      <Footer />
    </div>
  );
}
