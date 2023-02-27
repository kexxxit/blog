import React from "react";
import styles from './header.module.css'
import {NavLink} from "react-router-dom";

let Header = () => {
    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.navigation}>
                    <div className={styles.nav}>
                        <a>Блог</a>
                        <a>Автор</a>
                    </div>
                    <div className={styles.auth}>
                        <NavLink to={'/register'}>Авторизация</NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header