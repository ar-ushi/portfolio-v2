import React from 'react'
import Navbar from './navbar'
import '../styles/global.css'
import Links from "./ui-components/links";

export default function Layout({ children, location }) {
    return (
        <div className= "layout">
            <Navbar />
            <Links />
        <div className = "content">
            { children }
            {/* content for each component will be seperated*/ }
        </div>
        <footer>
            <p>Copyright 2021 Arushi Aggarwal</p>
        </footer>
        </div>
    )
}