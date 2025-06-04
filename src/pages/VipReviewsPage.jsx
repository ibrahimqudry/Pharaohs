import React, { useState } from 'react';
import styles from './VipReviewsPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteRight, faFilter, faCrown, faBuilding, faHome, faLandmark, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function VipReviewsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const vipReviews = [
    {
      id: 1,
      name: "د. أحمد محمود",
      title: "رجل أعمال ومستثمر عقاري",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      rating: 5,
      projectType: "فلل",
      projectName: "مشروع الواحة",
      date: "15 يناير 2023",
      review: "تجربتي مع شركة الفراعنة كانت استثنائية من كل النواحي. قمت بشراء فيلا في مشروع الواحة، وكانت الجودة تفوق توقعاتي. التشطيبات راقية والتصميم عصري ومميز. أقدر الاحترافية العالية والالتزام بالمواعيد المحددة للتسليم. فريق خدمة العملاء كان متعاوناً للغاية ويستجيب لكل استفساراتي بسرعة وكفاءة. أنصح بشدة بالاستثمار مع شركة الفراعنة لكل من يبحث عن الجودة والتميز.",
      highlights: [
        "جودة تشطيب ممتازة",
        "التزام بمواعيد التسليم",
        "خدمة عملاء متميزة",
        "تصميم عصري وفريد"
      ]
    },
    {
      id: 2,
      name: "م. سارة الشريف",
      title: "مهندسة معمارية ومستثمرة",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      rating: 5,
      projectType: "شقق",
      projectName: "مشروع النيل",
      date: "3 مارس 2023",
      review: "كمهندسة معمارية، أنا شديدة الانتباه للتفاصيل والجودة في المشاريع العقارية. شقتي في مشروع النيل تجاوزت كل توقعاتي من حيث التصميم والتنفيذ. أقدر الدقة في اختيار الخامات والتشطيبات عالية الجودة. الإطلالة على النيل رائعة والموقع استراتيجي. أشكر فريق الفراعنة على الاهتمام بأدق التفاصيل وتقديم منتج عقاري يستحق الفخر. سأستمر بالتأكيد في الاستثمار مع الشركة في مشاريعها المستقبلية.",
      highlights: [
        "تصميم معماري مبتكر",
        "خامات وتشطيبات فاخرة",
        "موقع استراتيجي",
        "اهتمام بالتفاصيل"
      ]
    },
    {
      id: 3,
      name: "د. محمد العربي",
      title: "أستاذ جامعي ومستثمر",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
      rating: 5,
      projectType: "أراضي",
      projectName: "أراضي الياسمين",
      date: "20 أبريل 2023",
      review: "استثمرت في قطعة أرض بمشروع أراضي الياسمين، وكانت تجربة مميزة من البداية للنهاية. أقدر الشفافية الكاملة في التعامل وتوفير كافة المستندات والتراخيص اللازمة. الموقع ممتاز والبنية التحتية متكاملة. أشكر فريق المبيعات على الاحترافية والمتابعة المستمرة. الاستثمار مع شركة الفراعنة قرار صائب لكل من يبحث عن الأمان والعوائد المجزية على المدى الطويل.",
      highlights: [
        "شفافية في التعامل",
        "بنية تحتية متكاملة",
        "موقع استراتيجي",
        "عائد استثماري مجزي"
      ]
    },
    {
      id: 4,
      name: "م. خالد الشامي",
      title: "رجل أعمال ومستثمر عقاري",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      rating: 5,
      projectType: "تجاري",
      projectName: "واحة الأعمال",
      date: "8 يونيو 2023",
      review: "استثمرت في عدة محلات تجارية بمشروع واحة الأعمال، وكانت النتائج مبهرة. الموقع الاستراتيجي والتصميم العصري جذب العديد من العلامات التجارية المميزة. أقدر الدعم المستمر من فريق إدارة الأصول في شركة الفراعنة والذي ساهم في تحقيق عوائد إيجارية تفوق المتوقع. التعامل الاحترافي والشفافية المطلقة من أهم مميزات الشركة. أنصح بشدة بالاستثمار في المشاريع التجارية للشركة لضمان عوائد مستدامة.",
      highlights: [
        "موقع تجاري متميز",
        "إدارة أصول احترافية",
        "عوائد إيجارية مرتفعة",
        "دعم مستمر بعد البيع"
      ]
    },
    {
      id: 5,
      name: "د. ليلى الحسيني",
      title: "طبيبة ومستثمرة عقارية",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      rating: 5,
      projectType: "فلل",
      projectName: "مشروع الفردوس",
      date: "12 يوليو 2023",
      review: "فيلتي في مشروع الفردوس هي بيت أحلامي الذي طالما تمنيته. التصميم الداخلي والخارجي يعكس الذوق الرفيع والفخامة. المساحات الخضراء والخدمات المتكاملة توفر أسلوب حياة راقي. أقدر المرونة التي أبداها فريق التصميم في تنفيذ تعديلاتي الخاصة على التصميم الأصلي. الجودة والاهتمام بالتفاصيل هما سمة مميزة لشركة الفراعنة. استثماري معهم كان من أفضل القرارات التي اتخذتها.",
      highlights: [
        "تصميم فاخر وعصري",
        "مرونة في التعديلات",
        "مساحات خضراء واسعة",
        "خدمات متكاملة"
      ]
    },
    {
      id: 6,
      name: "م. عمر الشافعي",
      title: "مستثمر ورجل أعمال",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      rating: 5,
      projectType: "شقق",
      projectName: "أبراج الأفق",
      date: "25 أغسطس 2023",
      review: "استثمرت في عدة وحدات سكنية في مشروع أبراج الأفق، وكانت تجربة ناجحة بكل المقاييس. العائد الاستثماري تجاوز توقعاتي، والطلب المستمر على الوحدات للإيجار يعكس جودة المشروع وموقعه المتميز. أقدر الشفافية في التعامل والدعم المستمر من فريق إدارة الأملاك. شركة الفراعنة هي شريك موثوق للاستثمار العقاري طويل الأمد، وأخطط للاستثمار في المزيد من مشاريعهم المستقبلية.",
      highlights: [
        "عائد استثماري مرتفع",
        "طلب مستمر للإيجار",
        "إدارة أملاك احترافية",
        "استثمار آمن طويل الأمد"
      ]
    }
  ];

  const filteredReviews = activeFilter === 'all' 
    ? vipReviews 
    : vipReviews.filter(review => review.projectType === activeFilter);

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>
            <FontAwesomeIcon icon={faCrown} className={styles.crownIcon} />
            آراء كبار العملاء
          </h1>
          <p className={styles.pageDescription}>تعرف على تجارب عملائنا المميزين مع مشاريع الفراعنة للتطوير العقاري</p>
        </div>

        {/* Filters */}
        <div className={styles.filtersContainer}>
          <div className={styles.filtersTitle}>
            <FontAwesomeIcon icon={faFilter} className={styles.filterIcon} />
            <span>تصفية التقييمات</span>
          </div>
          <div className={styles.filterButtons}>
            <button 
              className={`${styles.filterButton} ${activeFilter === 'all' ? styles.active : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              الكل
            </button>
            <button 
              className={`${styles.filterButton} ${activeFilter === 'شقق' ? styles.active : ''}`}
              onClick={() => setActiveFilter('شقق')}
            >
              <FontAwesomeIcon icon={faBuilding} className={styles.buttonIcon} />
              شقق
            </button>
            <button 
              className={`${styles.filterButton} ${activeFilter === 'فلل' ? styles.active : ''}`}
              onClick={() => setActiveFilter('فلل')}
            >
              <FontAwesomeIcon icon={faHome} className={styles.buttonIcon} />
              فلل
            </button>
            <button 
              className={`${styles.filterButton} ${activeFilter === 'تجاري' ? styles.active : ''}`}
              onClick={() => setActiveFilter('تجاري')}
            >
              <FontAwesomeIcon icon={faLandmark} className={styles.buttonIcon} />
              تجاري
            </button>
            <button 
              className={`${styles.filterButton} ${activeFilter === 'أراضي' ? styles.active : ''}`}
              onClick={() => setActiveFilter('أراضي')}
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.buttonIcon} />
              أراضي
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className={styles.reviewsGrid}>
          {filteredReviews.map(review => (
            <div key={review.id} className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <div className={styles.reviewerInfo}>
                  <div className={styles.reviewerImage}>
                    <img src={review.image} alt={review.name} />
                  </div>
                  <div className={styles.reviewerDetails}>
                    <h3 className={styles.reviewerName}>{review.name}</h3>
                    <p className={styles.reviewerTitle}>{review.title}</p>
                    <div className={styles.reviewRating}>
                      {[...Array(review.rating)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} className={styles.starIcon} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className={styles.projectBadge}>
                  <span className={styles.projectType}>{review.projectType}</span>
                  <span className={styles.projectName}>{review.projectName}</span>
                </div>
              </div>
              
              <div className={styles.reviewContent}>
                <div className={styles.quoteIcon}>
                  <FontAwesomeIcon icon={faQuoteRight} />
                </div>
                <p className={styles.reviewText}>{review.review}</p>
                
                <div className={styles.reviewHighlights}>
                  <h4 className={styles.highlightsTitle}>أبرز المميزات:</h4>
                  <ul className={styles.highlightsList}>
                    {review.highlights.map((highlight, index) => (
                      <li key={index} className={styles.highlightItem}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.reviewFooter}>
                  <span className={styles.reviewDate}>{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <div className={styles.noResults}>
            <p>لا توجد تقييمات متاحة بهذا التصنيف حالياً</p>
          </div>
        )}
        
        <div className={styles.callToAction}>
          <h2 className={styles.ctaTitle}>انضم إلى قائمة عملائنا المميزين</h2>
          <p className={styles.ctaText}>استثمر الآن في مشاريع الفراعنة واستمتع بتجربة عقارية فريدة</p>
          <div className={styles.ctaButtons}>
            <a href="/projects" className={styles.ctaButton}>استعرض المشاريع</a>
            <a href="/contact" className="gold-button">تواصل معنا</a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default VipReviewsPage;