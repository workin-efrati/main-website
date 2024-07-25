"use client"
import React from 'react'
import styles from "../style.module.scss"
import Text from '@/components/TextComponent';
function toggleFullscreen() {
    let elem = document.querySelector("iframe");
  
    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch((err) => {
        alert(
          `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`,
        );
      });
    } else {
      document.exitFullscreen();
    }
  }


const ButtonFullScreen = () => {
  return (
    <button className={styles.button} onClick={toggleFullscreen}>מסך מלא</button>
  )
}

export default ButtonFullScreen