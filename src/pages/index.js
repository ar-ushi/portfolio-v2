import React from "react"
import Layout from '../components/Layout';
import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <Layout>
    <section className={styles.header}>
        <div>
          <h4>Hi, my name is</h4>
          <h2>Arushi</h2>
          <h3>UX Developer</h3>
        </div>
    </section>
    </Layout>
  )
}
