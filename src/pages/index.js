import React from "react"
import Layout from '../components/Layout';
import * as style from '../styles/home.module.css';
import {email} from '../config';
import { Icon } from "../components/ui-components/icons";
import AboutMe from "../components/sections/about";

export default function Home() {
  return (
    <Layout>
      <main>
      <section className={style.header}>
          <div>
          <div  className={style.meow}><Icon name = "Dotted-Box"></Icon> </div>
            <h4 className= {style.name}>Hey! I'm</h4>
            <h2 className = {style.bigH}>Arushi Aggarwal.</h2>
            <div>
            <h3>Software Engineer.</h3>
            <p className={style.headingDescription}>I'm currently a 4th-year CS undergraduate based in Chandigarh, IN interested in web development, optimizing user experience and making tech more accessible to everyone.</p>
            </div>
            <div className= "margin-24-bottom">
            <a href={`mailto:${email}`} className={style.btn}>
              Get in Touch
            </a>
            </div>
          </div>
      </section>
      <AboutMe />
      </main>
    </Layout>
  )
}
