
import React from "react"
import * as style from '../../styles/home.module.css';
import {email} from '../../config';
import { StaticImage } from "gatsby-plugin-image";

export default function Hero() {
    return (
        <section className={style.header}>
            <h4 className= {style.name}>Hey! I'm</h4>
            <h2 className = {style.bigH}>Arushi Aggarwal.</h2>
            <div>
                <h3>Software Engineer.</h3>
                <p className={style.headingDescription}>I'm currently a 4th-year CS undergraduate based in Chandigarh, IN interested in web development, optimizing user experience and making tech more accessible to everyone.</p>
            </div>
            <div className= "margin-24-bottom">
                <a href={`mailto:${email}`} className={style.btn}>
                    Get in Touch
                </a>
                <a href= "./Resume.pdf" className={style.btn}  target="_blank" rel="noreferrer">
                    Resume
                </a>

            </div>
            <div className= {style.columnRight}>
                <StaticImage />
            </div>
        </section>
    )
}