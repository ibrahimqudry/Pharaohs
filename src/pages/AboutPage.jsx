import React from 'react';
import styles from './AboutPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faCheckCircle, faUsers, faHandshake, faChartLine, faStar } from '@fortawesome/free-solid-svg-icons';
function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>عن الفراعنة</h1>
        <p className={styles.pageDescription}>
          شركة الفراعنة للتطوير العقاري هي شركة رائدة في مجال التطوير العقاري في مصر، نسعى لتقديم مشاريع سكنية وتجارية متميزة تجمع بين الأصالة والحداثة.
        </p>
      </div>

      {/* قسم أهدافنا */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>أهدافنا</h2>
        </div>
        <div className={styles.goalsContainer}>
          <div className={styles.goalCard}>
            <div className={styles.goalIcon}>
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <h3 className={styles.goalTitle}>التميز في التطوير العقاري</h3>
            <p className={styles.goalDescription}>
              نسعى لتقديم مشاريع عقارية متميزة تلبي احتياجات عملائنا وتتجاوز توقعاتهم من حيث الجودة والتصميم والخدمات.
            </p>
          </div>

          <div className={styles.goalCard}>
            <div className={styles.goalIcon}>
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <h3 className={styles.goalTitle}>بناء مجتمعات متكاملة</h3>
            <p className={styles.goalDescription}>
              نهدف إلى إنشاء مجتمعات سكنية متكاملة توفر لساكنيها جميع الخدمات والمرافق التي يحتاجونها لحياة مريحة ومتوازنة.
            </p>
          </div>

          <div className={styles.goalCard}>
            <div className={styles.goalIcon}>
              <FontAwesomeIcon icon={faHandshake} />
            </div>
            <h3 className={styles.goalTitle}>بناء علاقات طويلة الأمد</h3>
            <p className={styles.goalDescription}>
              نسعى لبناء علاقات قوية ودائمة مع عملائنا وشركائنا تقوم على الثقة والشفافية والالتزام بتقديم أفضل الخدمات.
            </p>
          </div>
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
              نطمح أن نكون الشركة الرائدة في مجال التطوير العقاري في مصر والشرق الأوسط، من خلال تقديم مشاريع مبتكرة ومستدامة تجمع بين الأصالة والحداثة، وتساهم في تحسين جودة الحياة وتعزيز النمو الاقتصادي.
            </p>
            <ul className={styles.visionList}>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.listIcon} />
                <span>الريادة في تقديم حلول سكنية مبتكرة ومستدامة</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.listIcon} />
                <span>تطوير مشاريع تعكس الهوية المصرية الأصيلة بلمسة عصرية</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.listIcon} />
                <span>المساهمة في تنمية المجتمع وتحسين جودة الحياة</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.listIcon} />
                <span>تعزيز مكانة مصر كوجهة استثمارية جاذبة في مجال العقارات</span>
              </li>
            </ul>
          </div>
          <div className={styles.visionImage}>
            <img src="/images/vision.png" alt="Vision logo" />
          </div>
        </div>
      </section>

      {/* قسم قيمنا */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>قيمنا</h2>
        </div>
        <div className={styles.valuesContainer}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <FontAwesomeIcon icon={faStar} />
            </div>
            <h3 className={styles.valueTitle}>الجودة</h3>
            <p className={styles.valueDescription}>
              نلتزم بأعلى معايير الجودة في جميع مشاريعنا، من التصميم إلى التنفيذ والتسليم، لضمان رضا عملائنا.
            </p>
          </div>

          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <FontAwesomeIcon icon={faGem} />
            </div>
            <h3 className={styles.valueTitle}>الابتكار</h3>
            <p className={styles.valueDescription}>
              نسعى دائمًا لتقديم حلول مبتكرة وتصاميم فريدة تلبي احتياجات العملاء وتواكب أحدث التوجهات العالمية.
            </p>
          </div>

          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <FontAwesomeIcon icon={faHandshake} />
            </div>
            <h3 className={styles.valueTitle}>النزاهة</h3>
            <p className={styles.valueDescription}>
              نؤمن بأهمية الشفافية والصدق في جميع تعاملاتنا مع العملاء والشركاء والموظفين.
            </p>
          </div>

          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <h3 className={styles.valueTitle}>العمل الجماعي</h3>
            <p className={styles.valueDescription}>
              نعمل كفريق واحد لتحقيق أهدافنا المشتركة، ونقدر مساهمة كل فرد في نجاح الشركة.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;