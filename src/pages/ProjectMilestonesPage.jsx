import React, { useState } from 'react';
import styles from './ProjectMilestonesPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faHome, faLandmark, faFilter, faMapMarkerAlt, faCheckCircle, faCalendarAlt, faHardHat, faTools, faFileContract, faKey } from '@fortawesome/free-solid-svg-icons';

function ProjectMilestonesPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
      title: "مشروع النيل",
      location: "أسوان الجديدة",
      type: "شقق",
      description: "وحدات سكنية فاخرة بإطلالة مباشرة على النيل، تتميز بتصميم عصري وإطلالات بانورامية.",
      completion: "2024",
      currentPhase: "البناء",
      progress: 65,
      milestones: [
        {
          id: 1,
          title: "شراء الأرض",
          date: "يناير 2022",
          status: "مكتمل",
          description: "تم شراء قطعة الأرض وإتمام كافة الإجراءات القانونية والتعاقدية.",
          icon: faFileContract
        },
        {
          id: 2,
          title: "التصميم والتخطيط",
          date: "مارس 2022",
          status: "مكتمل",
          description: "تم الانتهاء من التصاميم المعمارية والإنشائية واعتمادها من الجهات المختصة.",
          icon: faTools
        },
        {
          id: 3,
          title: "الحفر والأساسات",
          date: "يونيو 2022",
          status: "مكتمل",
          description: "تم الانتهاء من أعمال الحفر وصب الأساسات وفقاً للمواصفات الهندسية.",
          icon: faHardHat
        },
        {
          id: 4,
          title: "الهيكل الخرساني",
          date: "ديسمبر 2022",
          status: "مكتمل",
          description: "تم الانتهاء من أعمال الهيكل الخرساني لجميع الطوابق.",
          icon: faBuilding
        },
        {
          id: 5,
          title: "التشطيبات الخارجية",
          date: "يونيو 2023",
          status: "جاري",
          description: "جاري العمل على التشطيبات الخارجية للمبنى والواجهات.",
          icon: faBuilding
        },
        {
          id: 6,
          title: "التشطيبات الداخلية",
          date: "أكتوبر 2023",
          status: "جاري",
          description: "جاري العمل على التشطيبات الداخلية للوحدات السكنية.",
          icon: faHome
        },
        {
          id: 7,
          title: "المرافق والخدمات",
          date: "فبراير 2024",
          status: "مخطط",
          description: "تركيب وتشغيل كافة المرافق والخدمات مثل المصاعد والكهرباء والمياه.",
          icon: faTools
        },
        {
          id: 8,
          title: "التسليم",
          date: "يونيو 2024",
          status: "مخطط",
          description: "تسليم الوحدات للملاك بعد الانتهاء من كافة الأعمال والتشطيبات.",
          icon: faKey
        }
      ]
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      title: "مشروع الواحة",
      location: "أسوان الجديدة",
      type: "فلل",
      description: "مجمع سكني متكامل الخدمات يضم فلل مستقلة ونصف مستقلة، مع مساحات خضراء واسعة وخدمات ترفيهية.",
      completion: "2025",
      currentPhase: "الهيكل الخرساني",
      progress: 40,
      milestones: [
        {
          id: 1,
          title: "شراء الأرض",
          date: "مارس 2022",
          status: "مكتمل",
          description: "تم شراء قطعة الأرض وإتمام كافة الإجراءات القانونية والتعاقدية.",
          icon: faFileContract
        },
        {
          id: 2,
          title: "التصميم والتخطيط",
          date: "يوليو 2022",
          status: "مكتمل",
          description: "تم الانتهاء من التصاميم المعمارية والإنشائية واعتمادها من الجهات المختصة.",
          icon: faTools
        },
        {
          id: 3,
          title: "الحفر والأساسات",
          date: "نوفمبر 2022",
          status: "مكتمل",
          description: "تم الانتهاء من أعمال الحفر وصب الأساسات وفقاً للمواصفات الهندسية.",
          icon: faHardHat
        },
        {
          id: 4,
          title: "الهيكل الخرساني",
          date: "مايو 2023",
          status: "جاري",
          description: "جاري العمل على إنشاء الهيكل الخرساني للفلل.",
          icon: faBuilding
        },
        {
          id: 5,
          title: "التشطيبات الخارجية",
          date: "ديسمبر 2023",
          status: "مخطط",
          description: "تشطيب الواجهات الخارجية للفلل وفقاً للتصاميم المعتمدة.",
          icon: faBuilding
        },
        {
          id: 6,
          title: "التشطيبات الداخلية",
          date: "مايو 2024",
          status: "مخطط",
          description: "تنفيذ كافة التشطيبات الداخلية للفلل بأعلى مستويات الجودة.",
          icon: faHome
        },
        {
          id: 7,
          title: "المرافق والخدمات",
          date: "سبتمبر 2024",
          status: "مخطط",
          description: "تركيب وتشغيل كافة المرافق والخدمات في المجمع السكني.",
          icon: faTools
        },
        {
          id: 8,
          title: "التسليم",
          date: "يناير 2025",
          status: "مخطط",
          description: "تسليم الفلل للملاك بعد الانتهاء من كافة الأعمال والتشطيبات.",
          icon: faKey
        }
      ]
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      title: "مشروع الفردوس",
      location: "أسوان الجديدة",
      type: "فلل",
      description: "فلل مستقلة بتصميم عصري، تتميز بالخصوصية والرفاهية مع حدائق خاصة ومسابح.",
      completion: "2024",
      currentPhase: "التشطيبات الخارجية",
      progress: 75,
      milestones: [
        {
          id: 1,
          title: "شراء الأرض",
          date: "ديسمبر 2021",
          status: "مكتمل",
          description: "تم شراء قطعة الأرض وإتمام كافة الإجراءات القانونية والتعاقدية.",
          icon: faFileContract
        },
        {
          id: 2,
          title: "التصميم والتخطيط",
          date: "فبراير 2022",
          status: "مكتمل",
          description: "تم الانتهاء من التصاميم المعمارية والإنشائية واعتمادها من الجهات المختصة.",
          icon: faTools
        },
        {
          id: 3,
          title: "الحفر والأساسات",
          date: "أبريل 2022",
          status: "مكتمل",
          description: "تم الانتهاء من أعمال الحفر وصب الأساسات وفقاً للمواصفات الهندسية.",
          icon: faHardHat
        },
        {
          id: 4,
          title: "الهيكل الخرساني",
          date: "أكتوبر 2022",
          status: "مكتمل",
          description: "تم الانتهاء من أعمال الهيكل الخرساني لجميع الفلل.",
          icon: faBuilding
        },
        {
          id: 5,
          title: "التشطيبات الخارجية",
          date: "مارس 2023",
          status: "مكتمل",
          description: "تم الانتهاء من التشطيبات الخارجية للفلل والواجهات.",
          icon: faBuilding
        },
        {
          id: 6,
          title: "التشطيبات الداخلية",
          date: "أغسطس 2023",
          status: "جاري",
          description: "جاري العمل على التشطيبات الداخلية للفلل.",
          icon: faHome
        },
        {
          id: 7,
          title: "المرافق والخدمات",
          date: "نوفمبر 2023",
          status: "جاري",
          description: "جاري تركيب وتشغيل كافة المرافق والخدمات في المجمع السكني.",
          icon: faTools
        },
        {
          id: 8,
          title: "التسليم",
          date: "فبراير 2024",
          status: "مخطط",
          description: "تسليم الفلل للملاك بعد الانتهاء من كافة الأعمال والتشطيبات.",
          icon: faKey
        }
      ]
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
      title: "أبراج الأفق",
      location: "أسوان الجديدة",
      type: "شقق",
      description: "أبراج سكنية حديثة بارتفاعات مختلفة، توفر إطلالات رائعة على النيل والمدينة.",
      completion: "2023",
      currentPhase: "التسليم",
      progress: 95,
      milestones: [
        {
          id: 1,
          title: "شراء الأرض",
          date: "يوليو 2021",
          status: "مكتمل",
          description: "تم شراء قطعة الأرض وإتمام كافة الإجراءات القانونية والتعاقدية.",
          icon: faFileContract
        },
        {
          id: 2,
          title: "التصميم والتخطيط",
          date: "سبتمبر 2021",
          status: "مكتمل",
          description: "تم الانتهاء من التصاميم المعمارية والإنشائية واعتمادها من الجهات المختصة.",
          icon: faTools
        },
        {
          id: 3,
          title: "الحفر والأساسات",
          date: "نوفمبر 2021",
          status: "مكتمل",
          description: "تم الانتهاء من أعمال الحفر وصب الأساسات وفقاً للمواصفات الهندسية.",
          icon: faHardHat
        },
        {
          id: 4,
          title: "الهيكل الخرساني",
          date: "مارس 2022",
          status: "مكتمل",
          description: "تم الانتهاء من أعمال الهيكل الخرساني لجميع الطوابق.",
          icon: faBuilding
        },
        {
          id: 5,
          title: "التشطيبات الخارجية",
          date: "يوليو 2022",
          status: "مكتمل",
          description: "تم الانتهاء من التشطيبات الخارجية للمبنى والواجهات.",
          icon: faBuilding
        },
        {
          id: 6,
          title: "التشطيبات الداخلية",
          date: "نوفمبر 2022",
          status: "مكتمل",
          description: "تم الانتهاء من التشطيبات الداخلية للوحدات السكنية.",
          icon: faHome
        },
        {
          id: 7,
          title: "المرافق والخدمات",
          date: "يناير 2023",
          status: "مكتمل",
          description: "تم تركيب وتشغيل كافة المرافق والخدمات مثل المصاعد والكهرباء والمياه.",
          icon: faTools
        },
        {
          id: 8,
          title: "التسليم",
          date: "مارس 2023",
          status: "جاري",
          description: "جاري تسليم الوحدات للملاك بعد الانتهاء من كافة الأعمال والتشطيبات.",
          icon: faKey
        }
      ]
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg",
      title: "واحة الأعمال",
      location: "أسوان الجديدة",
      type: "تجاري",
      description: "مجمع إداري وتجاري متكامل يضم مكاتب ومحلات تجارية بمساحات مختلفة.",
      completion: "2023",
      currentPhase: "التشطيبات الداخلية",
      progress: 80,
      milestones: [
        {
          id: 1,
          title: "شراء الأرض",
          date: "أغسطس 2021",
          status: "مكتمل",
          description: "تم شراء قطعة الأرض وإتمام كافة الإجراءات القانونية والتعاقدية.",
          icon: faFileContract
        },
        {
          id: 2,
          title: "التصميم والتخطيط",
          date: "أكتوبر 2021",
          status: "مكتمل",
          description: "تم الانتهاء من التصاميم المعمارية والإنشائية واعتمادها من الجهات المختصة.",
          icon: faTools
        },
        {
          id: 3,
          title: "الحفر والأساسات",
          date: "ديسمبر 2021",
          status: "مكتمل",
          description: "تم الانتهاء من أعمال الحفر وصب الأساسات وفقاً للمواصفات الهندسية.",
          icon: faHardHat
        },
        {
          id: 4,
          title: "الهيكل الخرساني",
          date: "أبريل 2022",
          status: "مكتمل",
          description: "تم الانتهاء من أعمال الهيكل الخرساني لجميع الطوابق.",
          icon: faBuilding
        },
        {
          id: 5,
          title: "التشطيبات الخارجية",
          date: "أغسطس 2022",
          status: "مكتمل",
          description: "تم الانتهاء من التشطيبات الخارجية للمبنى والواجهات.",
          icon: faBuilding
        },
        {
          id: 6,
          title: "التشطيبات الداخلية",
          date: "يناير 2023",
          status: "جاري",
          description: "جاري العمل على التشطيبات الداخلية للوحدات التجارية والإدارية.",
          icon: faLandmark
        },
        {
          id: 7,
          title: "المرافق والخدمات",
          date: "أبريل 2023",
          status: "مخطط",
          description: "تركيب وتشغيل كافة المرافق والخدمات في المجمع التجاري.",
          icon: faTools
        },
        {
          id: 8,
          title: "التسليم",
          date: "يونيو 2023",
          status: "مخطط",
          description: "تسليم الوحدات للمستثمرين بعد الانتهاء من كافة الأعمال والتشطيبات.",
          icon: faKey
        }
      ]
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
      title: "أراضي الياسمين",
      location: "أسوان الجديدة",
      type: "أراضي",
      description: "قطع أراضي سكنية بمساحات مختلفة، جاهزة للبناء ومزودة بكافة المرافق.",
      completion: "جاهز",
      currentPhase: "مكتمل",
      progress: 100,
      milestones: [
        {
          id: 1,
          title: "شراء الأرض",
          date: "يناير 2021",
          status: "مكتمل",
          description: "تم شراء الأرض وإتمام كافة الإجراءات القانونية والتعاقدية.",
          icon: faFileContract
        },
        {
          id: 2,
          title: "التخطيط والتقسيم",
          date: "مارس 2021",
          status: "مكتمل",
          description: "تم تخطيط وتقسيم الأرض إلى قطع سكنية بمساحات مختلفة.",
          icon: faTools
        },
        {
          id: 3,
          title: "البنية التحتية",
          date: "يونيو 2021",
          status: "مكتمل",
          description: "تم تنفيذ أعمال البنية التحتية من شبكات مياه وصرف صحي وكهرباء.",
          icon: faTools
        },
        {
          id: 4,
          title: "الطرق والممرات",
          date: "سبتمبر 2021",
          status: "مكتمل",
          description: "تم تنفيذ شبكة الطرق والممرات داخل المشروع.",
          icon: faMapMarkerAlt
        },
        {
          id: 5,
          title: "الإنارة",
          date: "نوفمبر 2021",
          status: "مكتمل",
          description: "تم تركيب أعمدة الإنارة في جميع أنحاء المشروع.",
          icon: faTools
        },
        {
          id: 6,
          title: "التسليم",
          date: "ديسمبر 2021",
          status: "مكتمل",
          description: "تم تسليم قطع الأراضي للملاك بعد الانتهاء من كافة أعمال البنية التحتية.",
          icon: faKey
        }
      ]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  const handleProjectClick = (projectId) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className={styles.pageHeader}>
          <h1 className="text-4xl font-bold">مشاريعنا خطوة بخطوة</h1>
          <p className={styles.pageDescription}>تابع تقدم مشاريعنا العقارية ومراحل التنفيذ خطوة بخطوة</p>
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
            <div 
              key={project.id} 
              className={`${styles.projectCard} ${activeProject === project.id ? styles.active : ''}`}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
                <div className={styles.projectType}>{project.type}</div>
                <div className={styles.projectProgress}>
                  <div 
                    className={styles.progressBar} 
                    style={{ width: `${project.progress}%` }}
                  ></div>
                  <span className={styles.progressText}>{project.progress}% مكتمل</span>
                </div>
              </div>
              <div className={styles.projectContent}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <div className={styles.projectLocation}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.locationIcon} />
                  <span>{project.location}</span>
                </div>
                <div className={styles.projectPhase}>
                  <span className={styles.phaseLabel}>المرحلة الحالية:</span>
                  <span className={styles.phaseValue}>{project.currentPhase}</span>
                </div>
                <div className={styles.projectCompletion}>
                  <FontAwesomeIcon icon={faCalendarAlt} className={styles.completionIcon} />
                  <span>موعد التسليم: {project.completion}</span>
                </div>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.viewDetailsButton}>
                  {activeProject === project.id ? 'إخفاء التفاصيل' : 'عرض التفاصيل'}
                </div>
              </div>
              
              {activeProject === project.id && (
                <div className={styles.milestoneTimeline}>
                  <h3 className={styles.timelineTitle}>مراحل المشروع</h3>
                  <div className={styles.timeline}>
                    {project.milestones.map((milestone) => (
                      <div 
                        key={milestone.id} 
                        className={`${styles.timelineItem} ${milestone.status === 'مكتمل' ? styles.completed : milestone.status === 'جاري' ? styles.inProgress : styles.planned}`}
                      >
                        <div className={styles.timelineIcon}>
                          <FontAwesomeIcon icon={milestone.icon} />
                        </div>
                        <div className={styles.timelineContent}>
                          <div className={styles.timelineHeader}>
                            <h4 className={styles.milestoneName}>{milestone.title}</h4>
                            <span className={styles.milestoneDate}>{milestone.date}</span>
                          </div>
                          <p className={styles.milestoneDescription}>{milestone.description}</p>
                          <div className={styles.milestoneStatus}>
                            <FontAwesomeIcon 
                              icon={faCheckCircle} 
                              className={`${styles.statusIcon} ${milestone.status === 'مكتمل' ? styles.completedIcon : milestone.status === 'جاري' ? styles.inProgressIcon : styles.plannedIcon}`} 
                            />
                            <span className={styles.statusText}>{milestone.status}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className={styles.noResults}>
            <p>لا توجد مشاريع متاحة بهذا التصنيف حالياً</p>
          </div>
        )}
        
        <div className={styles.callToAction}>
          <h2 className={styles.ctaTitle}>هل تبحث عن استثمار عقاري مميز؟</h2>
          <p className={styles.ctaText}>تواصل معنا الآن للحصول على معلومات تفصيلية حول مشاريعنا ومراحل التنفيذ</p>
          <div className={styles.ctaButtons}>
            <a href="/projects" className="gold-button">عرض جميع المشاريع</a>
            <a href="/contact" className={styles.contactButton}>تواصل معنا</a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProjectMilestonesPage;