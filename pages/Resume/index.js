import styles from './Resume.module.scss';
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Resume () {
    return (
      // Code for 'fade in' transition
      <motion.div
        className="page1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
      >

        <Navbar />

        <div className={styles.resumeContainer}>
          <h1>Resume</h1>
          <div className={styles.divider}></div>
          <div className={styles.resumeContent}>
            <a
              className={styles.resumeButton}
              href="https://drive.google.com/file/d/1B4pP-tSPWAWygiHZH3iD19f2UidwRtTx/view?usp=drive_link"
              download="Resume.pdf"
            >
              Download my CV
            </a>
            <h2>Summary</h2>
            <p>Background:</p>
          </div>
  
          <div className={styles.divider2}></div>
  
          <div className={styles.resumeContainer2}>
            <div className={styles.resumeColumn}>
              <h2>Technical Skills</h2>
              <ul>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
              <div className={styles.divider}></div>
  
              <h2>Frontend Tech</h2>
              <ul>
                <li>React.js</li>
                <li>Bootstrap</li>
                <li>Responsive Web Design</li>
              </ul>
              <div className={styles.divider}></div>
  
              <h2>BackEnd Tech</h2>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
              </ul>
            </div>
  
            <div className={styles.resumeColumn}>
              <h2>Deployment & Hosting</h2>
              <ul>
                <li>Heroku</li>
                <li>Netlify</li>
              </ul>
              <div className={styles.divider}></div>
  
              <h2>Databases</h2>
              <ul>
                <li>SQL</li>
                <li>NoSQL</li>
              </ul>
              <div className={styles.divider}></div>
  
              <h2>Development Tools</h2>
              <ul>
                <li>Visual Studio Code</li>
              </ul>
              <div className={styles.divider}></div>
  
              <h2>Other Skills</h2>
              <ul>
                <li>Problem-Solving</li>
                <li>Collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
  
  