import React from 'react'
// import About from './about/index.js'
import Navbar from '../components/Navbar/Navbar.js';
import Footer from '../components/Footer/Footer.js';
import Link from 'next/link'
import emailjs from '@emailjs/browser';
import styles from '../components/index.module.css'
import ImageSlider from '../components/ImageSlider/ImageSlider.tsx'
import ImageSlider2 from '../components/ImageSlider/ImageSlider2.tsx'

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

        <div className={styles.homepageSlideShow}>
        <title>Image Slider</title>
        <meta name="description" content="Image slider example with Next.js, Tailwind CSS, and TypeScript" />
        <link rel="icon" href="/favicon.ico" />

      <main className="flex min-h-screen flex-col items-center justify-center py-2">
        <ImageSlider />
        </main>
        </div>

        <div className={styles.homepageTextContainer}>
          <h1>Hey, I'm Paul!
          </h1>
          <div className={styles.divider3}></div>
            <p className={styles.homepageText}>
              
                {/* <br></br>
                I'm fascinated with solving complex problems, learning new things, and creating projects.
                <br></br> */}
                Take a look around.
            </p>
        </div>

        <div className={styles.homepageSlideShow2}>
        <title>Image Slider</title>
        <meta name="description" content="Image slider example with Next.js, Tailwind CSS, and TypeScript" />
        <link rel="icon" href="/favicon.ico" />

      <main className="flex min-h-screen flex-col items-center justify-center py-2">
        <ImageSlider2 />
        </main>
        </div>

    </div>
    <div></div>

    <Footer />
    </div>
  )
}
