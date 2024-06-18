import styles from './Portfolio.module.scss'
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';


export default function Portfolio() {
return (

    // Code for 'fade in' transition
    <motion.div
    className="page1"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 1 } }}
    exit={{ opacity: 0 }}
  >

    <Navbar />

    <div className={styles.portfolio}>
        <h1>Portfolio</h1>
        <div className={styles.divider}></div>
        <p>Here are some of my projects:</p>
        <ul>
                <a href="https://github.com/PaulRusz/Personal-Note-Taker" target="_blank" rel=""> Personal Note App </a>
        </ul>
        <div className={styles.divider2}></div>
        <ul>
                <a href="https://github.com/PaulRusz/Group-Project1" target="_blank" rel=""> Workout Tracker</a>
        </ul>
        <div className={styles.divider2}></div>
        <ul>
                <a href="https://workout-tracker-3b0i.onrender.com/" target="_blank" rel=""> Workout Tracker 2.0</a>
        </ul>
        <div className={styles.divider2}></div>
        <ul>
                <a href="https://github.com/PaulRusz/project2" target="_blank" rel=""> Project 4</a>
        </ul>
        <div className={styles.divider2}></div>
        <ul>
                <a href="https://github.com/PaulRusz/project2" target="_blank" rel=""> Project 5</a>
        </ul>
        <div className={styles.divider2}></div>
        <ul>
                <a href="https://github.com/PaulRusz/project2" target="_blank" rel=""> Project 6</a>
        </ul>
    </div>

</motion.div>
)
}