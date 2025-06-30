import React, { useState, useEffect } from 'react';
import styles from './VipReviewsPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteRight, faFilter, faCrown, faBuilding, faHome, faLandmark, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import ClipLoader from 'react-spinners/ClipLoader';

function VipReviewsPage() {
  const [vipReviews, setVipReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsSnap = await getDocs(collection(db, 'vipReviews'));
      setVipReviews(
        reviewsSnap.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.reviewer || '',
            image: data.img || '',
            review: data.content || '',
            videoLink: data.videoLink || '',
            highlights: Array.isArray(data.highlights) ? data.highlights : [],
            date: data.date || '',
            rating: data.rating || 5,
            title: data.title || ''
          };
        })
      );
      setLoading(false);
    };
    fetchReviews();
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '+201149136352';
    const message = encodeURIComponent('مرحبا، أرغب في حجز وحدة');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

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

        {/* Reviews Grid */}
        <div className={styles.reviewsGrid}>
          {loading ? (
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
              <ClipLoader color="#bfa13a" size={60} />
            </div>
          ) : vipReviews.map(review => (
            <div key={review.id} className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <div className={styles.reviewerInfo}>
                  <div className={styles.reviewerImage}>
                    <img
                      src={review.image ? review.image : `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 50) + 1}.jpg`}
                      alt={review.name}
                    />
                  </div>
                  <div className={styles.reviewerDetails}>
                    <h3 className={styles.reviewerName}>{review.name}</h3>
                    {review.title && <p className={styles.reviewerTitle}>{review.title}</p>}
                    <div className={styles.reviewRating}>
                      {[...Array(review.rating)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} className={styles.starIcon} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.reviewContent}>
                <div className={styles.quoteIcon}>
                  <FontAwesomeIcon icon={faQuoteRight} />
                </div>
                <p className={styles.reviewText}>{review.review}</p>

                {review.highlights.length > 0 && (
                  <div className={styles.reviewHighlights}>
                    <h4 className={styles.highlightsTitle}>أبرز المميزات:</h4>
                    <ul className={styles.highlightsList}>
                      {review.highlights.map((highlight, index) => (
                        <li key={index} className={styles.highlightItem}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className={styles.reviewFooter}>
                  {review.videoLink ? (
                    <a
                      href={review.videoLink}
                      className={styles.detailsButton}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      شاهد
                    </a>
                  ) : (
                    <a></a>
                  )}
                  <span className={styles.reviewDate}>{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!loading && vipReviews.length === 0 && (
          <div className={styles.noResults}>
            <p>لا توجد تقييمات متاحة بهذا التصنيف حالياً</p>
          </div>
        )}

        <div className={styles.callToAction}>
          <h2 className={styles.ctaTitle}>انضم إلى قائمة عملائنا المميزين</h2>
          <p className={styles.ctaText}>استثمر الآن في مشاريع الفراعنة واستمتع بتجربة عقارية فريدة</p>
          <div className={styles.ctaButtons}>
            <a href="/projects" className={styles.ctaButton}>استعرض المشاريع</a>
            <a className="gold-button" onClick={handleWhatsAppClick}>تواصل معنا</a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default VipReviewsPage;

