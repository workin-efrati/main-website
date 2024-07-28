{/*
  Examples of using the Logo component:
  <Logo logoType="derechEmuna" firstLine={"הנבל ,14 אפרת | טל: 0504723445 "}/>
<Logo logoType="onlyText" firstLine='שו"ת הרב אפרתי'/>
<Logo logoType="bookLogo" />
<Logo logoType="bookLogo"  firstLine='שו"ת הרב אפרתי' secondLine={true}/>
<Logo logoType="bookLogo" firstLine='שו"ת הרב אפרתי' secondLine={true} thirdLine={true}/> 

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

  const direction = <div className={styles.thirdLine}>הנבל ,14 אפרת | טל: <span className={styles.tel}>0504723445</span></div>;
  const halachaEmunaTahara = "הלכה . אמונה . טהרה";
  const shut = "שו”ת הרב אפרתי";
  const lamdeniJukeja = "לַמְּדֵנִי חֻקֶּיךָ";

  let content;

  const renderLine = (line, defaultText) => {
    return line === true ? defaultText : line;
  };

  switch (logoType) {
    case "derechEmuna":
      content = (
        <div className={styles.derechEmunaContainer}>
          <div className={styles.logo}>
            <Image src={derechEmuna} alt="book-logo" height={imgHeight} {...rest} />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.firstLine}>{renderLine(firstLine, lamdeniJukeja)}</div>
            <div className={styles.secondLine}>{renderLine(secondLine, halachaEmunaTahara)}</div>
            <div className={styles.thirdLine}>{renderLine(thirdLine,direction)}</div>
          </div>
        </div>
      );
      break;
    case "onlyText":
      content = (
        <div className={styles.onlyTextContainer}>
          <div className={styles.textContainer}>
            <div className={styles.firstLine}>{renderLine(firstLine, lamdeniJukeja)}</div>
            <div className={styles.secondLine}>{renderLine(secondLine, shut)}</div>
            <div className={styles.thirdLine}>{renderLine(thirdLine, shut)}</div>
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
            <div className={styles.firstLine}>{renderLine(firstLine, lamdeniJukeja)}</div>
            <div className={styles.secondLine}>{renderLine(secondLine, halachaEmunaTahara)}</div>
            <div className={styles.thirdLine}>{renderLine(thirdLine,direction)}</div>
          </div>
        </div>
      );
      break;
    default:
      content = null;
  }

  return <>{content}</>;
}
