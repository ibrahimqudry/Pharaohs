import styles from './Testimonials.module.css';

function Testimonials() {
  const testimonialsData = [
    {
      image: '/images/dr-ayman.jpg',
      name: 'الدكتور أيمن عثمان',
      title: 'رئيس جامعة أسوان الأسبق',
      text: 'في كلمته، أشاد الدكتور أيمن عثمان، رئيس جامعة أسوان الأسبق، بدور الجامعة في الإشراف على تنفيذ مشاريع شركة الفراعنة بعد توقيع بروتوكول التعاون.  وأكد على أهمية مساهمة الشباب في النهضة العمرانية، مشيرًا إلى أن جهودهم تمثل نموذجًا يُحتذى به في بناء مستقبل مشرق للبلاد.',
      rating: 5
    },
    {
      image: '/images/sheikh-idrisi.jpg',
      name: 'السيد إدريس الشريف الإدريسي',
      title: 'رئيس الرابطة العالمية للسادة الأشراف الأدارسة',
      text: 'أشاد سماحة السيد إدريس الشريف الإدريسي، رئيس الرابطة العالمية للسادة الأشراف الأدارسة، بالدور البارز الذي تقوم به مجموعة الفراعنة في مجال الاستثمار والتطوير العقاري في مصر.  وأكد على أهمية مساهمة الشباب في النهضة العمرانية، مشيرًا إلى أن جهودهم تمثل نموذجًا يُحتذى به في بناء مستقبل مشرق للبلاد.',
      rating: 5
    },
    {
      image: '/images/dr-ayman.jpg',
      name: 'الدكتور أيمن عثمان',
      title: 'رئيس جامعة أسوان الأسبق',
      text: 'في كلمته، أشاد الدكتور أيمن عثمان، رئيس جامعة أسوان الأسبق، بدور الجامعة في الإشراف على تنفيذ مشاريع شركة الفراعنة بعد توقيع بروتوكول التعاون.  وأكد على أهمية مساهمة الشباب في النهضة العمرانية، مشيرًا إلى أن جهودهم تمثل نموذجًا يُحتذى به في بناء مستقبل مشرق للبلاد.',
      rating: 5
    },
    
  ];
  return (
    <section className={styles.testimonials}>
      <div className="container py-16">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>ما يقوله عملاؤنا</h2>
          <div className={styles.titleDecoration}></div>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className={`${styles.testimonialCard} card`}>
              <div className={styles.testimonialContent}>
                <div className={styles.quoteIcon}>
                  <i className="fas fa-quote-right"></i>
                </div>
                <p className={styles.testimonialText}>{testimonial.text}</p>
                <div className={styles.testimonialRating}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorImage}>
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{testimonial.name}</h4>
                  <p className={styles.authorTitle}>{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.buttonContainer}>
          <a href="/vip-reviews" className="gold-button">اعرف أكتر</a>
        </div>
      </div>
    </section>
  );
}
export default Testimonials;

