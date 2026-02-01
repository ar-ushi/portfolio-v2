import React from "react";
import { graphql } from "gatsby";
import { PortableText } from "@portabletext/react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as style from "../styles/articles.module.css";

export default function Article({ data }) {
  const post = data.sanityPost;

  const components = {
    types: {
      image: ({ value }) => {
        if (!value?.asset?.gatsbyImageData) return null;
        return <GatsbyImage image={value.asset.gatsbyImageData} alt="" />;
      },
    },
  };

  return (
    <main className={style.container}>
      <header className={style.header}>
        <h1>{post.title}</h1>
        <p>{post.publishedAt}</p>
      </header>

      {post.categories?.length > 0 && (
        <div className={style.meta}>
          <div className={style.categories}>
            {post.categories.map((cat) => (
              <span key={cat.slug.current} className={style.chip}>
                {cat.title}
              </span>
            ))}
          </div>
        </div>
      )}

      <article className={style.card}>
        <PortableText value={post._rawBody} components={components} />
      </article>
    </main>
  );
}

export const query = graphql`
  query ($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      title
      publishedAt(formatString: "MMM DD, YYYY")
      _rawBody
      categories {
        title
        slug {
          current
        }
      }
    }
  }
`;
