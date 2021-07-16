import React from 'react';
import { socialMediaLinks } from '../../config';
import { Icon } from './icons';
import '../../styles/links.module.css';
import Side from './side';

export default function Links() {
    return (
        <Side orientation = "left">
        <ul>
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