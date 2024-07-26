import styles from './styles.module.scss'
import HeaderMobile from './HeaderMobile';
import Link from 'next/link';

export default function Header() {
    const navs = [  
        { text: "שאל את הרב", href: "", },
        { text: "שאלות ותשובות", href: "", },
        { text: "דרשות ומאמרים", href: "", },
        { text: "שיעורי וידאו", href: "", },
        { text: "ילדים ונוער", href: "", },
    ]
    return (
        <>
            <HeaderMobile />
            <header className={styles.header}>
                <h1>לַמְּדֵנִי חֻקֶּךָ</h1>
                <nav className={styles.navInHeader}>
                    {navs.map((link, i) => (<Link key={i + 1 + "a"} href={link.href}>{link.text}</Link>))}
                </nav>
            </header>
            <div className={styles.placeholder}/>

        </>
    )
}
