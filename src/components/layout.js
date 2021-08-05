import React from 'react'
import Navbar from './navbar'
import '../styles/global.css'
import Links from "./ui-components/links";

const StyledLayout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
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
                <Navbar atHome={atHome} />
                <Links />
                <div id="content">
                    {children}
                </div>
            </StyledLayout>
        </div>
        </>
    )
};
