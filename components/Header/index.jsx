import styles from './styles.module.scss'
import HeaderMobile from './HeaderMobile';

export default function Header() {
    const navs = [  
        { text: "שאל את הרב", herf: "", },
        { text: "שאלות ותשובות", herf: "", },
        { text: "דרשות ומאמרים", herf: "", },
        { text: "שיעורי וידאו", herf: "", },
        { text: "ילדים ונוער", herf: "", },
    ]
    return (
        <>
            <HeaderMobile />
            <header className={styles.header}>
                <h1>לַמְּדֵנִי חֻקֶּךָ</h1>
                <nav className={styles.navInHeader}>
                    {navs.map((link, i) => (<a key={i + 1 + "a"} href={link.href}>{link.text}</a>))}
                </nav>

            </header>
        </>
    )
}
