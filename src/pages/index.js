import React from "react"
import Layout from '../components/Layout';
import * as style from '../styles/home.module.css';
import {email} from '../config';
import Links from "../components/ui-components/links";
import { Icon } from "../components/ui-components/icons";

export default function Home() {
  return (
    <Layout>
      <section className={style.header}>
          <div>
          <div  className={style.meow}><Icon name = "Dotted-Box"></Icon> </div>
            <h4 className= {style.name}>Hey! I'm</h4>
            <h2>Arushi Aggarwal</h2>
            <p>I'm currently a 4th-year CS undergraduate based in Chandigarh, IN interested in web development, optimizing user experience and making tech more accessible to everyone.</p>
            <div className= "margin-24-bottom">
            <a href={`mailto:${email}`} className={style.btn}>
              Get in Touch
            </a>
            </div>
          </div>
      </section>
      <Links />
    </Layout>
  )
}
