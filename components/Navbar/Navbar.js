import React from 'react';
import styles from './Navbar.module.css'
import Link from 'next/link';
import { useState } from 'react';


export default function Navbar({ children }) {

    const [showMenu, setShowMenu] = useState(false);

    return <div className={styles.container}>{children}
    
    <nav className={styles.navbar}>
    <div>
        <Link href="/">
            <p className={ `${styles.logo} ${styles.logoButton} `} > PR </p>
        </Link>
      </div>

      <button className={styles.hamburgerMenu} onClick={() => setShowMenu(!showMenu)}>
        &#9776;
      </button>

            <ul className={`${styles.links} ${showMenu ? 'show' : ''}`}>
            {/* <li><Link href="/" className={styles.links}>Home</Link></li> */}
                <li><Link href="/About" className={styles.links}>About</Link></li>
                <li><Link href="/Portfolio" className={styles.links}>Portfolio</Link> </li>
                <li><Link href="/Contact" className={styles.links}>Contact</Link></li>
                <li><Link href="/Resume" className={styles.links}>Resume</Link></li>
            </ul>
        </nav>
    </div>
    
}