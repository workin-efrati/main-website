import SearchFilter from "@/components/SearchFilter";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      שאלות ותשובות
      <SearchFilter />
    </main>
  );
}
