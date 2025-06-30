import styles from './WhyInvest.module.css';

function WhyInvest() {
  const reasons = [
    {
      icon: '🏗️',
      title: 'خبرة 20 عام',
      description: 'في مجال التطوير العقاري'
    },
    {
      icon: '📈',
      title: 'عائد استثماري مضمون',
      description: 'يصل إلى 20% سنوياً'
    },
    {
      icon: '📍',
      title: 'موقع استراتيجي',
      description: 'في قلب أسوان الجديدة'
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