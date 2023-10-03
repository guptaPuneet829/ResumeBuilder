import React from 'react'
import styles from "./InputManager.module.css"


const InputManager = ({label, ...props}) => {
  return (
    <div className={styles.container}>
        {label && <label>{label}</label>}
        <input type="text" {...props}/>
    </div>
  );
}

export default InputManager
