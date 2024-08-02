import React from 'react';
import styles from './loader.module.scss';

const Loading = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.textLine}></div>
      </div>
      <main className={styles.grid}>
        <div className={styles.container}>
          <div className={styles.question}>
            <div className={styles.questionHeader}>
              <div className={styles.textLine}></div>
            </div>
            <div className={styles.textContainer}>
              <div className={styles.textLine}></div>
              <div className={styles.textLine}></div>
              <div className={styles.textLine}></div>
            </div>
          </div>
          <div className={styles.tags}>
            <div className={styles.tag}></div>
            <div className={styles.tag}></div>
            <div className={styles.tag}></div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.answer}>
            <div className={styles.answerHeader}>
              <div className={styles.textLine}></div>
            </div>
            <div className={styles.textContainer}>
              <div className={styles.textLine}></div>
              <div className={styles.textLine}></div>
              <div className={styles.textLine}></div>
            </div>
          </div>
          <div className={styles.links}>
            <div className={styles.textLine}></div>
            <div className={styles.textLine}></div>
          </div>
        </div>
        <aside>
          <div className={styles.textLine}></div>
          <div className={styles.textLine}></div>
          <div className={styles.textLine}></div>
        </aside>
      </main>
    </>
  );
};

export default Loading;
