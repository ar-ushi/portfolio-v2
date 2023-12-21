import React, { useEffect, useRef } from 'react';
import { useState } from "react";
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const StyledPositionSection = styled.section`
  max-width: 100%;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }

    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 50px;
    }
  }
`;

const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  list-style: none;
  display:inherit;
  width: calc(100% + 50px);


  li {
    &:last-of-type {
      @media (max-width: 600px) {
        padding-right: 50px;
      }
      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
`;

const StyledTabButton = styled.button`
  display: flex;
  border-top: none;
  border-bottom: none;
  border-right:none;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 15px 2px;
  border-left: 1px solid var(--white);
  background-color: transparent;
  font-size: 1em;
  font-weight: 500;

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid var(--primary-opaque);
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: var(--primary-bg);
  }
`;


const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    padding: 0;
    margin: 0;
    list-style: square;
    font-size: 1rem;
  }
  li{
    position: relative;
    margin-bottom: 20px; 
  }

  h3 {
    margin-bottom: 20px;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: var(--primary);
    }
  }

`;


export default function Positions() {
    const [activeTabId, setActiveTabId] = useState(0);
    const [tabFocus, setTabFocus] = useState(null);
    const tabs = useRef([]);
    const revealContainer = useRef(null);


    const pdata = useStaticQuery(graphql`
    query{
        positions: allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/positions/"}}
            sort: {frontmatter : {number: ASC}}
        ){
            edges{
                node{
                    frontmatter{
                        number
                        title
                        name
                    }
                    html
                }
            }
        }
    }
    `)
    const posData = pdata.positions.edges;
    const focusTab = () => {
        if (tabs.current[tabFocus]) {
          tabs.current[tabFocus].focus();
          return;
        }
        // If we're at the end, go to the start
        if (tabFocus == null){
          setTabFocus(0);
        }
        if (tabFocus >= tabs.current.length) {
          setTabFocus(0);
        }
        // If we're at the start, move to the end
        if (tabFocus < 0) {
          setTabFocus(tabs.current.length - 1);
        }
      };
      // useEffect(() => focusTab(), [tabFocus]);
      return (
        <StyledPositionSection id="positions">
          <h2 className="heading">Positions & Achievements</h2>
    
          <div className="inner">
            <StyledTabList aria-label="Job tabs">
              {posData &&
                posData.map(({ node }, i) => {
                    const {name } = node.frontmatter;

                  return (
                    <StyledTabButton
                      key={i}
                      onClick={() => setActiveTabId(i)}
                      ref={el => (tabs.current[i] = el)}
                      id={`tab-${i}`}
                      role="tab"
                      tabIndex={activeTabId === i ? '0' : '-1'}
                      aria-selected={activeTabId === i ? true : false}
                      aria-controls={`panel-${i}`}
                      >
                      <span>{name}</span>
                    </StyledTabButton>
                  );
                })}
            </StyledTabList>
          </div>
          <StyledTabPanels>
              {posData &&
                posData.map(({ node }, i) => {
                  const { frontmatter, html } = node;
                  const { title, name } = frontmatter;
    
                  return (
                      <StyledTabPanel
                        id={`panel-${i}`}
                        role="tabpanel"
                        tabIndex={activeTabId === i ? '0' : '-1'}
                        aria-labelledby={`tab-${i}`}
                        aria-hidden={activeTabId !== i}
                        hidden={activeTabId !== i}>
                        <h3>
                          { title != 'N/A' && <span>{title} | </span>}
                          {title == 'N/A' && <span></span>}
                          <span className="company">{name}
                            {/* <a href={url} className="inline-link">
                            </a> */}
                          </span>
                        </h3>
        
                        <div key = {i} className="margin-10-left" dangerouslySetInnerHTML={{ __html: html }} />
                      </StyledTabPanel>
                  );
                })}
            </StyledTabPanels>
        </StyledPositionSection>
      );
    };
    

    