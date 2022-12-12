import React from "react";
import styles from "../styles/header.module.scss"
const Header=()=>{
    return(
        <div className={styles.Header}>
        <div className={styles.HeaderContainer}>
            <div>
            <h1>CHRISTOPHER NOLAN</h1>
            <h3>DIRECTOR</h3>
            <hr></hr>
            </div>
            <div>
                <h1>C/N</h1>
            </div>

        </div>
        </div>
    )
}

export default Header