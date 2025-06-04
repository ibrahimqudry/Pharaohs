import styles from './PharaohsEvents.module.css';

function PharaohsEvents() {
  const events = [
    {
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
      title: "معرض العقارات السنوي",
      date: "15 أكتوبر 2023",
      description: "معرض لأحدث المشاريع العقارية في أسوان الجديدة مع عروض حصرية للزوار"
    },
    {
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
      title: "ندوة الاستثمار العقاري",
      date: "22 نوفمبر 2023",
      description: "ندوة متخصصة حول فرص الاستثمار العقاري وكيفية تحقيق أعلى عائد استثماري"
    },
    {
      image: "https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg",
      title: "جولة في مشاريع الفراعنة",
      date: "5 ديسمبر 2023",
      description: "جولة ميدانية في مشاريع شركة الفراعنة للتعرف على التصاميم والمواصفات عن قرب"
    }
  ];

  return (
    <section className={styles.pharaohsEvents}>
      <div className="container py-16">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>فعاليات الفراعنة</h2>
          <div className={styles.titleDecoration}></div>
        </div>
        
        <div className={styles.eventsGrid}>
          {events.map((event, index) => (
            <div key={index} className={styles.eventCard}>
              <div className={styles.eventImage}>
                <img src={event.image} alt={event.title} />
              </div>
              <div className={styles.eventContent}>
                <div className={styles.eventDate}>{event.date}</div>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <p className={styles.eventDescription}>{event.description}</p>
                <a href="/events" className={styles.eventButton}>التفاصيل</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PharaohsEvents;