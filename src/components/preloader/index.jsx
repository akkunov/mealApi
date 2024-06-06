import React from 'react';
import x from './preloader.module.css'
function Preloader({style}) {
    return (
        <span className={x.loader} style={style}></span>
    );
}

export default Preloader;