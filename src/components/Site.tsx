import React from 'react';
import styles from './Site.module.css'
import { PageOne } from './pages/PageOne';
import { PageTwo } from './pages/PageTwo';
import { PageThree } from './pages/PageThree';
import { Navigate, Route, Routes, NavLink } from 'react-router-dom';
import { Error404 } from './pages/Error404';
import { Page } from './pages/Page';
import { dataState } from './dataState/dataState';


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink className={({ isActive }) => isActive ? styles.active : styles.navLink} to={'/Page/0'}>Page 1</NavLink></div>
                    <div><NavLink className={({ isActive }) => isActive ? styles.active : styles.navLink} to={'/Page/1'}>Page 2</NavLink></div>
                    <div><NavLink className={({ isActive }) => isActive ? styles.active : styles.navLink} to={'/Page/2'}>Page 3</NavLink></div>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path='/' element={<Navigate to={'/Page/0'} />} />
                        
                        <Route path={'/Page/:id'} element={<Page pages={dataState.pages} />} />
                        
                        <Route path={'/*'} element={<Error404 />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};