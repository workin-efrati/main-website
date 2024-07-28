import React from 'react'
import styles from './style.module.scss'
import Link from 'next/link';


const TagCategory = ({ name, _id }) => {
  
  return (
      <Link className={`${styles.tagCategoryLink}`} href={`/category/${_id}`}>
          {name}
      </Link>
  );
};

export default TagCategory;