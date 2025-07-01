import React, { useEffect, useState } from 'react';
import styles from './AboutPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faCheckCircle, faUsers, faHandshake, faChartLine, faStar } from '@fortawesome/free-solid-svg-icons';
import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import ClipLoader from 'react-spinners/ClipLoader';

function AboutPage() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const aboutDoc = await getDoc(doc(db, 'about', 'page'));
        if (aboutDoc.exists()) {
          setAboutData(aboutDoc.data());
        } else {
          setAboutData({
            description: '',
            goals: [],
            vision: { text: '', points: [] },
            values: [],
            owners: []
          });
        }
      } catch (error) {
        setAboutData({
          description: '',
          goals: [],
          vision: { text: '', points: [] },
          values: [],
          owners: []
        });
      } finally {
        setLoading(false);
      }
    };
    fetchAboutData();
  }, []);

  if (loading || !aboutData) {
    return (
      <div className='loading'>
        <ClipLoader size={40} color="#bfa046" />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>عن الفراعنة</h1>
        <p className={styles.pageDescription}>
          {aboutData.description}
        </p>
      </div>

      {/* قسم أهدافنا */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>أهدافنا</h2>
        </div>
        <div className={styles.goalsContainer}>
          {aboutData.goals && aboutData.goals.length > 0 ? (
            aboutData.goals.map((goal, idx) => (
              <div key={idx} className={`card ${styles.goalCard}`}>
                <div className={styles.goalIcon}>
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
                <h3 className={styles.goalTitle}>{goal.title}</h3>
                <p className={styles.goalDescription}>{goal.description}</p>
              </div>
            ))
          ) : (
            <p>لا توجد أهداف حالياً.</p>
          )}
        </div>
      </section>

      {/* قسم رؤيتنا */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>رؤيتنا</h2>
        </div>
        <div className={styles.visionContainer}>
          <div className={styles.visionContent}>
            <p className={styles.visionText}>
              {aboutData.vision?.text}
            </p>
            <ul className={styles.visionList}>
              {aboutData.vision?.points && aboutData.vision.points.length > 0 ? (
                aboutData.vision.points.map((point, idx) => (
                  <li key={idx}>
                    <FontAwesomeIcon icon={faCheckCircle} className={styles.listIcon} />
                    <span>{point}</span>
                  </li>
                ))
              ) : (
                <li>لا توجد نقاط للرؤية حالياً.</li>
              )}
            </ul>
          </div>
          <div className={styles.visionImage}>
            <img src={aboutData.vision?.imgSrc ? aboutData.vision.imgSrc : "/images/vision.png"} alt="Vision logo" />
          </div>
        </div>
      </section>

      {/* قسم قيمنا */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>قيمنا</h2>
        </div>
        <div className={styles.valuesContainer}>
          {aboutData.values && aboutData.values.length > 0 ? (
            aboutData.values.map((value, idx) => (
              <div key={idx} className={`card ${styles.valueCard}`}>
                <div className={styles.valueIcon}>
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))
          ) : (
            <p>لا توجد قيم حالياً.</p>
          )}
        </div>
      </section>

      {/* قسم ملاك الشركة */}
      <section className={`dm ${styles.ownersSection}`}>
        <h2 className={styles.ownersTitle}>ملاك الشركة</h2>
        <div className={styles.ownersGrid}>
          {aboutData.owners && aboutData.owners.length > 0 ? (
            aboutData.owners.map((owner, idx) => (
              <div key={idx} className={`card ${styles.ownerCard}`}>
                <img src={owner.image} alt={owner.name} className={styles.ownerImage} />
                <h3 className={styles.ownerName}>{owner.name}</h3>
                <p className={styles.ownerRole}>{owner.role}</p>
                <p className={styles.ownerDescription}>{owner.description}</p>
              </div>
            ))
          ) : (
            <p>لا يوجد ملاك حالياً.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default AboutPage;