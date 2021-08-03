import React from 'react';
import {email} from '../../config';
import styled from 'styled-components';

const ContactInfo = styled.div`
    position: relative;
    width: 100%;

    p{
        font-size: 1.25em;
        margin: 0;
        display: inline-block;
    }
`
export default function Contact() {
    return (
        <section>
            <h2 className = "heading">Get in Touch</h2>
            <div>
                <p>If you're impressed by the portfolio so far and would like to get in touch with me, please drop me a { }
            <a href={`mailto:${email}`} className="primarycolor">mail</a>. I am currently looking for Job Oppurtunities for <p className="primarycolor"> Summer 2022.</p></p>
            </div>
        </section>
    )
}