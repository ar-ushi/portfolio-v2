import React from 'react';
import { socialMediaLinks } from '../../config';
import { Icon } from './icons';
import Side from './side';
import styled from 'styled-components';

const StyledLinkList = styled.ul`
display:flex;
flex-direction: column;
margin: 0;
padding: 0;
list-style: none;  
&:after  {
    content: '';
    display: block;
    width: 1px;
    height: 100px;
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

  li {
    margin-bottom: 24px;
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;
      color : var(--white);

      &:hover,
      &:focus {
        transition: var(--transition-link);
        transform: translateY(-3px);
        svg{
          stroke: var(--primary);
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;
export default function Links() {
    return (
        <Side orientation = "left">
        <StyledLinkList>
        {socialMediaLinks && socialMediaLinks.map(( {url, name}, i) => (
            <li key={i}>
                <a href={url}  aria-label={name} target="_blank" rel="noreferrer">
                <Icon name={name} />
                </a>
            </li>
        ))}
        </StyledLinkList>
    </Side>


    )
}