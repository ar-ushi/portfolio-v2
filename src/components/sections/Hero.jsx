
import React from "react"
import * as style from '../../styles/home.module.css';
import {email} from '../../config';

export default function Hero() {
    return (
        <section className={style.header}>
            <h4 className= {style.name}>Hey! I'm</h4>
            <h2 className = {style.bigH}>Arushi Aggarwal.</h2>
            <div>
                <p className={style.headingDescription}>I'm currently working at American Express as a Digital Product Management Associate and I am looking to switch into a Software Engineer Role.</p>
            </div>
            <div className= {style.btnwrapper}>
                <a href={`mailto:${email}`} className={style.btn}>
                    Get in Touch
                </a>
                <a href= "./Resume.pdf" className={style.btn}  target="_blank" rel="noreferrer">
                    Resume
                </a>

            </div>
        </section>
    )
}