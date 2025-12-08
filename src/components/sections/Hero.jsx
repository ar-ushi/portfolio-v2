import React from "react";
import * as style from "../../styles/home.module.css";
import { email } from "../../config";

export default function Hero() {
  return (
    <section className={style.header}>
      <h4 className={style.name}>Hey! I'm</h4>
      <h2 className={style.bigH}>Arushi Aggarwal.</h2>
      <div>
        <p className={style.headingDescription}>
          I’m a Software Engineer (SDE-2) with about 1.5 years of experience
          working on frontend modernization, developer tooling, and improving
          the overall user experience across large, enterprise-scale lending
          platforms used by major U.S. financial institutions. I started as an
          SDE-1 and moved to SDE-2 within 18 months, which has a lot to do with
          how much I enjoy learning, breaking things, fixing them better, and
          building tools that make development smoother for everyone.
        </p>
        <p className={style.headingDescription}>
          Before engineering, I spent 22 months in Product Management at
          American Express with the EDDS Product Team, designing user
          experiences across multiple touchpoints in the enterprise big data
          lake. That experience shaped how I approach building products today:
          clear workflows, aligned stakeholders, and intuitive UX that supports
          users rather than overwhelms them.
        </p>
        <p className={style.headingDescription}>
          Outside of work, I’m usually reading (I finished 52 books in 2025),
          swimming, or keeping myself busy with crafts and music. DELF A1
          certified in French; currently learning Dutch.
        </p>
      </div>
      <div className={style.btnwrapper}>
        <a href={`mailto:${email}`} className={style.btn}>
          Get in Touch
        </a>
        <a
          href="./Resume.pdf"
          className={style.btn}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
