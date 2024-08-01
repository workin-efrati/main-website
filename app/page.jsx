import QuestionNav from "@/components/QuestionNav";
import { FaWhatsapp } from "react-icons/fa";
import EventNav from "@/components/EventNav";
import VideoSection from "@/components/VideoSection";
import DailyHalacha from "@/components/DailyHalacha";
import styles from "./page.module.scss"
import Link from "next/link";
import SearchFilter from "@/components/SearchFilter";
import { connect } from "@/server/connect";

export default async function Home() {
  await connect()
  // TODO - add links
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
      <div className={`${styles.section}`}>
        <div className={styles.logoTextContainer}>
          <h1 id="section1">לַמְּדֵנִי חֻקֶּךָ</h1>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.input}><SearchFilter/></div>
        </div>
        <div className={styles.homeNavContainer}>
          {homeNav.map((nav, i) => <Link key={`${nav.text} ${i}`} className={styles.nav} href={nav.herf}>{nav.text} </Link>)}
        </div>
        <div className={styles.bgCover}></div>
        <a className={styles.goToWhatsApp} href="">הצטרף אלינו לקבוצת הוואצפ <FaWhatsapp /></a>
      </div>
      <div id='section2' className={`${styles.section2}`}>
          <QuestionNav />
        <div className={styles.section2Container}>
          
            <EventNav />
            {/* <EventNav /> */}
        </div>
      </div>
      <VideoSection />
      <DailyHalacha/>
    </main>

  );
}
