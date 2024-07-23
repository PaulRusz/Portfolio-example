import React from 'react'
// import About from './about/index.js'
import Navbar from '../components/Navbar/Navbar.js';
import Footer from '../components/Footer/Footer.js';
import Link from 'next/link'
import emailjs from '@emailjs/browser';
import styles from '../components/index.module.css'

export default function Home () {
  return (
    
    <div>
        <div> 
        {/* code for email being sent but does not appear to function properly
        <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
        </script>
        <script type="text/javascript">
        (function(){
      emailjs.init({
        publicKey: "7fbEPFKwQg92_gfOL",
         })
        })();
        </script> */}
        </div>
    <Navbar />

    <div className={styles.homepageContainer}>

        <div className={styles.homepageImage}>

        </div>

        <div className={styles.homepageTextContainer}>
            <p className={styles.homepageText}>
                Hey there, I'm Paul!
                <br></br>
                I'm fascinated with solving complex problems, learning new things, and creating projects.
                <br></br>
                Take a look around.
            </p>
        </div>

    </div>
    <div></div>

    <Footer />
    </div>
  )
}
