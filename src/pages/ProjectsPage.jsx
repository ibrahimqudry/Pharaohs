import React, { useState } from 'react';
import styles from './ProjectsPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faBuilding, faHome, faLandmark, faFilter, faMapMarkerAlt, faBed, faBath, faRulerCombined } from '@fortawesome/free-solid-svg-icons';


function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
      title: "مشروع النيل",
      location: "أسوان الجديدة",
      types: ["شقق", "سكني"],
      description: "وحدات سكنية فاخرة بإطلالة مباشرة على النيل، تتميز بتصميم عصري وإطلالات بانورامية.",
      features: [
        { icon: faBed, text: "2-4 غرف نوم" },
        { icon: faBath, text: "2-3 حمامات" },
        { icon: faRulerCombined, text: "120-220 متر مربع" }
      ],
      price: "يبدأ من 1.5 مليون جنيه",
      status: "تم البيع",
      completion: "2024",
      isSold: true,
      progress: 100
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      title: "مشروع الواحة",
      location: "أسوان الجديدة",
      types: ["شقق", "سكني"],
      description: "مجمع سكني متكامل الخدمات يضم فلل مستقلة ونصف مستقلة.",
      features: [
        { icon: faBed, text: "4-6 غرف نوم" },
        { icon: faBath, text: "3-5 حمامات" },
        { icon: faRulerCombined, text: "250-450 متر مربع" }
      ],
      price: "يبدأ من 3.2 مليون جنيه",
      status: "خصم 20%",
      completion: "2025",
      onSale: true,
      progress: 75
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      title: "مشروع الفردوس",
      location: "أسوان الجديدة",
      types: ["شقق", "سكني"],
      description: "فلل مستقلة بتصميم عصري، تتميز بالخصوصية والرفاهية مع حدائق خاصة ومسابح.",
      features: [
        { icon: faBed, text: "5-7 غرف نوم" },
        { icon: faBath, text: "4-6 حمامات" },
        { icon: faRulerCombined, text: "350-600 متر مربع" }
      ],
      price: "يبدأ من 4.5 مليون جنيه",
      status: "متاح",
      completion: "2024",
      progress: 60
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
      title: "أبراج الأفق",
      location: "أسوان الجديدة",
      types: ["شقق", "سكني"],
      description: "أبراج سكنية حديثة بارتفاعات مختلفة، توفر إطلالات رائعة على النيل والمدينة.",
      features: [
        { icon: faBed, text: "1-3 غرف نوم" },
        { icon: faBath, text: "1-2 حمامات" },
        { icon: faRulerCombined, text: "70-150 متر مربع" }
      ],
      price: "يبدأ من 900 ألف جنيه",
      status: "خصم 15%",
      completion: "2023",
      onSale: true,
      progress: 100
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg",
      title: "واحة الأعمال",
      location: "أسوان الجديدة",
      types: ["شقق", "سكني"],
      description: "مجمع إداري وتجاري متكامل يضم مكاتب ومحلات تجارية بمساحات مختلفة.",
      features: [
        { icon: faRulerCombined, text: "50-500 متر مربع" }
      ],
      price: "يبدأ من 1.2 مليون جنيه",
      status: "متاح",
      completion: "2023",
      progress: 100
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
      title: "أراضي الياسمين",
      location: "أسوان الجديدة",
      types: ["شقق", "سكني"],
      description: "قطع أراضي سكنية بمساحات مختلفة، جاهزة للبناء ومزودة بكافة المرافق.",
      features: [
        { icon: faRulerCombined, text: "400-1000 متر مربع" }
      ],
      price: "يبدأ من 800 ألف جنيه",
      status: "تم البيع",
      completion: "جاهز",
      isSold: true,
      progress: 100
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.type === activeFilter);

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className={styles.pageHeader}>
          <h1 className="text-4xl font-bold">مشاريعنا</h1>
          <p className={styles.pageDescription}>اكتشف مجموعة متنوعة من المشاريع العقارية المميزة في أسوان الجديدة</p>
        </div>

        {/* Filters */}
        <div className={styles.filtersContainer}>
          <div className={styles.filtersTitle}>
            <FontAwesomeIcon icon={faFilter} className={styles.filterIcon} />
            <span>تصفية المشاريع</span>
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

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map(project => (
            <div key={project.id} className={styles.projectCard}>
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

                {/* Progress Bar
                {project.progress && (
                  <div className={styles.progressContainer}>
                    <div className={styles.progressBar} style={{width: `${project.progress}%`}}></div>
                    <span className={styles.progressText}>{project.progress}% تم الانتهاء</span>
                  </div>
                )} */}

                <div className={styles.projectLocation}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.locationIcon} />
                  <span>{project.location}</span>
                </div>
                <p className={styles.projectDescription}>{project.description}</p>

                {/* <div className={styles.projectFeatures}>
                  {project.features.map((feature, index) => (
                    <div key={index} className={styles.featureItem}>
                      <FontAwesomeIcon icon={feature.icon} className={styles.featureIcon} />
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div> */}


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
