import React, {useEffect} from 'react'
import '../styles/global.css'
import styled from 'styled-components';
import Links from "./ui-components/links";
import Website from './ui-components/website';

const StyledLayout = styled.div`
    max-width: 1200px;
    margin: 0 auto;  
`

export default function Layout({ children, location }) {
    
    const atHome = location.pathname === '/';
    const handleExternalLinks = () => {
        const allLinks = Array.from(document.querySelectorAll('a'));
        if (allLinks.length > 0) {
          allLinks.forEach(link => {
            if (link.host !== window.location.host) {
              link.setAttribute('rel', 'noopener noreferrer');
              link.setAttribute('target', '_blank');
            }
          });
        }
      };

      useEffect(() => {
      if (location.hash){
          const id = location.hash.substring(1);
          setTimeout(() => {
            const el = document.getElementById(id);
            if (el) {
              el.scrollIntoView();
              el.focus();
            }
          }, 0);
      }
      handleExternalLinks();
    }, []);
    
    return (
        <>
        <div id="root">
            <StyledLayout>
                <Links />
                <Website />
                <div id="content">
                    {children}
                </div>
            </StyledLayout>
        </div>
        </>
    )
};
