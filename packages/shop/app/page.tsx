import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>shop</div>

      <Link href={"http://localhost:3000"}>sub main go</Link>
      <Link href={"http://about.localhost:3001"}>sub about go</Link>
      <Link href={"/auth"}>Auth go</Link>
    </main>
  );
}
