import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';


const StyledProjectList= styled.ul`
    list-style: none;
    padding:0;
    margin: 0;
`
const StyledProject = styled.li`
    box-shadow: 0 8px 16px -8px var(--primary-med);
    border-radius: 6px;
    overflow: hidden;
    margin: 30px 0;


   .project-title{
       transition: width 0.4s;
       z-index: 2;  
       cursor: pointer;
       background: var(--primary-dark);    
       overflow:hidden;
       text-align: center;
       margin: auto;
       top: 12px;
       padding: 2px 0 0;
       height: 3vh;
       text-transform: uppercase;
       font-size: 12px;
   }
   .project-title:hover{
       height: 20vh;
       background: var(--black);
   }
   .project-title:hover h3{
       font-size: 0px;
   }

   .project-tech-list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 30px 0 10px;
    padding: 0;
    list-style: none;

    @media (max-width: 768px) {
      margin: 10px 0;
    }

    span{
        margin-right: 5px;
        color: var(--primary-dark);
    }
  }
  .project-links {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--light-gray);

    a {
        display: flex;
        justify-content: center;
        align-items: center;    
      padding: 10px;

      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }


   .project-description{
       position: relative; 
       z-index: 2;
       margin: 1rem;
       border-radius: 2px;
       background-color: var(--light-black);
       color: var(--primary-light);
   }

   h5{
       font-size: 13px;
       margin-top: 20px;
       display: flex;
       justify-content: center;
   }

`;

const Projects = () => {
    const data = useStaticQuery(graphql`
    query{
        projects: allMarkdownRemark(
            filter: {fileAbsolutePath : {regex: "/projects/"}}
                sort: {frontmatter : {date: DESC}}
        ) {
            edges {
                node {
                    frontmatter{
                        timeline
                        title
                        github
                        external
                        tech
                    }
                    html
                }
            }
        }
    }
    `)
    const projectList = data.projects.edges.filter(({node }) => node);
        return (
            <section>
            <h2 className="heading">Projects</h2>
            <StyledProjectList>
                {projectList && projectList.map(({ node}, i) => {
                    const {frontmatter, html} = node;
                    const {github, external, title, tech, timeline} = frontmatter;  
                    return (
                        <StyledProject key={i}>
                            <div>
                            <div className="project-title">
                                <h3>{title} </h3>
                                <div>
                                <h5>{timeline}</h5>
                                {tech.length && (
                                <div className="project-tech-list">
                                    {tech.map((stack, i) => (
                                    <span key={i}>{stack}</span>
                                    ))}
                                </div>
                                )}
                            <div className="project-links">
                                {github && (
                                    <a href={github} aria-label="GitHub Link">
                <i className='fa-brands fa-github' aria-hidden="true" />
                                    </a>
                                )}
                                {external && (
                                    <a href={external} aria-label="External Link" className="external">
<i className="fa-solid fa-square-arrow-up-right"></i>                               </a>
                                )}
                                </div>
                                </div>
                            </div>
                            <div
                                className="project-description"
                                dangerouslySetInnerHTML={{ __html: html }}
                                />
                            </div>
                        </StyledProject>
                    )                  
                }) }
            </StyledProjectList>
        </section>

        )
    }

export default Projects;

