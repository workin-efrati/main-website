{/*
  Examples of using the Logo component:
  <Logo logoType="derechEmuna" firstLine={"הנבל ,14 אפרת | טל: 0504723445 "}/>
<Logo logoType="onlyText" firstLine='שו"ת הרב אפרתי'/>
<Logo logoType="bookLogo" />
<Logo logoType="bookLogo"  firstLine='שו"ת הרב אפרתי'  secondLine={true}/>
<Logo logoType="bookLogo" firstLine="שו'ת הרב אפרתי"  secondLine={true} thirdLine={true}/> 

Component Props
logoType: Defines the type of logo to display. This can be "rightEmuna", "onlyText", or "bookLogo".
imgHeight: Defines the height of the logo image.
firstLine: First line of text (default: 'לַמְּדֵנִי חֻקֶּיךָ' ,to appear it is passed as props true).
secondLine: Second line of text.
thirdLine: Third line of text.
*/}


import React from "react";
import Image from 'next/image';
import styles from "./logo.module.scss";
import book from "../../public/book.svg";
import derechEmuna from "../../public/derechEmuna.svg";

export default function Logo(props) {
  const {
    logoType,
    imgHeight,
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
