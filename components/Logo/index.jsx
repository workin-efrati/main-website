//revisar
//agregar navlink a el logo 
//agregar aqui props para segun la entrada dar una animacion distinta en el logo
//revisar si compatibilidad con todo los logos de el figma
//crear un repositorio mio de lo que estoy haciendo

import React from "react";
import Image from 'next/image';
import styles from "./logo.module.scss";
import book from "../../public/book.svg";
import derechEmuna from "../../public/derechEmuna.svg";

export default function Logo(props) {
  const {
    logoType,
    imgHeight = 60,
    firstLine = 'לַמְּדֵנִי חֻקֶּיךָ',
    secondLine,
    thirdLine,
    ...rest
  } = props;

  let content;

  switch (logoType) {
    case "derechEmuna":
      content = (
        <div className={styles.derechEmunaContainer}>
          <div className={styles.logo}>
            <Image src={derechEmuna} alt="book-logo" height={imgHeight} {...rest} />
          </div>
          <div className={styles.textContainer}>
            {firstLine && firstLine === true ? <div className={styles.firstLine}>
              לַמְּדֵנִי חֻקֶּיךָ</div> : <div className={styles.firstLine}>{firstLine}</div>}
            {secondLine && secondLine === true ? <div className={styles.secondLine}>הלכה . אמונה . טהרה</div> : <div className={styles.secondLine}>{secondLine}</div>}

            {thirdLine && thirdLine === true ? <div className={styles.thirdLine}>הנבל ,14 אפרת | טל: 0504723445</div> : <div className={styles.thirdLine}>{thirdLine}</div>}


          </div>
        </div>
      );
      break;
    case "onlyText":
      content = (
        <div className={styles.onlyTextContainer}>
          <div className={styles.textContainer}>
            {firstLine && firstLine === true ? <div className={styles.firstLine}>לַמְּדֵנִי חֻקֶּיךָ</div> : <div className={styles.firstLine}>{firstLine}</div>}
            {secondLine === true ? <div className={styles.secondLine}>שו”ת הרב אפרתי</div> : <div className={styles.secondLine}>{secondLine}</div>}
            {thirdLine === true ? <div className={styles.thirdLine}>שו”ת הרב אפרתי</div> : <div className={styles.thirdLine}>{thirdLine}</div>}
          </div>
        </div>
      );
      break;
    case "bookLogo":
      content = (
        <div className={styles.bookLogoContainer}>
          <div className={styles.logo}>
            <Image src={book} alt="book-logo" height={imgHeight} {...rest} />
          </div>
          <div className={styles.textContainer}>
            <div>
              {firstLine === true ? <div className={styles.firstLine}>לַמְּדֵנִי חֻקֶּיךָ</div> : <div className={styles.firstLine}>{firstLine}</div>}
              {secondLine == true ? <div className={styles.secondLine}>הלכה . אמונה . טהרה</div> : <div className={styles.secondLine}>{secondLine}</div>}
              {thirdLine === true ? <div className={styles.thirdLine}>הנבל ,14 אפרת | טל: 0504723445
              </div> : <div className={styles.thirdLine}>{thirdLine}</div>}
            </div>
          </div>
        </div>
      );
      break;
    default:
      content = null;
  }

  return (
    <>
      {content}
    </>
  );
}
