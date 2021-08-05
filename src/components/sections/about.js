import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as style from '../../styles/about.module.css';
import { StaticImage } from 'gatsby-plugin-image';

const cardVariants= {
    inactive: {
        transition: {
          duration: 0.5,
          delay: 0.4
        }
      },
      active: {
        transition: {
          duration: 0.5,
          delay: 0.6
        }
      }    
}

const contentVariants = {
    inactive: {
        x: -35,
        y: 35,
        opacity: 0,
        transition: {
          duration: 0.4
        }
      },
      active: {
        x: -35,
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.4
        }
      }
}
const thumbnailVariants = {
    inactive: {
        x: -45,
        y: 35,
        opacity: 0,
        transition: {
          duration: 0.4
        }
      },
      active: {
        x: -45,
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.4
        }
      }
}

const cardContentVariants ={
    inactive: {
        transition: {
          staggerChildren: 0.3,
          duration: 0.4,
          delay: 0.4
        }
      },
      active: {
        transition: {
          staggerChildren: 0.3,
          delayChildren: 0.3,
          duration: 0.4,
          staggerDirection: -1,
          delay: 0.4
        }
      }    
}

export default function AboutMe() {
    return (
  <section id="about">
    <h2 className="heading">About Me</h2>
    <motion.div 
    className={style.aboutSection}
    variants= {cardVariants}
    animate = "inactive"
    initial="inactive"
    >
      <motion.div
        initial={{boxShadow: "1px 1px 5px 0.5px rgba(9, 120, 184, 0.877)",}}
        whileHover={{boxShadow: "-1px -1px 5px 0.5px rgba(9, 120, 184, 0.877)",}}
        whileTap={{boxShadow: "-1px -1px 5px 0.5px  rgba(9, 120, 184, 0.877)",}}   
      >
              <div className={style.itemBody}>
        <AnimatePresence exitBeforeEnter>
          <div key = "about">
            <motion.div
            className={style.flexBody}
            variants={cardContentVariants}
            exit = "inactive"
            animate ="active"
            initial="inactive"
            >
            <motion.div className={style.thumbnailcontainer} variants={thumbnailVariants}>
              <StaticImage
              className = {style.thumbnail}
              src = "../../img/me.jpg"
              alt = "my-picture"
              height= {800}
              width= {800}
              quality = {100}
              />
          </motion.div>
          <motion.div className={style.aboutDescription} variants={contentVariants}>
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
      </motion.div>
        </div>
      </AnimatePresence>
    </div>
      
      </motion.div>
    </motion.div>
  </section>
    )
}

