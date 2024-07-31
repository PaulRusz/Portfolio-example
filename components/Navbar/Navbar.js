import React from 'react';
import styles from './Navbar.module.css'
import Link from 'next/link';
import { useState } from 'react';


export default function Navbar({ children }) {

    const [showMenu, setShowMenu] = useState(false);

    // return <div className={styles.container}>{children}
    
    // <nav className={styles.navbar}>
    // <div>
    //     <Link href="/">
    //         <p className={ `${styles.logo} ${styles.logoButton} `} > PR </p>
    //     </Link>
    //   </div>

    //   <button className={styles.hamburgerMenu} onClick={() => setShowMenu(!showMenu)}>
    //     &#9776;
    //   </button>

    //         <ul className={`${styles.links} ${showMenu ? styles.show : ''}`}>
    //         {/* <li><Link href="/" className={styles.links}>Home</Link></li> */}
    //             <li><Link href="/about" className={styles.links}>About</Link></li>
    //             <li><Link href="/portfolio" className={styles.links}>Portfolio</Link> </li>
    //             <li><Link href="/contact" className={styles.links}>Contact</Link></li>
    //             <li><Link href="/resume" className={styles.links}>Resume</Link></li>
    //         </ul>

    //     </nav>
    // </div>

return (
    <div className={styles.container}>
        {children}
        <nav className={`${styles.navbar} ${showMenu ? styles.show : ''}`}>
            <div>
                <Link href="/">
                    <p className={`${styles.logo} ${styles.logoButton}`}>PR</p>
                </Link>
            </div>

            <button className={styles.hamburgerMenu} onClick={() => setShowMenu(!showMenu)}>
                &#9776;
            </button>

            <ul className={`${styles.links} ${showMenu ? styles.showMenu : ''}`}>
            <li><Link href="/about"><a className={styles.links}>About</a></Link></li>
            <li><Link href="/portfolio"><a className={styles.links}>Portfolio</a></Link></li>
            <li><Link href="/contact"><a className={styles.links}>Contact</a></Link></li>
            <li><Link href="/resume"><a className={styles.links}>Resume</a></Link></li>
            </ul>
        </nav>
    </div>
);
    
}