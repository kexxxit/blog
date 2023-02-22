import React from "react";
import styles from './header.module.css'

let Header = () => {
    return (
        <header>
            <div className='container'>
                <div className={styles.navigation}>
                    <div className={styles.nav}>
                        <a>Блог</a>
                        <a>Автор</a>
                    </div>
                    <div className={styles.auth}>
                        <a>Авторизация</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header