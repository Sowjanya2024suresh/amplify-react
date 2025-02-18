// Latest News JS

import React from 'react';
import styles from './TrainingPage.module.css';

function LatestNews() {
  return (
    <section className={styles.latestNewsSection}>
      <div className={styles.newsSidebar}>
        <h2 className={styles.newsTitle}>Latest <span className={styles.highlight}>News</span></h2>
        <p className={styles.newsSubtitle}>Lorem ipsum dolor sit amet. Quo.</p>
        <button className={styles.viewAllButton}>View All News</button>
      </div>
      <article className={styles.newsArticle}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d90252f1059ccfbf6208400d30ccac08350e6c6ced8faebbed59112ba22cb9a4?placeholderIfAbsent=true&apiKey=b009527b14c646d8a5f31ccb61a60ff1" alt="News article image" className={styles.newsImage} />
        <div className={styles.newsContent}>
          <p className={styles.newsMetadata}>
            CATEGORY <span className={styles.metaSeparator}>•</span> JUNE 2023
          </p>
          <p className={styles.newsText}>
            Lorem ipsum dolor sit amet. Qui rerum rerum est culpa laborum ex itaque libero! Aut nihil autem est necessitatibus voluptatibus cum voluptas esse. itaque libero! Aut nihil autem est necessitatibus. Aut nihil autem est necessitatibus voluptatibus cum voluptas esse. itaque libero! Aut nihil autem est necessitatibus.
          </p>
          <a href="#" className={styles.readMoreLink}>Read more</a>
        </div>
      </article>
    </section>
  );
}

export default LatestNews;

