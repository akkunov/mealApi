import React from 'react';
import Header from "../components/header/header.jsx";
import {Outlet} from "react-router-dom";

function Root(props) {
    const style = {
        width: "15rem",
        height: '15rem'
    }
    return (
        <>
            <Header />
            <Outlet />

        </>
    );
}

export default Root;