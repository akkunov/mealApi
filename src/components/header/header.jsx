import React from 'react';
import style from './header.module.css';
import {Link, NavLink} from "react-router-dom";
import Logo from "../logo/logo.jsx";

function Header(props) {
    return (
        <header className={style.header}>
            <div className={style.header__container}>
                <NavLink to={'/'}>
                    <Logo />
                </NavLink>
                <div className={style.author}>
                    <Link to={'https://t.me/akunov313131'}>
                        By Elpacho
                    </Link>

                </div>
            </div>

        </header>
    );
}

export default Header;