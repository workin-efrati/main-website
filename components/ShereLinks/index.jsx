"use client"
import React from 'react';
import styles from './style.module.scss';
import { FaWhatsapp, FaRegStar } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';

export const ShareLinks = ({ message, url, name , _id }) => {

  const saveToLocalStorage = () => {
    const favorites = JSON.parse(localStorage.getItem(name)) || [];
    console.log(favorites)
    if (!favorites.includes(_id)) {
      favorites.push(_id);
      localStorage.setItem(name, JSON.stringify(favorites));
    }
  };
  

  const shareToWhatsApp = () => {
    const url = `https://wa.me/?text= ${message} ${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  
  const shareContent = () => {
    if (navigator.share) {
      navigator.share({
        title: message,
        text: message,
        url: url,
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
      console.log('Web Share API is not supported in your browser.');
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.icon}
        onClick={shareToWhatsApp}
      >
        <FaWhatsapp />
      </div >
      <div className={styles.icon}
        onClick={shareContent}
      >
        <FiLink />
      </div>
      <div className={styles.icon}
      onClick={saveToLocalStorage}
      >
        <FaRegStar />
      </div>
    </div>
  );
};
