import React from "react";
import styles from './header.module.css'
import {NavLink} from "react-router-dom";

let Header = (props) => {
    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.navigation}>
                    <div className={styles.nav}>
                        <NavLink to={'/'}>Блог</NavLink>
                    </div>
                    { props.isAuth ? <div className={styles.auth}>
                            <span>{props.email}</span>
                            <button onClick={props.logout} className={styles.logout__button}>Выйти</button>
                        </div> :
                        <div className={styles.auth}>
                            <NavLink to={'/register'}>Авторизация</NavLink>
                        </div> }
                </div>
            </div>
        </header>
    )
}

export default Header