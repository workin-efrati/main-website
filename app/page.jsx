import QuestionNav from "@/components/QuestionNav";
import { FaWhatsapp } from "react-icons/fa";
import EventNav from "@/components/EventNav";
import VideoSection from "@/components/VideoSection";
import DailyHalacha from "@/components/DailyHalacha";
import styles from "./page.module.scss"
import Link from "next/link";
import SearchFilter from "@/components/SearchFilter";
import { connect } from "@/server/connect";
import Image from "next/image";
import { getTagsWithNoParent } from "@/server/services/tag.service";

export default async function Home() {
  await connect()
  const tags = (await getTagsWithNoParent() || [])
  // TODO - add links
  // const homeNav = [
  //   { text: "שו”ת בהלכה", herf: "", },
  //   { text: "שו”ת אמונה", herf: "", },
  //   { text: "שו”ת זוגיות", herf: "", },
  //   { text: "שו”ת חינוך", herf: "", },
  //   { text: "פרשות שבוע", herf: "", },
  //   { text: "שו”ת בהלכה", herf: "", },
  // ]

  return (
    <main className={styles.main} >
      <section className={`${styles.section}`}>
        <Image src={'/images/backgrounds/main-background.png'} fill alt='hero' />
        <div className={styles.logoTextContainer}>
          <p>בְּלִבִּי צָפַנְתִּי אִמְרָתֶךָ לְמַעַן לֹא אֶחֱטָא לָךְ בָּרוּךְ אַתָּה ד'</p>
          <h1 id="section1">לַמְּדֵנִי חֻקֶּךָ</h1>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.input}><SearchFilter /></div>
        </div>
        {/* <div className={styles.homeNavContainer}>
          {homeNav.map((nav, i) => <Link key={`${nav.text} ${i}`} className={styles.nav} href={nav.herf}>{nav.text} </Link>)}
        </div> */}
        <div className={styles.bgCover}></div>
        <a className={styles.goToWhatsApp} href="">הצטרף אלינו לקבוצת הוואצפ <FaWhatsapp /></a>
      </section>

      <section className={styles.tags}>
          {tags.map(t => <Link key={t._id} href={`/category/${t._id}`}>
            <Image src={t?.topicImages?.[0] || '/images/boy.png'} alt={t.name} width={100} height={100} />
            <p> {t.name}</p>
          </Link>)}
      </section>

      <section id='section2' className={`${styles.section2}`}>
        <QuestionNav />
        <div className={styles.section2Container}>
          <EventNav />
          {/* <EventNav /> */}
        </div>
      </section>
      <VideoSection />
      <DailyHalacha />
    </main>

  );
}
