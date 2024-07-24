import React from 'react'
import styles from './style.module.scss'
import Link from 'next/link';


const TagCategory = ({ name }) => {
    return (
        <div className="tagCategoryContainer">
            <Link className="tagCategoryLink" href={`/category/${name.toLowerCase()}`}>
                <span className="tagCategoryName">{name}</span>
            </Link>
        </div>

    );
};

export default TagCategory;