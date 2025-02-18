
import React from 'react';
import styles from './TrainingPage.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <h2 className={styles.footerTitle}>CONNECT WITH US</h2>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdd5b15da0c65fa0eb9550808921315857d7691bf8e16c5beeda7b0258603835?placeholderIfAbsent=true&apiKey=b009527b14c646d8a5f31ccb61a60ff1" alt="Social media icons" className={styles.socialIcons} />
        <p className={styles.footerEmail}>info@igiver.org</p>
      </div>
      <div className={styles.copyright}>
        © iGiver Vizhudugal. All Right Reserved 2024.
      </div>
    </footer>
  );
}

export default Footer;

