// Partners JS

import React from 'react';
import styles from './TrainingPage.module.css';

function Partners() {
  const partners = [
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b624e553575026fc769a53bf104391dc7931b986880e8f1d3a31c27c818c021c?placeholderIfAbsent=true&apiKey=b009527b14c646d8a5f31ccb61a60ff1", alt: "Partner logo" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3a2ce89ade454779712115f6885e9c8b2850a6353ab424d19eb35c592e0327ed?placeholderIfAbsent=true&apiKey=b009527b14c646d8a5f31ccb61a60ff1", alt: "Partner logo" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ee9d6a6bbc83003dbe9a35892056d2344c4484800678171c19972cc36c637d37?placeholderIfAbsent=true&apiKey=b009527b14c646d8a5f31ccb61a60ff1", alt: "Partner logo" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d66c9af57e43bed71d9cdacca74c6405599df4b1ea7f173dc966ff5b4a16661e?placeholderIfAbsent=true&apiKey=b009527b14c646d8a5f31ccb61a60ff1", alt: "Partner logo" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/802e375209db3ddd215d4a06ac2b11b0606625bb5429d0ae7bbd996d51b5e205?placeholderIfAbsent=true&apiKey=b009527b14c646d8a5f31ccb61a60ff1", alt: "Partner logo" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/19ad6c3d0d3c9d7ccd3b7fd0c3b4d6500d4d3acdefb971e1a82256402cbe2121?placeholderIfAbsent=true&apiKey=b009527b14c646d8a5f31ccb61a60ff1", alt: "Partner logo" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/179ed7aabd25dd3161059f68ee53a86019767c9a896ab7088ce795b8d3963ba3?placeholderIfAbsent=true&apiKey=b009527b14c646d8a5f31ccb61a60ff1", alt: "Partner logo" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8e454c61b9ff9bdfb53b028cb3e71ccdb8b4bf5b68bbc237189d49bcc1a7593f?placeholderIfAbsent=true&apiKey=b009527b14c646d8a5f31ccb61a60ff1", alt: "Partner logo" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/80f006e4b394907cc3740da56017498c2f789d524738e11661dc0102553eebf5?placeholderIfAbsent=true&apiKey=b009527b14c646d8a5f31ccb61a60ff1", alt: "Partner logo" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/709c9f97bbd6ee3bc0ae9ee667c3a26a6e370e1c43307095736c208d274ddb2a?placeholderIfAbsent=true&apiKey=b009527b14c646d8a5f31ccb61a60ff1", alt: "Partner logo" }
  ];

  return (
    <section className={styles.partnersSection}>
      <h2 className={styles.partnersTitle}><span className={styles.highlight}>Our</span> Partners</h2>
      <div className={styles.partnersGrid}>
        {partners.map((partner, index) => (
          <div key={index} className={styles.partnerCard}>
            <img src={partner.image} alt={partner.alt} className={styles.partnerLogo} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Partners;

