"use client"
import { useState } from 'react'
import styles from './styles.module.scss'
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { SiWhatsapp } from "react-icons/si";
import { GrLanguage } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";
import { TbJewishStarFilled } from "react-icons/tb";
import { PiBooksFill } from "react-icons/pi";
import { FaChildren } from "react-icons/fa6";
import { FaTorah } from "react-icons/fa";
export default function HeaderMobile() {
    const [menu, setMenu] = useState(false)
    const navs = [
        { text: `שו"ת בטהרה`, icon: FaHeart, href: "" },
        { text: `שו"ת באמונה`, icon: TbJewishStarFilled, href: "" },
        { text: `שו"ת בהלכה`, icon: PiBooksFill, href: "" }
    ];
    const torah = [
        { text: "בראשית", href: "" },
        { text: "שמות", href: "" },
        { text: "ויקרא", href: "" },
        { text: "במדבר", href: "" },
        { text: "דברים", href: "" }
    ];
    const mainNavs = [
        { text: "ראשי", href: "" },
        { text: "תרומות", href: "" },
        { text: "צור קשר", href: "" },
        { text: "אודות", href: "" },
    ];
    const toggleMenu = (state) => {
        setMenu(state)
    }
    return (
        <header className={styles.headerMobile}>
            <div className={styles.imgAndTitleContainer}>
                <img src={"ad"} alt="logo" />
                <h1>למדני חוקך</h1>
            </div>
            <button className={styles.openMenu} onClick={() => { setMenu(true) }}><MdMenu /></button>
            <div className={menu ? styles.menuCoverOpen : styles.menuCoverClose}>
                <button className={styles.btnCloseMenu} onClick={() => { setMenu(false) }}><IoClose /></button>
                <div className={styles.inputContainer}></div>
                <div className={styles.navsContainer}>
                    {navs.map((nav, index) => (
                        <a key={"a" + index} href={nav.href}>
                            <p className={styles.bigIcon}> {nav.icon()}</p>
                            <p className={styles.textOfIcon}> {nav.text}</p> </a>
                    ))}
                </div>
                <div className={styles.navsContainer}>
                    <div className={styles.torahContainer}>
                        <p className={styles.iconTorah}><FaChildren /></p>
                        <h4>פרשת לילדים</h4>
                        {torah.map((p, index) => (
                            <a key={"children" + index} href={p.href}>
                                <p>{p.text}</p>
                            </a>
                       ))}
                    </div>
                    <div className={styles.torahContainer}>
                        <p className={styles.iconTorah}><FaTorah /></p>
                        <h4>פרשת השבוע</h4>
                        {torah.map((p, index) => (
                            <a key={"adult" + index} href={p.href}>
                                <p>{p.text}</p>
                            </a>
                       ))}
                    </div>

                </div>
                <button className={styles.whatsappBtn}><SiWhatsapp /></button>
                <button className={styles.changeLangBtn}><GrLanguage /></button>
            </div>
        </header>
    )
}
