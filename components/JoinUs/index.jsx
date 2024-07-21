import React from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import { FaWhatsapp } from "react-icons/fa";

export default function JoinUs() {
  return (
    <Link href={"/JoinUs"} className={styles.container}>
      <FaWhatsapp className={styles.logo} />
      הצטרף אלינו לקבוצות הווצאפ
    </Link>
  );
}
