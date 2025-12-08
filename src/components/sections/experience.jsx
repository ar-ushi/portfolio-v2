import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import * as style from "../../styles/experience.module.css";

export default function Experience() {
  const data = useStaticQuery(graphql`
    query {
      experience: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/experience/" } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            frontmatter {
              title
              range
              company
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
      <div className={style.card}>
        {expData &&
          expData.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { title, url, company, range } = frontmatter;
            return (
              <div className={style.innercard}>
                <h3>
                  <span>{title}</span>
                  <span className={style.companylink}>
                    &nbsp;@&nbsp;
                    <a href={url} className="inline-link">
                      {company}
                    </a>
                  </span>
                </h3>
                <p className={style.range}>{range}</p>
                <div
                  className="margin-10-left"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
            );
          })}
      </div>
    </section>
  );
}
