import React from 'react'
import Navbar from './navbar';
import '../styles/global.css';

export default function Layout({ children }) {
    return (
        <div className= "layout">
            <Navbar />
        <div className = "content">
            { children }
            {/* content for each component will be seperated*/ }
        </div>
        <footer>
            <p>Styled and Programmed by Arushi Aggarwal</p>
            <p>Copyright 2021 Arushi Aggarwal</p>
        </footer>
        </div>
    )
}