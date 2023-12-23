import React from 'react';
import * as style from '../../styles/home.module.css';
import '../../styles/global.css';
import {email} from '../../config';

export default function Contact() {
    return (
        <section id="contact">
            <h2 className = "heading">Get in Touch</h2>
            <div>
                <p>If you're impressed by the portfolio so far and would like to get in touch with me, please drop me a { }
            <a href={`mailto:${email}`} className="primarycolor">mail</a>. I am currently looking for Job Oppurtunities.</p>

            <div className='jstify-cnt-cntr'>
            <a href={`mailto:${email}`} className={style.btn}>
                Say Hello!
                </a>
            </div>
            </div>
        </section>
    )
}