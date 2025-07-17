import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import styles from './ProjectDetailsPage.module.css';
import ClipLoader from 'react-spinners/ClipLoader';

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const docRef = doc(db, 'projects', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProject({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log('No such project!');
        }
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  const nextSlide = () => {
    if (project?.sliderImages?.length) {
      setCurrentSlide((prev) => (prev === project.sliderImages.length - 1 ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    if (project?.sliderImages?.length) {
      setCurrentSlide((prev) => (prev === 0 ? project.sliderImages.length - 1 : prev - 1));
    }
  };

  if (loading) return (
    <div className="loading">
      <ClipLoader size={40} color="#bfa046" />
    </div>
  );
  if (!project) return <div className={styles.notFound}>المشروع غير موجود</div>;

  return (
    <div className={styles.pageContainer}>
      {/* Image Slider Section */}
      {project.sliderImages && project.sliderImages.length > 0 && (
        <div className={styles.sliderContainer}>
          <div className={styles.slider}>
            <button className={`${styles.sliderButton} ${styles.prevButton}`} onClick={prevSlide}>
              &#10095;
            </button>
            <div className={styles.slideWrapper}>
              <img
                src={project.sliderImages[currentSlide].replace(/`/g, '') ?
                  project.sliderImages[currentSlide].replace(/`/g, '') : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOZugSlXrDIB3SLtuip9ZDU1iJScEqfby_Q&s'
                }
                alt={`${project.title} - صورة ${currentSlide + 1}`}
                className={styles.slideImage}
              />
              <div className={styles.slideCounter}>
                {currentSlide + 1} / {project.sliderImages.length}
              </div>
            </div>
            <button className={`${styles.sliderButton} ${styles.nextButton}`} onClick={nextSlide}>
              &#10094;
            </button>
          </div>
        </div>
      )}

      <div className={styles.container}>
        {/* Main Content Section */}
        <div className={styles.mainContent}>
          <div className={styles.imageContainer}>
            <img
              src={project.image.replace(/`/g, '') ?
                project.image.replace(/`/g, '') : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOZugSlXrDIB3SLtuip9ZDU1iJScEqfby_Q&s'
              }
              alt={project.title}
              className={styles.mainImage} />
            {project.onSale && <div className={styles.saleTag}>عرض خاص</div>}
            {project.isSold && <div className={styles.soldTag}>تم البيع</div>}
          </div>

          <div className={styles.detailsContainer}>
            <div className={styles.header}>
              <h1 className={styles.title}>{project.title}</h1>
              <p className={styles.location}>{project.location}</p>
            </div>

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>السعر:</span>
                <span className={styles.price}>{project.price}</span>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>الحالة:</span>
                <span className={`${styles.status} ${styles[project.status]}`}>
                  {project.status}
                </span>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>موعد التسليم:</span>
                <span>{project.completion}</span>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>النوع:</span>
                <div className={styles.typesList}>
                  {project.types && project.types.map((type, index) => (
                    <span key={index} className={styles.typeTag}>{type}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            {project.progress !== undefined && (
              <div className={styles.progressContainer}>
                <span className={styles.progressLabel}>نسبة الإنجاز: {project.progress}%</span>
                <div className={styles.progressBarOuter}>
                  <div
                    className={styles.progressBarInner}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            )}

            {/* Description Section */}
            <div className={styles.descriptionSection}>
              <h2 className={styles.sectionTitle}>وصف المشروع</h2>
              <p className={styles.description}>{project.description}</p>

              {project.longDescription && (
                <div className={styles.longDescription}>
                  <h3 className={styles.subSectionTitle}>تفاصيل إضافية</h3>
                  <p>{project.longDescription}</p>
                </div>
              )}
            </div>

            {/* Features Section */}
            {project.features && project.features.length > 0 && (
              <div className={styles.featuresSection}>
                <h2 className={styles.sectionTitle}>المميزات</h2>
                <ul className={styles.featuresList}>
                  {project.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <span className={styles.featureIcon}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Call to Action */}
            <div className={styles.ctaContainer}>
              <a href="/contact" className={styles.inquiryButton}>استفسار عن المشروع</a>
              {project.youtubeLink && (
                <a
                  href={project.youtubeLink}
                  className={styles.inquiryButton}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: "1rem" }}
                >
                  مشاهدة فيديوهات المشروع
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}