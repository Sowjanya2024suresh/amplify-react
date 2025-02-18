// Testimonial JS

import React from 'react';
import styles from './TrainingPage.module.css';

function Testimonial() {
  return (
    <section className={styles.testimonialSection}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ba3aa231cfd879d4c64ae76d29d7add1c89855462d77b15a679ce0f98a2f74e?placeholderIfAbsent=true&apiKey=b009527b14c646d8a5f31ccb61a60ff1" alt="Background image" className={styles.testimonialBackground} />
      <div className={styles.testimonialContent}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ee801d594fcb55518373f8ad0bb2dd1bf3915d59edb74f80e668b4ed8c0314a?placeholderIfAbsent=true&apiKey=b009527b14c646d8a5f31ccb61a60ff1" alt="Quote icon" className={styles.quoteIcon} />
        <p className={styles.testimonialText}>
          <strong>94% of participants</strong> shared that the program was pivotal in launching their careers, empowering them to contribute to their family's income and gain increased recognition within their communities.
        </p>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f1717734a51dce9a58d5997b59a1411a8e69db2f11e2d41d62cdd1fb96aca25?placeholderIfAbsent=true&apiKey=b009527b14c646d8a5f31ccb61a60ff1" alt="Quote icon" className={styles.quoteIcon} />
      </div>
    </section>
  );
}

export default Testimonial;

