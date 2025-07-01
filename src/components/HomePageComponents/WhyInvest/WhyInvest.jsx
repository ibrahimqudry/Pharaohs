import styles from './WhyInvest.module.css';

function WhyInvest() {
  const reasons = [
    {
      icon: '📈',
      title: 'لأعلي عوائد استثمار',
      description: 'يصل إلى 20% سنوياً',
    },
    {
      icon: '⏱️',
      title: 'أقل وقت التسليم',
      description: 'تسليم في وقت قياسي',
    },
    {
      icon: '💸',
      title: 'افضل العروض وطرق السداد',
      description: 'مرونة في خيارات الدفع',
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>لماذا تستثمر مع الفراعنة؟</h2>
        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <div key={index} className={`${styles.reasonCard} card`}>
              <div className={styles.reasonIcon}>{reason.icon}</div>
              <h3 className={styles.reasonTitle}>{reason.title}</h3>
              <p className={styles.reasonDescription}>{reason.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <a href="/investment" className="gold-button">اعرف أكتر</a>
        </div>
      </div>
    </section>
  );
}
export default WhyInvest;