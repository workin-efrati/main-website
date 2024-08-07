"use client"

import useFetchReq from "@/hooks/useFetchReq";
import Image from 'next/image';
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import styles from './style.module.scss';

export default function VideoSection() {
  const [sliderPosition, setSliderPosition] = useState(0)
  const [cantMoveRight, setCantMoveRight] = useState(false)
  // TODO - handle loading and error
  const { data = [], error, loading } = useFetchReq({
    url: 'video/random', isLocalServer: true,
    optionsNext: { next: { revalidate: 60 * 60 } }
  })


  useEffect(() => {
    let isLast = (window.innerWidth > 568 && (-1 * data.length) >= sliderPosition - 3) || (window.innerWidth < 568 && (-1 * data.length) >= sliderPosition - 1)
    setCantMoveRight(isLast)
  }, [sliderPosition, loading, data.length])

  // const sliderRatio = typeof(window !== "undefined") ? (window.innerWidth > 568 ? 110 : 103) : 110
  let cantMoveLeft = sliderPosition == 0
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
          {data.map((v, i) => (
            <Link key={`${v.href} ${i}`} href={`/videos/${v._id}`} className={styles.video} style={style}>
              <Image width={300} height={200} src={v.img} alt={v.title || 'img'} />
              <p>{v.title}</p>
            </Link>
          ))}
        </div>
        <button disabled={cantMoveLeft} onClick={() => { clickSliderHandler(1) }}><MdArrowBackIosNew /></button>
      </div>
      <div className={styles.toAllVideo}><Link href="">לכל השיעורים</Link> </div>
      <Image width={100} alt="bg" height={100} src={'/images/backgrounds/torahBg.png'} className={styles.bgImg} />
    </div>
  )
}
