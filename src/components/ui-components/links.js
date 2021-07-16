import React from 'react';
import { socialMediaLinks } from '../../config';
import Icon from './icons';

export default function Links() {
    return (
        <ul>
        {socialMediaLinks && socialMediaLinks.map(( {url, name}, i) => (
            <li key={i}>
                <a href={url}  aria-label={name} target="_blank" rel="noreferrer">
                <Icon name={name}></Icon>
                </a>
            </li>
        ))}
        </ul>
    )
}