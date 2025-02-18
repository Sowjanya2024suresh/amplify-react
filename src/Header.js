import React from 'react';
import styles from './TrainingPage.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4828188a4066e8235fe739631a9951f3f82ed33019addb2d2d1dc1da3fc6b98?placeholderIfAbsent=true&apiKey=b009527b14c646d8a5f31ccb61a60ff1" alt="" className={styles.contactIcon} />
          <span className={styles.contactText}>+91-7200011175</span>
        </div>
        <div className={styles.contactItem}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6486148a3fbd0e521041e7a17a22511dc588850fb7ca8f6c0c331a5aaf0b14d?placeholderIfAbsent=true&apiKey=b009527b14c646d8a5f31ccb61a60ff1" alt="" className={styles.contactIcon} />
          <span className={styles.contactText}>info@igiver.org</span>
        </div>
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b323d0b57de86235fc941484aae0a0d1e23437367f9c93a7413a9db9a02ebb1?placeholderIfAbsent=true&apiKey=b009527b14c646d8a5f31ccb61a60ff1" alt="iGiver logo" className={styles.logo} />
    </header>
  );
}

export default Header;

