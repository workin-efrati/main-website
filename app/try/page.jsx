import { getCurrentDateInHe, getCurrentParashaFromJSON, getUpcomingHoliday } from "@/helpers/formatDate";
import styles from "./style.module.scss";

export default function Try() {


  return (
    <main className={styles.main}>
      שאלות ותשובות
    <h2>{getCurrentParashaFromJSON()}</h2>
    <h2>{getCurrentDateInHe()}</h2>
    <h2>{getUpcomingHoliday()}</h2>
    </main>
  );
}
