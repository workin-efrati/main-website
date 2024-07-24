"use client";
import React from 'react'
import styles from './style.module.scss'
import Link from 'next/link';
import { ButtonClick } from '../ButtonClick';



export const Button = ({ href, children, ...props }) => {
    if (!href) return <ButtonClick  {...props}  >
        {children}
    </ButtonClick>
    return (
        <Link
            href={`${href}`}
            className={`${styles.gradientBorder}`}
        >
            <span>{children}</span>
        </Link>
    );
};
