"use client"
import bgImage from "../../public/images/backgrounds/torahBg.png"
import styles from './style.module.scss'
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { data } from './data';
import Image from 'next/image';
import { useState } from "react";
import Link from "next/link";
export default function VideoSection() {
  const [sliderPosition, setSliderPosition] = useState(0)
  const sliderRatio = window.innerWidth > 568 ? 110 : 103
  const cantMoveRight = (window.innerWidth > 568 && (-1 * data().length) >= sliderPosition - 3) || (window.innerWidth < 568 && (-1 * data().length) >= sliderPosition - 1)
  const cantMoveLeft = sliderPosition == 0
  function clickSliderHandler(num) {
    if (cantMoveRight && num == -1) return
    if (num == 1 && cantMoveLeft) return
    setSliderPosition(sliderPosition + num)
  }
  const style = {
    transform: `translateX(calc(${sliderPosition} * var(--imgWidth)))`
  }
  return (
    <div className={styles.VideoSection}>
      <h2>שיעורי וידיאו</h2>
      <div className={styles.videoContainer}>
        <button disabled={cantMoveRight} onClick={() => { clickSliderHandler(-1) }}><MdArrowForwardIos /></button>
        <div className={styles.videoSliderContainer} >
          {data().map(v => (
            <Link href={v.href} className={styles.video} style={style}>
              <Image width={100} height={100} src={v.img} />
              <p>{v.title}</p>
            </Link>
          ))}
        </div>
        <button disabled={cantMoveLeft} onClick={() => { clickSliderHandler(1) }}><MdArrowBackIosNew /></button>
      </div>
      <div className={styles.toAllVideo}><Link href="">לכל השיעורים</Link> </div>
      <Image width={100} height={100} src={bgImage} className={styles.bgImg} />
    </div>
  )
}
