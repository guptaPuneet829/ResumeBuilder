import React from 'react'
import styles from "./Header.module.css"
import resume from "../../assets/resume.svg"
const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <p className={styles.heading}>
                If <span>Opportunity</span> doesn't knock, build a door.
            </p>
            <p className={styles.heading}>
                Make your own resume. <span>It's Free</span> 
            </p>
        </div>
        <div className={styles.right}>
            <img src={resume} alt='Resume'/>
        </div>
    </div>
  )
}

export default Header
