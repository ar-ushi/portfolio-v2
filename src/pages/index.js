import React from "react"
import Layout from '../components/Layout';
import * as style from '../styles/home.module.css';
import DottedBox from "../components/ui-components/dotted-box";
import obj from '../config';

export default function Home() {
  return (
    <Layout>
    <section className={style.header}>
        <div>
          <h4 className= {style.name}>Hey! I'm</h4>
          <DottedBox />
          <h2>Arushi Aggarwal</h2>
          <p>I'm currently a 4th-year CS undergraduate based in Chandigarh, IN interested in web development, optimizing user experience and making tech more accessible to everyone.</p>
          <a href={`mailto:${obj.email}`} className={style.btn}>
            Get in Touch
          </a>
        </div>
    </section>
    </Layout>
  )
}
