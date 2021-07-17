import React from 'react';
import { motion } from 'framer-motion';
import * as style from '../../styles/about.module.css';
import { StaticImage } from 'gatsby-plugin-image';
export default function AboutMe() {
    return (
        <section>
            <h2 className="heading">About Me</h2>
            <div className="d-flx">
                <div className="flx-d-col">
                    <motion.div className={style.aboutDescription}
                        initial={{boxShadow: "1px 1px 5px 0.5px rgba(114, 114, 114, 0.5)",}}
                        whileHover={{boxShadow: "-1px -1px 5px 0.5px rgba(114, 114, 114, 0.5)",}}
                        whileTap={{boxShadow: "-1px -1px 5px 0.5px rgba(114, 114, 114, 0.5)",}}
                    >
                        <p className="defaultfont">Hello! I am Arushi, a computer science engineering undergraduate based in Chandigarh, IN.</p>
                        <p className="defaultfont"> While I've been curious about computers and technology since an early age, I began my journey in <div className="primarycolor">web development</div> back in 
                        2019, and from that, I explored how to code by myself, fast-forward to today, I have explored several programming languages and frameworks 
                        ultimately learning the importance of <div className="primarycolor">problem solving</div>.
                        </p> 
                        <p className="defaultfont">
                            In 2020, I had the privilege of working as part of the <div className="primarycolor">Frontend App Development Team</div> at {' '}
                            <a href="https://myhq.in">a start-up</a>, which has offered me valuable experience and learnings in heading projects and 
                            communicating within and to teams about requirements. 
                        </p>                      
                    </motion.div>
                </div>     
                <div className={style.imgStyle}>
                    <div className={style.wrapper}>
                        <StaticImage 
                        src = "src/img/me.jpg"
                        width = {500}
                        height = {500}
                        />
                    </div>
                </div>           
            </div>
        </section>
    )
}

