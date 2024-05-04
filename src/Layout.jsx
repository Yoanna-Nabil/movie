import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { langContext } from './LanguageContext'
import styles from './Layout.module.css'

export default function Layout() {
    const{lang}= useContext(langContext)
    return (
        <>
        <div className={`${lang=='ar'? styles.change: styles.changes}`} >
        <Navbar />
            <div className="container" >
                <Outlet />
            </div>
        </div>
           
        </>
    )
}
