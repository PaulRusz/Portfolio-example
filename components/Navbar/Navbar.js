import React from 'react';
import styles from './Navbar.module.css'
import Link from 'next/link';


export default function Navbar({ children }) {
    return <div className={styles.container}>{children}
    
    <nav className={styles.navbar}>
    <div>
        <p className={styles.logo}> PR </p>
      </div>

      <button className={styles.hamburgerMenu} onClick={() => setShowMenu(!showMenu)}>
        &#9776;
      </button>

            <ul>

            <li><Link href="/" className={styles.links}>Home</Link></li>
                <li><Link href="/About" className={styles.links}>About</Link></li>
                <li><Link href="/Contact" className={styles.links}>Contact</Link></li>
                <li><Link href="/Resume" className={styles.links}>Resume</Link></li>

            </ul>
        </nav>
    </div>
    
}