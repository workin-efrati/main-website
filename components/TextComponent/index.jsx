import React from 'react'
import styles from './styles.module.scss'

// as - > You can enter h1 h2 h3 h4 h5 and p - by trial and error
// fontStyle - > Default is HEBBO unless you want BONA then enter 'b'
// newClass - > You need to create your own class and send PROP example: 'styles.blabla'

const Text = ({ as: Component = 'p', newClass, fontStyle, textColor, children, ...props }) => {
  return (
    <Component
      className={`${styles[Component]} ${newClass} ${fontStyle === 'b' ? styles.noba : ''}
        ${textColor === 'blue' ? styles.blue : ''} 
        ${textColor === 'white' ? styles.white : ''} 
        ${textColor === 'gray' ? styles.gray : ''} 
        ${textColor === 'lightBlue' ? styles.lightBlue : ''}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;