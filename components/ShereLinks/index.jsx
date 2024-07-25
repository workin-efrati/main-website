"use client"
import styles from './style.module.scss';
import { FaWhatsapp, FaRegStar } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';

export const ShareLinks = ({ message = 'מצאתי חידוש מגניב!!!!', url, name, _id }) => {

  let currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

  const saveToLocalStorage = () => {
    const favorites = JSON.parse(localStorage.getItem(name)) || [];
    if (!favorites.includes(_id)) {
      favorites.push(_id);
      localStorage.setItem(name, JSON.stringify(favorites));
    }
  };

  const shareToWhatsApp = () => {
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(message)} ${encodeURIComponent(currentUrl)}`;
    window.open(shareUrl, '_blank');
  };

  const shareContent = () => {
    if (navigator.share) {
      navigator.share({
        title: message,
        text: message,
        url: currentUrl,
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
