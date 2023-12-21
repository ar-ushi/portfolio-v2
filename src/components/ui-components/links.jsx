import React from 'react';
import { socialMediaLinks } from '../../config';
import * as style from '../../styles/home.module.css'
import { Icon } from './icons';
import Side from './side';


export default function Links() {
    return (
        <Side orientation = "left">
        <ul className={style.listlinks}>
        {socialMediaLinks && socialMediaLinks.map(( {url, name}, i) => (
            <li key={i}>
                <a href={url}  aria-label={name} target="_blank" rel="noreferrer">
                <Icon name={name} />
                </a>
            </li>
        ))}
        </ul>
    </Side>
    )
}