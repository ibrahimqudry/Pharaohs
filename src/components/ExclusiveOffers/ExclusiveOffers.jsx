import styles from './ExclusiveOffers.module.css';

function ExclusiveOffers() {
  return (
    <section className={styles.exclusiveOffers}>
      <div className="container py-16">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>عروض حصرية</h2>
          <div className={styles.titleDecoration}></div>
        </div>
        <div className={styles.offersGrid}>
          <div className={styles.offerCard}>
            <div className={styles.offerImage}>
              <img src="/images/offer1.jpg" alt="عرض خاص للفلل" />
            </div>
            <div className={styles.offerContent}>
              <h3 className="text-2xl font-semibold mb-2">فلل فاخرة</h3>
              <p className="mb-4">خصم 15% على الدفعة المقدمة</p>
              <div className={styles.offerDetails}>
                <span>يبدأ من 2.5 مليون جنيه</span>
                <a href="/offers/villas" className={styles.offerButton}>التفاصيل</a>
              </div>
            </div>
          </div>

          <div className={styles.offerCard}>
            <div className={styles.offerImage}>
              <img src="/images/offer2.jpg" alt="عرض خاص للشقق" />
            </div>
            <div className={styles.offerContent}>
              <h3 className="text-2xl font-semibold mb-2">شقق سكنية</h3>
              <p className="mb-4">أقساط تصل إلى 7 سنوات</p>
              <div className={styles.offerDetails}>
                <span>يبدأ من 1.2 مليون جنيه</span>
                <a href="/offers/apartments" className={styles.offerButton}>التفاصيل</a>
              </div>
            </div>
          </div>

          <div className={styles.offerCard}>
            <div className={styles.offerImage}>
              <img src="/images/offer3.jpg" alt="عرض خاص للأراضي" />
            </div>
            <div className={styles.offerContent}>
              <h3 className="text-2xl font-semibold mb-2">قطع أراضي</h3>
              <p className="mb-4">تقسيط حتى 5 سنوات بدون فوائد</p>
              <div className={styles.offerDetails}>
                <span>يبدأ من 800 ألف جنيه</span>
                <a href="/offers/lands" className={styles.offerButton}>التفاصيل</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExclusiveOffers ;