import React from 'react'
import styles from './style.module.scss'
import Link from 'next/link';


const TagCategory = ({ name ,_id }) => {
    return (
        <div className={`${styles.tagCategoryContainer}`}>
      <Link className={`${styles.tagCategoryLink}`} href={`/${_id}`}>
        <div >
          <span className={`${styles.tagCategoryName}`}>{name}</span>
        </div>
      </Link>
    </div>

    );
};

export default TagCategory;