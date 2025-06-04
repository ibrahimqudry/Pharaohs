import React, { useState } from 'react';
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

function InvestmentPage() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const investmentOpportunities = [
    {
      id: 1,
      title: "الاستثمار في الوحدات السكنية",
      icon: faBuilding,
      description: "فرصة للاستثمار في شقق وفلل سكنية فاخرة في مواقع استراتيجية بأسوان الجديدة، مع عائد استثماري يصل إلى 15% سنوياً.",
      minInvestment: "1,500,000 جنيه",
      expectedReturn: "12-15% سنوياً",
      period: "3-5 سنوات"
    },
    {
      id: 2,
      title: "الاستثمار في المحلات التجارية",
      icon: faMoneyBillWave,
      description: "استثمر في المحلات والمساحات التجارية في مشاريعنا المميزة، واستفد من الموقع الاستراتيجي والإقبال المتزايد.",
      minInvestment: "2,000,000 جنيه",
      expectedReturn: "15-18% سنوياً",
      period: "3-7 سنوات"
    },
    {
      id: 3,
      title: "الاستثمار في الأراضي",
      icon: faMapMarkedAlt,
      description: "فرصة للاستثمار في قطع أراضي استراتيجية في أسوان الجديدة، مع توقعات بارتفاع قيمتها بنسبة تصل إلى 40% خلال السنوات القادمة.",
      minInvestment: "800,000 جنيه",
      expectedReturn: "20-25% سنوياً",
      period: "5-10 سنوات"
    },
    {
      id: 4,
      title: "الشراكة في المشاريع",
      icon: faHandshake,
      description: "فرصة للدخول كشريك في مشاريعنا العقارية المتميزة، مع ضمان الشفافية الكاملة والمتابعة المستمرة لسير العمل.",
      minInvestment: "5,000,000 جنيه",
      expectedReturn: "25-30% على المشروع",
      period: "حسب المشروع"
    }
  ];

  const investmentBenefits = [
    {
      icon: faChartLine,
      title: "عوائد استثمارية مرتفعة",
      description: "عوائد تصل إلى 30% على المشاريع الاستثمارية"
    },
    {
      icon: faShieldAlt,
      title: "استثمار آمن ومضمون",
      description: "ضمانات قانونية وعقارية تحمي استثمارك"
    },
    {
      icon: faCertificate,
      title: "خبرة 20 عام",
      description: "فريق متخصص بخبرة طويلة في السوق العقاري"
    },
    {
      icon: faPercentage,
      title: "خطط سداد مرنة",
      description: "أنظمة سداد متنوعة تناسب جميع المستثمرين"
    }
  ];

  const faqs = [
    {
      question: "ما هو الحد الأدنى للاستثمار في مشاريع الفراعنة؟",
      answer: "يختلف الحد الأدنى للاستثمار حسب نوع الفرصة الاستثمارية، حيث يبدأ من 800,000 جنيه للاستثمار في الأراضي، و1,500,000 جنيه للوحدات السكنية، و2,000,000 جنيه للمحلات التجارية."
    },
    {
      question: "ما هي مدة الاستثمار المتوقعة؟",
      answer: "تتراوح مدة الاستثمار بين 3-10 سنوات حسب نوع الاستثمار، مع إمكانية التخارج المبكر وفقاً لشروط محددة في العقد."
    },
    {
      question: "هل هناك ضمانات للاستثمار؟",
      answer: "نعم، نقدم ضمانات قانونية وعقارية كاملة لحماية استثمارك، بالإضافة إلى عقود موثقة وصكوك ملكية واضحة."
    },
    {
      question: "كيف يتم توزيع العوائد الاستثمارية؟",
      answer: "يتم توزيع العوائد الاستثمارية بشكل دوري (سنوي أو نصف سنوي) حسب نوع الاستثمار والاتفاق المبرم، مع تقارير دورية عن أداء الاستثمار."
    },
    {
      question: "هل يمكنني زيارة المشاريع قبل الاستثمار؟",
      answer: "بالتأكيد، نرحب بزيارتكم لمشاريعنا في أي وقت، ويمكننا ترتيب جولات ميدانية مع مستشارينا العقاريين لشرح تفاصيل المشاريع والفرص الاستثمارية المتاحة."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكن إضافة كود للتعامل مع إرسال النموذج
    alert('تم إرسال طلبك بنجاح، سيتواصل معك أحد مستشارينا قريباً!');
  };

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
              <div key={opportunity.id} className={styles.opportunityCard}>
                <div className={styles.opportunityIcon}>
                  <FontAwesomeIcon icon={opportunity.icon} />
                </div>
                <h3 className={styles.opportunityTitle}>{opportunity.title}</h3>
                <p className={styles.opportunityDescription}>{opportunity.description}</p>
                <div className={styles.opportunityDetails}>
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
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <FontAwesomeIcon icon={benefit.icon} />
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
          <div className={styles.faqContainer}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <div 
                  className={`${styles.faqQuestion} ${activeAccordion === index ? styles.active : ''}`}
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

        {/* Contact Form */}
        <section className={styles.contactSection}>
          <h2 className={styles.sectionTitle}>تواصل معنا للاستفسار</h2>
          <div className={styles.contactContainer}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">الاسم</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">البريد الإلكتروني</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">رقم الهاتف</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="investmentType">نوع الاستثمار المهتم به</label>
                <select id="investmentType" name="investmentType" required>
                  <option value="">اختر نوع الاستثمار</option>
                  <option value="residential">وحدات سكنية</option>
                  <option value="commercial">محلات تجارية</option>
                  <option value="land">أراضي</option>
                  <option value="partnership">شراكة في المشاريع</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="investmentAmount">مبلغ الاستثمار التقريبي</label>
                <select id="investmentAmount" name="investmentAmount" required>
                  <option value="">اختر المبلغ التقريبي</option>
                  <option value="less-than-1m">أقل من مليون جنيه</option>
                  <option value="1m-3m">من مليون إلى 3 مليون جنيه</option>
                  <option value="3m-5m">من 3 مليون إلى 5 مليون جنيه</option>
                  <option value="more-than-5m">أكثر من 5 مليون جنيه</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">رسالتك</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="gold-button">إرسال الطلب</button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default InvestmentPage;