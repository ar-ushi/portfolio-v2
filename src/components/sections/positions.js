import React from 'react';
import { useState } from "react";
import { graphql, useStaticQuery } from 'gatsby';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

export default function Positions() {
    const pdata = useStaticQuery(graphql`
    query{
        positions: allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/positions"}}
        ){
            edges{
                node{
                    frontmatter{
                        title
                        name
                    }
                    html
                }
            }
        }
    }
    `)
    const posData = pdata.positions.edges;
    return(
        <section>
        <h2 className = "heading">Achievements & Positions of Responsibility</h2>
        <AnimateSharedLayout>
            <motion.ul layout>
            {posData && posData.map(({ node }, i ) => (
            <Item key={i} />
            ))}
            </motion.ul>
        </AnimateSharedLayout>
        </section>
    )
}

function Item() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);
    return (
        <motion.li layout onClick= {toggleOpen} inital = {{ borderRadius: 5 }}>
            <motion.div  layout/>
            <AnimatePresence> {isOpen && <Content />}</AnimatePresence>
        </motion.li>
    );
}

function Content() {
    return (
        <motion.div 
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}  
        >
            <div />
        </motion.div>
    )
}