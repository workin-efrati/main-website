import { FaHeart } from "react-icons/fa";
import { TbJewishStarFilled } from "react-icons/tb";
import { PiBooksFill } from "react-icons/pi";
export const navData = {
    qaNav: [
        { text: `שו"ת בטהרה`, icon: FaHeart, href: "" },
        { text: `שו"ת באמונה`, icon: TbJewishStarFilled, href: "" },
        { text: `שו"ת בהלכה`, icon: PiBooksFill, href: "" }
    ],
    torahNav: [
        { text: "בראשית", href: "" },
        { text: "שמות", href: "" },
        { text: "ויקרא", href: "" },
        { text: "במדבר", href: "" },
        { text: "דברים", href: "" }
    ],
    pageNav: [
        { text: "ראשי", href: "/" },
        { text: "תרומות", href: "" },
        { text: "צור קשר", href: "" },
        { text: "אודות", href: "/question/ask" },
    ]
}