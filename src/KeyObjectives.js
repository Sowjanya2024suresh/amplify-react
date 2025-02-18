import React from 'react';
import styles from './TrainingPage.module.css';

function KeyObjectives() {
  const objectives = [
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f05032ad9ed4be02779fed28c6af6cb054d885ff98283d978482e36c801ea27?placeholderIfAbsent=true&apiKey=b009527b14c646d8a5f31ccb61a60ff1", text: "To provide practical experience" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e26fe2c46300ae4d519178af38e3733b276070742e408d7abd2d75fead0d8225?placeholderIfAbsent=true&apiKey=b009527b14c646d8a5f31ccb61a60ff1", text: "To support participants" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/911ed210decd04423d0bd4d2a265e6c792184506701a47423d52741399ee0882?placeholderIfAbsent=true&apiKey=b009527b14c646d8a5f31ccb61a60ff1", text: "To offer mentorship and networking" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8ae405ca9b894c8571455d3c1f70c6c6cd8e9761114254a6872c594a3065a225?placeholderIfAbsent=true&apiKey=b009527b14c646d8a5f31ccb61a60ff1", text: "Career counseling and personal development" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d07416bfbb64e7139a4614a9fca83839a3a36565a9a725ebd525ff7c8276af71?placeholderIfAbsent=true&apiKey=b009527b14c646d8a5f31ccb61a60ff1", text: "Internships and job placement opportunities" }
  ];

  return (
    <section className={styles.keyObjectivesSection}>
      <h2 className={styles.objectivesTitle}><span className={styles.highlight}>Key</span> Objectives</h2>
      <div className={styles.objectivesGrid}>
        {objectives.map((objective, index) => (
          <div key={index} className={styles.objectiveCard}>
            <img src={objective.image} alt="" className={styles.objectiveImage} />
            <p className={styles.objectiveText}>{objective.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default KeyObjectives;

