import Tag from "@/components/Tag";
import styles from "./page.module.scss";
import Video from "@/components/Video";

export default function Home() {
  return (
    <main className={styles.main}>
      שאלות ותשובות
      <Video/> 
    </main>
  );
}
