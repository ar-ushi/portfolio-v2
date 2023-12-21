import React from 'react';
import { portfolio } from '../../config';
import Side from './side';
import styled from 'styled-components';

const StyledLinkList = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: relative;

&:after {
  content: '';
  display: block;
  width: 1px;
  height: 90px;
  margin: 0 auto;
  background-color: var(--primary);
}

&:before  {
    content: '';
    display: block;
    width: 1px;
    height: 90vh;
    margin: 0 auto;
    background-color: var(--primary);
    }


a {
  margin: 20px auto;
  padding: 10px;
  font-size: 22px;
  color: var(--light-gray);
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;

  &:hover{
    color: var(--primary);
    transition: all 200ms ease-in;
    transform: translateY(-3px);
  }
  
}
`;
export default function Website() {
    return (
        <Side orientation = "right">
        <StyledLinkList>
                <a href={`${portfolio}`} target="_blank" rel="noreferrer">
                    check out v1 of my portfolio!
                </a>
        </StyledLinkList>
    </Side>
    )
}