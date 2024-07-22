import Tag from "@/components/Tag";
import styles from "./page.module.scss";
import QuestionNav from "@/components/QuestionNav";
import { FaWhatsapp } from "react-icons/fa";
export default function Home() {
  const data = {
    partion: "פנחס",
    specialDate: "יז בתמוז"
  }
  const homeNav = [
    { text: "שו”ת בהלכה", herf: "", },
    { text: "שו”ת אמונה", herf: "", },
    { text: "שו”ת זוגיות", herf: "", },
    { text: "שו”ת חינוך", herf: "", },
    { text: "פרשות שבוע", herf: "", },
    { text: "שו”ת בהלכה", herf: "", },

  ]

  return (
      <main className={styles.main} >
        <br className={styles.WWWWWWWWWWWWWWWWREMOVETHISWWWWWWWWWWWWWWWWWWW}/>
        <div className={`${styles.section}`}>

          <div className={styles.logoTextContainer}>
            <h1 id="section1">לַמְּדֵנִי חֻקֶּךָ</h1>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.input}></div>
          </div>
          <div className={styles.homeNavContainer}>
            {homeNav.map(nav => <a className={styles.nav} href={nav.herf}>{nav.text} </a>)}
          </div>
          <div className={styles.bgCover}></div>
          <a className={styles.goToWhatsApp} href="">הצטרף אלינו לקבוצת הוואצפ <FaWhatsapp/></a>
        </div>
        <div id='section2' className={`${styles.section2}`}>
          <div className={styles.section2Container}>
            <h2>שאלות פופולריות</h2>
            <QuestionNav/>
          </div>
          <div className={styles.section2Container}>
            <div className={styles.subContainer}>
              <h2>פרשת {data.partion}</h2>
            </div>
            <div className={styles.subContainer}>
              <h2>{data.specialDate}</h2>
            </div>
          </div>
        </div>
      </main>
  
  );
}
