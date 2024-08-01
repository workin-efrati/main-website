'use client'
import { useState } from 'react';
import { FaSearchMinus, FaSearchPlus } from 'react-icons/fa';
import styles from './style.module.scss';

export const FontSizeAdjuster = ({ children, className }) => {
    const [fontSize, setFontSize] = useState(16); 

    const increaseFontSize = () => setFontSize((prevSize) => (prevSize < 45 ? prevSize + 2 : prevSize)); 
    const decreaseFontSize = () =>setFontSize((prevSize) => (prevSize > 6 ? prevSize - 2 : prevSize));


    return (
        <div className={styles.container} style={{ '--font-size': `${fontSize}px` }}>
            <div className={`${styles.icon} ${styles.minus}`} onClick={decreaseFontSize} >
                <FaSearchMinus />
            </div>
            <div className={`${styles.icon} ${styles.plus}`} onClick={increaseFontSize} >
                <FaSearchPlus />
            </div>
            <div className={`${styles.textContainer} ${className}`}>
                {children}
            </div>
        </div>
    );
}
