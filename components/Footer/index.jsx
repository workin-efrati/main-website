import React from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import { abuot, questions, WeeklyPortion } from "./text.js";
import JoinUs from "../JoinUs";

export default function Footer() {
  const RenderList = ({ items, title }) => (
    <div className={styles.renderList}>
      <h3 className={styles.title}>{title}</h3>
      <ul>
        {items?.map((item, index) => (
          <li key={index}>
            <Link className={styles.link} href={`${item}/${title}`}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer>
      <nav className={styles.container}>
        <div className={styles.logo}>
          <div>logo</div>
          <JoinUs />
        </div>
        <div className={styles.containerList}>
          <RenderList items={abuot} title={"אודות"} />
          <RenderList items={questions} title={"שאלות"} />
          <RenderList items={WeeklyPortion} title={"פרשת השבוע"} />
        </div>
      </nav>
      <p className={styles.p}>
        2024 תשפ"ד © כל הזכויות שמורות לסקיפ - בית תוכנה חכם
        <br />
        עיצוב ופיתוח : Skip ltd
      </p>
    </footer>
  );
}
