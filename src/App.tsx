import React, { useEffect, useState } from 'react';
import './App.css';
import { Site } from "./components/Site";
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styles from './components/Site.module.css'
import { S } from './styles/_appStylys'
import { useWindowSize } from './helpers/useWindowSize';


function App() {
    const size = useWindowSize()

    return (
        <>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                {size > 1000
                    ? <div className={styles.nav}>
                        <S.NavWrapper><NavLink to={'/page/0'} >PAGE 1</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/page/1'} >PAGE 2</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/page/2'} >PAGE 3</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/proptected'} >PAGE PROTECTED</NavLink></S.NavWrapper>
                    </div>
                    : <div></div>}
                <div className={styles.content}>
                    <Outlet />
                </div>
            </div>
        </>)
}


export default App;