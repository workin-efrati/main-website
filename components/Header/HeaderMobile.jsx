"use client"
import { useState } from 'react'
import styles from './styles.module.scss'
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { SiWhatsapp } from "react-icons/si";
import { GrLanguage } from "react-icons/gr";
import { FaChildren } from "react-icons/fa6";
import { FaTorah } from "react-icons/fa";
import logo from "./logo.svg"
import Image from 'next/image';
import { navData } from './mobileNavData';
export default function HeaderMobile() {
    const [menu, setMenu] = useState(false)


    return (
        <>
            <header id='header' className={styles.headerMobile}>
                <div className={styles.imgAndTitleContainer}>
                    <Image width={100} height={100} src={logo} alt="logo" />
                    <h1>לַמְּדֵנִי חֻקֶּךָ</h1>
                </div>
                <button className={styles.openMenu} onClick={() => { setMenu(true) }}><MdMenu /></button>
                <div className={menu ? styles.menuCoverOpen : styles.menuCoverClose}>
                    <button className={styles.btnCloseMenu} onClick={() => { setMenu(false) }}><IoClose /></button>
                    <div className={styles.inputContainer}></div>
                    <div className={styles.navsContainer}>
                        {navData.qaNav.map((nav, index) => (
                            <a key={"a" + index} href={nav.href}>
                                <p className={styles.bigIcon}> {nav.icon()}</p>
                                <p className={styles.textOfIcon}> {nav.text}</p> </a>
                        ))}
                    </div>
                    <div className={styles.navsContainer}>
                        <div className={styles.torahContainer}>
                            <p className={styles.iconTorah}><FaChildren /></p>
                            <h4>פרשת לילדים</h4>
                            {navData.torahNav.map((p, index) => (
                                <a key={"children" + index} href={p.href}>
                                    <p>{p.text}</p>
                                </a>
                            ))}
                        </div>
                        <div className={styles.torahContainer}>
                            <p className={styles.iconTorah}><FaTorah /></p>
                            <h4>פרשת השבוע</h4>
                            {navData.torahNav.map((p, index) => (
                                <a key={"adult" + index} href={p.href}>
                                    <p>{p.text}</p>
                                </a>
                            ))}
                        </div>

                    </div>
                    <div className={styles.mainNavsContainer}>
                        {navData.pageNav.map((p, index) => (
                            <a key={"mainNavs" + index} href={p.href}>
                                <p>{p.text}</p>
                            </a>
                        ))}
                    </div>
                    <button className={styles.whatsappBtn}><SiWhatsapp /></button>
                    <button className={styles.changeLangBtn}><GrLanguage /></button>
                </div>
            </header>
            <br className={styles.WWWWWWWWWWWWWWWWREMOVETHISWWWWWWWWWWWWWWWWWWW}/>
        </>
    )
}
