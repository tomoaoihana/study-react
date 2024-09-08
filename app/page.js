import Image from "next/image";
import styles from "./page.module.css";
import { Footer } from "../components/footer"; // これを追加
import { Links } from "@/components/Links";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            INDEX
            <code>app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
        <Links />
      </main>
      <Footer />
    </div>
  );
}
