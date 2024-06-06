import React from 'react';
import style from "./logo.module.css";

function Logo() {
    return (
        <div>
            <div className={style.logo}>
                <img src="../../src/assets/icons/logo.svg" alt="logo"/>
                <span className={style.logoText}>Delícias à Mesa</span>
            </div>
        </div>
    );
}

export default Logo;