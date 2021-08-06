import React from "react"
import Layout from '../components/Layout';
import AboutMe from "../components/sections/about";
import Experience from "../components/sections/experience";
import Projects from "../components/sections/projects";
import Positions from "../components/sections/positions";
import Hero from "../components/sections/Hero";
import Contact from "../components/sections/contact";

export default function Home({location}) {
  return (
    <Layout location={location}>
      <main>
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Positions />
      <Contact />
      </main>
    </Layout>
  )
}
