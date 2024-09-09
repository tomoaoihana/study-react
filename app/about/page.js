import Image from "next/image";
import styles from "../page.module.css";
import { Footer } from "@/components/footer";
import { Links } from "@/components/Links";
import Headline from "@/components/Headline";

export const metadata = {
  title: "ABOUT 講座",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Headline page="about" />
        <Links />
      </main>
      <Footer />
    </div>
  );
}
