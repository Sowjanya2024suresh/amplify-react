// Navigation JS

import React from 'react';
import styles from './TrainingPage.module.css';

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6666a400ed624500c8676c81f096e0606829728a856b4cbc48be86b9beea6f1e?placeholderIfAbsent=true&apiKey=b009527b14c646d8a5f31ccb61a60ff1" alt="iGiver logo" className={styles.navLogo} />
      <ul className={styles.navList}>
        // <li className={styles.navItem}><a href="#home" className={styles.navLink}>Home</a></li>
        <li className={styles.navItem}><a href="#methodology" className={styles.navLink}>Methodology</a></li>
        <li className={styles.navItem}><a href="#team" className={styles.navLink}>Team</a></li>
        <li className={styles.navItem}><a href="#impact" className={styles.navLink}>Impact</a></li>
        <li className={styles.navItem}><a href="#alumnae" className={styles.navLink}>Alumnae chapter</a></li>
        <li className={styles.navItem}><a href="#news" className={styles.navLink}>News</a></li>
        <li className={styles.navItem}><a href="#contact" className={styles.navLink}>Get In Touch</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;

