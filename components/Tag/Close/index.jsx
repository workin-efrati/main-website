'use client'
import React from 'react'
import styles from '../style.module.scss'
import { IoMdClose } from "react-icons/io";

const Close = (action) => {
  return (
    <div><button className={styles.button} onClick={action}>
    <IoMdClose />
  </button></div>
  )
}

export default Close