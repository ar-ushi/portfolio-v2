import React from "react"
import Layout from '../components/Layout';
import * as style from '../styles/home.module.css';
import {email} from '../config';
import { Icon } from "../components/ui-components/icons";
import AboutMe from "../components/sections/about";
import Experience from "../components/sections/experience";
import Positions from "../components/sections/positions";
import Hero from "../components/sections/Hero";
import Contact from "../components/sections/contact";

export default function Home({location}) {
  return (
    <Layout location={location}>
      <main>
      <Hero />
      <AboutMe />
      <div className ="margin-40-top" />
      <Experience />
      <Positions />
      <Contact />
      </main>
    </Layout>
  )
}
