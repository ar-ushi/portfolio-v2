import React from "react";
import { graphql } from "gatsby";
import { PortableText } from "@portabletext/react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as style from "../styles/articles.module.css";
import CodeBlock from "../components/ui-components/CodeBlock";
import { urlFor } from "../lib/sanityImage";
import Callout from "../components/ui-components/Callout";
export default function Article({ data }) {
  const post = data.sanityPost;

  const components = {
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) return null;

        const displayWidth = 500;

        const imageUrl = urlFor(value)
          .width(displayWidth * 2)
          .fit("max")
          .auto("format")
          .url();

        return (
          <img
            alt={value.alt || ""}
            loading="lazy"
            src={imageUrl}
            style={{
              width: `${displayWidth}px`,
              maxWidth: "100%",
              height: "auto",
              display: "block",
              marginBottom: "24px",
            }}
          />
        );
      },

      code: ({ value }) => (
        <CodeBlock code={value.code} language={value.language} />
      ),
      callout: ({ value }) => {
        const classType = value.type;

        return <Callout type={value.type}>{value.text}</Callout>;
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
