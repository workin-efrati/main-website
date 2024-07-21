import React from 'react'
import styles from './styles.module.scss'



const Text = ({ as: Component = 'p', newClass, fontStyle, children, ...props }) => {
  return (
    <Component className={`${styles[Component]} ${newClass} ${fontStyle === 'b' ? styles.noba : ''} `} {...props}>
      {children}
    </Component>
  );
};

export default Text;