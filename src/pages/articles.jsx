import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import * as style from "../styles/articles.module.css";

// helper: extract plain text from Sanity body
const getExcerpt = (body, limit = 500) => {
  if (!body) return "";

  const text = body
    .flatMap((block) => block._rawChildren || [])
    .map((child) => child.text)
    .join(" ");

  return text.length > limit ? text.slice(0, limit) + "…" : text;
};

// helper: format date
const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function Articles({ location, data }) {
  return (
    <Layout location={location}>
      <main className={style.container}>
        <header className={style.header}>
          <h1>Articles</h1>
          <p>
            Arushi's big ideas about tech, systems, and everything under the sun
          </p>
        </header>

        <section className={style.list}>
          {data.allSanityPost.nodes.map((post) => (
            <article key={post._id} className={style.card}>
              <div className={style.meta}>
                <time>{formatDate(post.publishedAt)}</time>

                <div className={style.categories}>
                  {post.categories?.map((cat) => (
                    <span key={cat.id} className={style.chip}>
                      {cat.title}
                    </span>
                  ))}
                </div>
              </div>

              <h2>
                <Link
                  to={`/article/${post.slug.current}`}
                  className={style.title}
                >
                  {post.title}
                </Link>
              </h2>

              <h6 className={style.excerpt}>{getExcerpt(post.body)}</h6>
            </article>
          ))}
        </section>
      </main>
    </Layout>
  );
}

export const query = graphql`
  {
    allSanityPost(sort: { publishedAt: DESC }) {
      nodes {
        _id
        title
        publishedAt
        slug {
          current
        }
        categories {
          id
          title
        }
        body {
          _rawChildren
        }
      }
    }
  }
`;
