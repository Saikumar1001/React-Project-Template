import React from 'react'
import styles from "../styles/Main.module.scss"
function Main() {
    return (
        <div className={styles.Main}>
            <div className={styles.profile}>
                <h1>PERSIONAL PROFILE</h1>
                <p>I am motivated and enthusiastic by new challenges and tasks and
                    willing to take an excellent approach to achieve success and ensure
                    quality deliverables. Currently, looking for a suitable job opportunity
                    where I can utilize and enhance my skills, technical knowledge, and
                    abilities through project assignments.
                </p>
            </div>
            <div className={styles.work}>
                <h1>WORK EXPERIENCE</h1>
                <h2>DIRECTOR/STORYWRITER</h2>
                <p>Christopher Edward Nolan CBE (born 30 July 1970) is a British-American filmmaker. Known for his lucrative Hollywood blockbusters with complex storytelling, Nolan is considered a leading filmmaker of the 21st century. His films have grossed more than US$4.7 billion worldwide. </p>
                <p>The recipient of many awards and honours, he has been nominated for five Academy Awards, five British Academy Film Awards and six Golden Globe Awards. In 2015, he was listed as one of the 100 most influential people in the world by Time, and in 2019, he was appointed Commander of the Order of the British Empire for his contributions to film.</p>
                <li>BATMAN BEGINS</li>
                <li>DARK KNIGHT</li>
                <li>THE DARK KNIGHT RISES</li>
                <li>DUNKRIK</li>
                <li>TENET</li>
                <li>INSOMNIA</li>
                <li>FOLLOWING</li>
                <li>MOMENTO</li>
                <li>INCEPTION</li>
                <li>INTERSTELLAR</li>
            </div>
        </div>
    )
}

export default Main