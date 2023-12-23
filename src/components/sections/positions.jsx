import React, {useRef } from 'react';
import { useState } from "react";
import * as style from '../../styles/positions.module.css'
import { graphql, useStaticQuery } from 'gatsby';

export default function Positions() {
    const [activeTabId, setActiveTabId] = useState(0);
    const [tabFocus, setTabFocus] = useState(null);
    const tabs = useRef([]);

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
        if (tabFocus === null){
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
        <section id="positions">
          <h2 className="heading">Positions & Achievements</h2>
    
          <div className={style.inner}>
            <div className={style.tablist} aria-label="Job tabs">
              {posData &&
                posData.map(({ node }, i) => {
                    const {name } = node.frontmatter;

                  return (
                    <button
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
                    </button>
                  );
                })}
            </div>
          </div>
          <div className={style.tabpanels}>
              {posData &&
                posData.map(({ node }, i) => {
                  const { frontmatter, html } = node;
                  const { title, name } = frontmatter;
    
                  return (
                      <div
                        className={style.tabpanel}
                        id={`panel-${i}`}
                        role="tabpanel"
                        tabIndex={activeTabId === i ? '0' : '-1'}
                        aria-labelledby={`tab-${i}`}
                        aria-hidden={activeTabId !== i}
                        hidden={activeTabId !== i}>
                        <h3>
                          <span className="company">{name}
                          </span>
                        </h3>
        
                        <div key = {i} className="margin-10-left" dangerouslySetInnerHTML={{ __html: html }} />
                      </div>
                  );
                })}
            </div>
        </section>
      );
    };
    

    