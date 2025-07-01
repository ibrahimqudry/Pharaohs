import React, { useState, useEffect } from 'react';
import styles from './InvestmentPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faHandshake,
  faBuilding,
  faMapMarkedAlt,
  faMoneyBillWave,
  faShieldAlt,
  faCertificate,
  faPercentage,
  faQuestionCircle,
  faChevronDown,
  faChevronUp
} from '@fortawesome/free-solid-svg-icons';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import ClipLoader from 'react-spinners/ClipLoader';

export default function InvestmentPage() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [investmentOpportunities, setInvestmentOpportunities] = useState([]);
  const [investmentBenefits, setInvestmentBenefits] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const iconMap = {
    building: faBuilding,
    handshake: faHandshake,
    moneyBillWave: faMoneyBillWave,
    mapMarkedAlt: faMapMarkedAlt,
    chartLine: faChartLine,
    shieldAlt: faShieldAlt,
    certificate: faCertificate,
    percentage: faPercentage,
    questionCircle: faQuestionCircle
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const oppSnap = await getDocs(collection(db, 'investmentOpportunities'));
        setInvestmentOpportunities(oppSnap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        const benSnap = await getDocs(collection(db, 'investmentBenefits'));
        setInvestmentBenefits(benSnap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        const faqSnap = await getDocs(collection(db, 'investmentFaqs'));
        setFaqs(faqSnap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        setInvestmentOpportunities([]);
        setInvestmentBenefits([]);
        setFaqs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <ClipLoader size={40} color="#bfa046" />
      </div>
    );
  }

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <h1 className={styles.pageTitle}>فرص الاستثمار</h1>
          <p className={styles.pageDescription}>اكتشف فرص استثمارية متميزة مع شركة الفراعنة للتطوير العقاري، عوائد مضمونة وفرص متنوعة</p>
        </section>

        {/* Investment Opportunities */}
        <section className={styles.opportunitiesSection}>
          <h2 className={styles.sectionTitle}>فرص استثمارية متاحة</h2>
          <div className={styles.opportunitiesGrid}>
            {investmentOpportunities.map((opportunity) => (
              <div key={opportunity.id} className={`card ${styles.opportunityCard}`}>
                <div className={styles.opportunityIcon}>
                  <FontAwesomeIcon icon={iconMap[opportunity.icon]} />
                </div>
                <h3 className={styles.opportunityTitle}>{opportunity.title}</h3>
                <p className={styles.opportunityDescription}>{opportunity.description}</p>
                <div className={`dmBackground ${styles.opportunityDetails}`}>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>الحد الأدنى للاستثمار:</span>
                    <span className={styles.detailValue}>{opportunity.minInvestment}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>العائد المتوقع:</span>
                    <span className={styles.detailValue}>{opportunity.expectedReturn}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>المدة:</span>
                    <span className={styles.detailValue}>{opportunity.period}</span>
                  </div>
                </div>
                <a href="/contact" className={styles.opportunityButton}>استفسار</a>
              </div>
            ))}
          </div>
        </section>

        {/* Why Invest With Us */}
        <section className={styles.benefitsSection}>
          <h2 className={styles.sectionTitle}>لماذا تستثمر مع الفراعنة؟</h2>
          <div className={styles.benefitsGrid}>
            {investmentBenefits.map((benefit, index) => (
              <div key={index} className={`card ${styles.benefitCard}`}>
                <div className={styles.benefitIcon}>
                  <FontAwesomeIcon icon={iconMap[benefit.icon]} />
                </div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Section */}
        <section className={styles.faqSection}>
          <h2 className={styles.sectionTitle}>الأسئلة الشائعة</h2>
          <div className={`container ${styles.faqContainer}`}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <div
                  className={`${styles.faqQuestion} ${activeAccordion === index ? styles.active : 'dm'}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span><FontAwesomeIcon icon={faQuestionCircle} className={styles.questionIcon} /> {faq.question}</span>
                  <FontAwesomeIcon
                    icon={activeAccordion === index ? faChevronUp : faChevronDown}
                    className={styles.accordionIcon}
                  />
                </div>
                <div className={`${styles.faqAnswer} ${activeAccordion === index ? styles.active : ''}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}