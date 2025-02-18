// React JS Training page Code

import React from 'react';
import styles from './TrainingPage.module.css';
import Header from './Header';
import Navigation from './Navigation';
import Mission from './Mission';
import LatestNews from './LatestNews';
import KeyObjectives from './KeyObjectives';
import Testimonial from './Testimonial';
import Partners from './Partners';
import Footer from './Footer';

function TrainingPage() {
  return (
    <div className={styles.trainingPageHome}>
      <Header />
      <Navigation />
      <section className={styles.heroSection}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbb1556a9d213b14e1d0914f81e1bbaa4037d797edb9265ffb15089b68f70338?placeholderIfAbsent=true&apiKey=b009527b14c646d8a5f31ccb61a60ff1" alt="Women in technology" className={styles.heroImage} />
        <h1 className={styles.heroTitle}>Empowering Women for the <br /> Digital Future</h1>
      </section>
      <Mission />
      <LatestNews />
      <KeyObjectives />
      <Testimonial />
      <Partners />
      <Footer />
    </div>
  );
}

export default TrainingPage;

