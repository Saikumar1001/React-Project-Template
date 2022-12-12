import React from 'react'
import Main from './Main'
import Sidenav from './Sidenav'
import styles from "../styles/Sidemain.module.scss"

function Sidemain() {
  return (
    <div className={styles.sm}>
        <Sidenav/>
        <Main/>
    </div>
  )
}

export default Sidemain