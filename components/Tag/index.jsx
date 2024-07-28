import React from 'react'
import styles from './style.module.scss'
import Link from 'next/link'
import Close from './Close'
import Text from '../TextComponent'



const Tag = ({ name, action, path }) => {
  if (action)
    return (
      <div className={`${styles.tag} ${styles.addTag} `}>
        {name}
        <Close action={action}/>
      </div>
    )
  else
    return (<Link className={`${styles.tag} ${styles.link}`} href={path}>
      <Text fontStyle='b' textColor="blue" >{name}</Text>
    </Link>)
}

export default Tag