import React from 'react';
import * as style from '../../styles/home.module.css';
import {email} from '../../config';
import styled from 'styled-components';

const ContactInfo = styled.div`
    position: relative;
    width: 100%;
    text-align: center;

    p{
        margin: 0;
        display: inline-block;
    }
`
export default function Contact() {
    return (
        <section id="contact">
            <h2 className = "heading">Get in Touch</h2>
            <ContactInfo>
                <p>If you're impressed by the portfolio so far and would like to get in touch with me, please drop me a { }
            <a href={`mailto:${email}`} className="primarycolor">mail</a>. I am currently looking for Job Oppurtunities.</p>

            <a href={`mailto:${email}`} className={style.btn}>
                Say Hello!
                </a>
            </ContactInfo>
        </section>
    )
}