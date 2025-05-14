import styles from './Testimonials.module.css';

function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className="container py-16">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>ما يقوله عملاؤنا</h2>
          <div className={styles.titleDecoration}></div>
        </div>

        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              <div className={styles.quoteIcon}>
                <i className="fas fa-quote-right"></i>
              </div>
              <p className={styles.testimonialText}>استثمرت في فيلا بمشروع الفراعنة وكانت تجربة رائعة. الجودة ممتازة والتسليم كان في الموعد المحدد تمامًا.</p>
              <div className={styles.testimonialRating}>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorImage}>
                <img src="/images/client1.jpg" alt="أحمد محمود" />
              </div>
              <div className={styles.authorInfo}>
                <h4 className={styles.authorName}>أحمد محمود</h4>
                <p className={styles.authorTitle}>مستثمر عقاري</p>
              </div>
            </div>
          </div>

          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              <div className={styles.quoteIcon}>
                <i className="fas fa-quote-right"></i>
              </div>
              <p className={styles.testimonialText}>شقتي في مشروع الفراعنة تجاوزت توقعاتي. التصميم عصري والخدمات متكاملة والموقع استراتيجي.</p>
              <div className={styles.testimonialRating}>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorImage}>
                <img src="/images/client2.jpg" alt="نورا أحمد" />
              </div>
              <div className={styles.authorInfo}>
                <h4 className={styles.authorName}>نورا أحمد</h4>
                <p className={styles.authorTitle}>مستثمرة عقارية</p>
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              <div className={styles.quoteIcon}>
                <i className="fas fa-quote-right"></i>
              </div>
              <p className={styles.testimonialText}>اشتريت قطعة أرض من شركة الفراعنة وكانت المعاملة احترافية من البداية للنهاية. أنصح بالتعامل معهم.</p>
              <div className={styles.testimonialRating}>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorImage}>
                <img src="/images/client3.jpg" alt=" محمد علي" />
              </div>
              <div className={styles.authorInfo}>
                <h4 className={styles.authorName}> محمد علي</h4>
                <p className={styles.authorTitle}> رجل أعمال </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Testimonials;