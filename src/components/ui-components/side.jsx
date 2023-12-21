import React from 'react';
import * as style from '../../styles/home.module.css';



export default function Side ({children, orientation}) {
  //hide initial styles on load - styles are loaded before the rest of the content is available 
  const sideStyles =
  orientation === 'left'
    ? { left: '40px', right: 'auto' }
    : { left: 'auto', right: '40px' };
    return (
       <div orientation={orientation} style={sideStyles} className={style.sideelement}>
           {children}
       </div> 
    )
}