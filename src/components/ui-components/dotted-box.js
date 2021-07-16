import React from 'react';
import * as box from '../../styles/dottedbox.module.css';
// This component creates a dotted box based on the params we recieve.
export default function DottedBox() {
    return(
        <div className={box.stripe}></div>
    )
}