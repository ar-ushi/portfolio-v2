import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { socialMediaLinks } from "../../config";
import { Link } from "gatsby"

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: auto;
  padding: 15px;
  text-align: center;
  div {
    margin-bottom: 20px;
  }
  .copyright {
    font-size: 12px;
  }
  .credit {
    color: var(--light-gray);
  }
`;

const StyledLinks = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 5px 50px;
      color: var(--white);
      svg {
        width: 20px;
        height: 20px;
      }
    }
    a:hover {
      transition: var(--transition-link);
      transform: translateY(-3px);
      svg {
        stroke: var(--primary);
      }
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <a href="https://github.com/ar-ushi/portfolio-v2">
        <div className="credit">Designed &amp; Built by Arushi Aggarwal</div>
      </a>
      <StyledLinks>
        <ul>
      {socialMediaLinks.map(({ url, name, iconName }, i) => (
               <li key={i}>
                 {url.startsWith("/") ? (
                   <Link to={url} aria-label={name}>
                     <i className={iconName} aria-hidden="true" />
                   </Link>
                 ) : (
                   <a
                     href={url}
                     aria-label={name}
                     target="_blank"
                     rel="noreferrer"
                   >
                     <i className={iconName} aria-hidden="true" />
                   </a>
                 )}
               </li>
             ))}        </ul>
      </StyledLinks>
      <div className="copyright">© 2025 CopyRight All Rights Reserved</div>
    </StyledFooter>
  );
}
