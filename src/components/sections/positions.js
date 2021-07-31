import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export default function Positions() {
    const data = useStaticQuery(graphql`
    query{
        positions: allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/positions"}}
        ){
            edges{
                node{
                    frontmatter{
                        title
                        name
                    }
                    html
                }
            }
        }
    }
    `)
    return(
        <section>
        <h2 className = "heading">Achievements & Positions of Responsibility</h2>

        </section>
    )
}