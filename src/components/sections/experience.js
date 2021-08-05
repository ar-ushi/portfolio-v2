import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import * as style from '../../styles/experience.module.css'

const StyledCard = styled.div`
    position: relative;
    width: 100%;
`

const StyledInnerCard = styled.div`
    width: 100%;
    height: auto;
    padding: 10px 0px;
    ul {
        padding: 0;
        margin: 0;
        list-style: square;
        font-size: 1em;
        li {
            position: relative;
            margin-bottom: 20px;
        }
    }
    h3 {
        margin-bottom: 2px;
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.3;
    
        .company {
          color: var(--primary-light);
        }
      }
      .type{
          margin-bottom:12px;
          font-size: 0.75rem;
      }
      .range {
        margin-bottom: 25px;
        color: var(--primary);
        font-size: 1rem;
      }
    
`

export default function Experience() {
    const data = useStaticQuery(graphql`
    query{
        experience: allMarkdownRemark(
            filter: {fileAbsolutePath : {regex: "/experience/"}}
            sort: {fields: [frontmatter___date], order: DESC}
        ) {
            edges{
                node {
                    frontmatter{
                        title
                        type
                        company
                        location
                        range
                        url
                    }
                    html
                }
            }
        }
    }
    `);
    const expData = data.experience.edges;
    //creating a simple card for the time being 
    return (
        <section id="jobs">
            <h2 className="heading">Experience</h2>
            <StyledCard>
                {expData && expData.map(({ node },i) => {
                    const { frontmatter, html } = node;
                    const { title,type,url, company, range } = frontmatter;
                    return (
                        <StyledInnerCard>
                            <h3>
                                <span>{title}</span>
                                <span className="company">
                        &nbsp;@&nbsp;
                        <a href={url} className="inline-link">
                          {company}
                        </a>
                      </span>
                    </h3>
                    <p className="range">{type} | {range}</p>

                    <div className="margin-10-left" dangerouslySetInnerHTML={{ __html: html }} />
                    </StyledInnerCard>
                    )
                }) }
            </StyledCard>
        </section>
    )
}