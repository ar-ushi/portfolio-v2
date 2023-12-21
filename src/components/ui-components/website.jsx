import React from 'react';
import { portfolio } from '../../config';
import Side from './side';
import * as style from '../../styles/home.module.css'


export default function Website() {
    return (
        <Side orientation = "right">
        <ul className={style.listlinks}>
                <a href={`${portfolio}`} target="_blank" rel="noreferrer">
                    check out v1 of my portfolio!
                </a>
        </ul>
    </Side>
    )
}