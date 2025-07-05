import styles from './ProjectsPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faHome, faLandmark, faFilter, faMapMarkerAlt ,faBucket} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import ClipLoader from 'react-spinners/ClipLoader';

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'projects'));
        const projectsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.types.includes(activeFilter));

  if (loading) {
    return (
      <div className='loading'>
        <ClipLoader size={40} color="#bfa046" />
      </div>
    );
  }

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className={styles.pageHeader}>
          <h1 className="text-4xl font-bold">مشاريعنا</h1>
          <p className={styles.pageDescription}>اكتشف مجموعة متنوعة من المشاريع العقارية المميزة في أسوان الجديدة</p>
        </div>

        {/* Filters */}
        <div className={`dm ${styles.filtersContainer}`}>
          <div className={styles.filtersTitle}>
            <FontAwesomeIcon icon={faFilter} className={styles.filterIcon} />
            <span>تصفية المشاريع</span>
          </div>
          <div className={styles.filterButtons}>
            <button
              className={`${styles.filterButton} ${activeFilter === 'all' ? styles.active : 'dm'}`}
              onClick={() => setActiveFilter('all')}
            >
              الكل
            </button>
            <button
              className={`${styles.filterButton} ${activeFilter === 'شقق' ? styles.active : 'dm'}`}
              onClick={() => setActiveFilter('شقق')}
            >
              <FontAwesomeIcon icon={faBuilding} className={styles.buttonIcon} />
              شقق
            </button>
            <button
              className={`${styles.filterButton} ${activeFilter === 'فلل' ? styles.active : 'dm'}`}
              onClick={() => setActiveFilter('فلل')}
            >
              <FontAwesomeIcon icon={faHome} className={styles.buttonIcon} />
              فلل
            </button>
            <button
              className={`${styles.filterButton} ${activeFilter === 'تجاري' ? styles.active : 'dm'}`}
              onClick={() => setActiveFilter('تجاري')}
            >
              <FontAwesomeIcon icon={faBucket} className={styles.buttonIcon} />
              تجاري
            </button>
            <button
              className={`${styles.filterButton} ${activeFilter === 'أراضي' ? styles.active : 'dm'}`}
              onClick={() => setActiveFilter('أراضي')}
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.buttonIcon} />
              أراضي
            </button>
            <button
              className={`${styles.filterButton} ${activeFilter === 'أراضي' ? styles.active : 'dm'}`}
              onClick={() => setActiveFilter('أراضي')}
            >
              <FontAwesomeIcon icon={faLandmark} className={styles.buttonIcon} />
             اداري
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map(project => (
            <div key={project.id} className={`card ${styles.projectCard}`}>
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
                {project.isSold && (
                  <div className={styles.soldMark}>
                    <span>تم البيع</span>
                  </div>
                )}
                {project.onSale && !project.isSold && (
                  <div className={styles.saleMark}>
                    <span>عرض خاص</span>
                  </div>
                )}
              </div>

              <div className={styles.projectContent}>
                <h2 className={styles.projectTitle}>{project.title}</h2>

                <div className={styles.projectLocation}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.locationIcon} />
                  <span>{project.location}</span>
                </div>
                <p className={styles.projectDescription}>{project.description}</p>


                {/* Project Type Section */}
                <div className={styles.projectTypeSection}>
                  {project.types.map((type, index) => (
                    <div key={index} className={styles.typeItem}>
                      <FontAwesomeIcon icon={faBuilding} className={styles.typeIcon} />
                      <span>{type}</span>
                      {index < project.types.length - 1 && <span className={styles.typeSeparator}>،</span>}
                    </div>
                  ))}
                </div>

                <div className={styles.projectMeta}>
                  <div className={styles.projectPrice}>{project.price}</div>
                  <div className={styles.projectStatus}>
                    <span className={styles.statusLabel}>الحالة:</span>
                    <span className={styles.statusValue}>{project.status}</span>
                  </div>
                </div>

                <div className={styles.projectActions}>
                  <a href={`/projects/${project.id}`} className={styles.detailsButton}>التفاصيل</a>
                  <a href="/contact" className="gold-button">استفسار</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className={styles.noResults}>
            <p>لا توجد مشاريع متاحة بهذا التصنيف حالياً</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default ProjectsPage;
