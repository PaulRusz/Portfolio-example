import React from 'react'
import About from './About/index.js'
import Navbar from '../components/Navbar/Navbar.js';
import Link from 'next/link'

export default function Home () {
  return (
    <div>
         <Navbar />
    <div>Home</div>
    <About />

    </div>
  )
}
