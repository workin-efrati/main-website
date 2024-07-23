import { Heebo, Bona_Nova } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header";
const heebo = Heebo(
  {
    subsets: ["hebrew", "latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: '--font-heebo'
  }
);
const bonaNova = Bona_Nova(
  {
    subsets: ["hebrew", "latin"],
    weight: ["400", "700"],
    variable: '--font-bona'
  });

export const metadata = {
  title: "למדני חוקך",
  description: `אתר "למדני חוקך" הוא שו"ת מקוון המציע תשובות לשאלות הלכתיות מגוונות.
האתר מנוהל על ידי הרב אפרתי, והוא פתוח לכל מי שמחפש הבהרה
בנושאים הלכתיים.`,
  icons: {
    icon: '/metaDataIcon.svg',
  },

};

export default function RootLayout({ children }) {

  return (
    <html lang="he">
      <body  className={`${heebo.variable} ${bonaNova.variable}`}>
        <Header />
        {children}
      
      </body>
    </html>
  );
}
