import React from "react"
import { graphql } from "gatsby"
import { PortableText } from "@portabletext/react"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Article({ data }) {
  const post = data.sanityPost

  const components = {
    types: {
      image: ({ value }) => {
        if (!value?.asset) return null

        return (
          <GatsbyImage
            image={value.asset.gatsbyImageData}
            alt={value.alt || ""}
            style={{ margin: "2rem 0" }}
          />
        )
      },
    },
    block: {
      h1: ({ children }) => <h1>{children}</h1>,
      h2: ({ children }) => <h2>{children}</h2>,
      h3: ({ children }) => <h3>{children}</h3>,
      blockquote: ({ children }) => (
        <blockquote style={{ fontStyle: "italic" }}>
          {children}
        </blockquote>
      ),
    },
  }

  return (
    <main style={{ maxWidth: "720px", margin: "0 auto", padding: "2rem" }}>
      <article>
        <h1>{post.title}</h1>
        <p>{post.publishedAt}</p>

        {post.categories?.length > 0 && (
          <ul style={{ display: "flex", gap: "0.5rem", padding: 0 }}>
            {post.categories.map(category => (
              <li key={category.slug.current}>
                #{category.title}
              </li>
            ))}
          </ul>
        )}

        <PortableText value={post.bodyRaw} components={components} />
      </article>
    </main>
  )
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
`




