import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>main</div>

      <Link href={"http://shop.localhost:3002"}>sub shop go</Link>
      <Link href={"http://about.localhost:3001"}>sub about go</Link>
      <Link href={"/auth"}>Auth go</Link>
    </main>
  );
}
