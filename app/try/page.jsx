import SearchFilter from "@/components/SearchFilter";
import styles from "./style.module.scss";

export default function Try() {
  return (
    <main className={styles.main}>
      שאלות ותשובות
      <SearchFilter />

    </main>
  );
}
