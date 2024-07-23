import React from 'react'
import About from './About/index.js'
import Navbar from '../components/Navbar/Navbar.js';
import Footer from '../components/Footer/Footer.js';
import Link from 'next/link'
import emailjs from '@emailjs/browser';

export default function Home () {
  return (
    
    <div>
        <div> 
        {/* <script type="text/javascript"
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
    <div></div>
    <Footer />
    </div>
  )
}
