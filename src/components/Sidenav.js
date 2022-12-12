import React from 'react'
import { LinkedinOutlined ,TwitterOutlined, SkypeOutlined } from "@ant-design/icons"
import styles from "../styles/Sidenav.module.scss"



function Sidenav() {
    return (
        <div className={styles.Sidenav}>
            <div className={styles.SidenavContainer}>
                <div className={styles.contact}>
                    <h1>CONTACT</h1>
                    <h3>LOCATION</h3>
                    <p>vsp</p>
                    <h3>PHONE</h3>
                    <p>123-678-987</p>
                    <h3>EMAIL</h3>
                    <p>teman@gmail.com</p>
                </div>
                <div className={styles.social}>
                    <h1>SOCIAL</h1>
                    <p><span><LinkedinOutlined /></span>Linkedin</p>
                    <p><span><TwitterOutlined /></span>Twitter</p>
                    <p><span><SkypeOutlined /></span>Skype</p>
                </div>
                <div className={styles.education}>
                    <h1>EDUCATION</h1>
                    <h3>MARKETING</h3>
                    <p>2002-2006</p>
                    <p>University of Bristol</p>
                    <h3>LAW</h3>
                    <p>2000-2002</p>
                    <p>Aston College</p>
                    <h3>High School</h3>
                    <p>1995-2000</p>
                    <p>Aston High SChool</p>
                </div>
            </div>
        </div>
    )
}

export default Sidenav