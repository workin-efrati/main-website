import { Heebo } from "next/font/google";
import "./globals.scss";

const heebo = Heebo({ subsets: ["hebrew", "latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

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
      <body className={heebo.className}>{children}</body>
    </html>
  );
}
