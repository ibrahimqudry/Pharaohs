import React, { useState } from 'react';
import styles from './CareersPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFilter, 
  faBriefcase, 
  faBuilding, 
  faGraduationCap, 
  faMapMarkerAlt, 
  faCalendarAlt, 
  faMoneyBillWave, 
  faCheckCircle, 
  faPaperPlane 
} from '@fortawesome/free-solid-svg-icons';

function CareersPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedJob, setSelectedJob] = useState(null);
  
  const jobs = [
    {
      id: 1,
      title: "مهندس معماري",
      department: "قسم التصميم",
      location: "أسوان الجديدة",
      type: "دوام كامل",
      category: "هندسة",
      experience: "3-5 سنوات",
      education: "بكالوريوس هندسة معمارية",
      salary: "تنافسي",
      postedDate: "15 أكتوبر 2023",
      description: "نبحث عن مهندس معماري موهوب للانضمام إلى فريق التصميم لدينا. المرشح المثالي لديه خبرة في تصميم المشاريع السكنية والتجارية الفاخرة مع التركيز على الاستدامة والتصميم المعاصر.",
      responsibilities: [
        "تطوير تصاميم معمارية مبتكرة للمشاريع السكنية والتجارية",
        "إعداد رسومات ومخططات تفصيلية باستخدام برامج التصميم المعماري",
        "التنسيق مع المهندسين الإنشائيين والكهربائيين والميكانيكيين",
        "متابعة تنفيذ التصاميم في مواقع البناء",
        "تقديم حلول تصميمية تلبي متطلبات العملاء وتتوافق مع اللوائح المحلية"
      ],
      requirements: [
        "بكالوريوس في الهندسة المعمارية",
        "خبرة 3-5 سنوات في مجال التصميم المعماري",
        "إتقان برامج AutoCAD وRevit وSketchUp",
        "مهارات ممتازة في التواصل والعمل ضمن فريق",
        "القدرة على العمل تحت الضغط والالتزام بالمواعيد النهائية"
      ],
      benefits: [
        "راتب تنافسي",
        "تأمين صحي شامل",
        "فرص للتطوير المهني",
        "بيئة عمل محفزة وديناميكية",
        "مكافآت سنوية"
      ]
    },
    {
      id: 2,
      title: "مدير تسويق",
      department: "قسم التسويق والمبيعات",
      location: "القاهرة",
      type: "دوام كامل",
      category: "تسويق",
      experience: "5-7 سنوات",
      education: "بكالوريوس تسويق أو إدارة أعمال",
      salary: "تنافسي",
      postedDate: "20 أكتوبر 2023",
      description: "نبحث عن مدير تسويق ذو خبرة للإشراف على استراتيجيات التسويق وحملات الترويج لمشاريعنا العقارية. المرشح المثالي لديه خبرة في التسويق العقاري وفهم عميق لسوق العقارات المصري.",
      responsibilities: [
        "تطوير وتنفيذ استراتيجيات تسويقية فعالة للمشاريع العقارية",
        "إدارة فريق التسويق وتوجيه جهودهم لتحقيق أهداف المبيعات",
        "تخطيط وتنفيذ حملات إعلانية عبر مختلف القنوات (الرقمية والتقليدية)",
        "تحليل اتجاهات السوق والمنافسين لتحسين استراتيجيات التسويق",
        "إعداد تقارير أداء التسويق والمبيعات"
      ],
      requirements: [
        "بكالوريوس في التسويق أو إدارة الأعمال",
        "خبرة 5-7 سنوات في مجال التسويق، يفضل في القطاع العقاري",
        "مهارات قيادية ممتازة وقدرة على إدارة الفرق",
        "فهم عميق للتسويق الرقمي ووسائل التواصل الاجتماعي",
        "مهارات تحليلية قوية واتخاذ قرارات مبنية على البيانات"
      ],
      benefits: [
        "راتب تنافسي مع حوافز مبيعات",
        "تأمين صحي شامل للعائلة",
        "فرص للتطوير المهني والترقية",
        "بدل سفر وانتقالات",
        "إجازات سنوية مدفوعة"
      ]
    },
    {
      id: 3,
      title: "مهندس مدني",
      department: "قسم الإنشاءات",
      location: "أسوان الجديدة",
      type: "دوام كامل",
      category: "هندسة",
      experience: "3-5 سنوات",
      education: "بكالوريوس هندسة مدنية",
      salary: "تنافسي",
      postedDate: "25 أكتوبر 2023",
      description: "نبحث عن مهندس مدني للإشراف على تنفيذ المشاريع السكنية والتجارية. المرشح المثالي لديه خبرة في الإشراف على مواقع البناء وضمان الالتزام بالمعايير الهندسية والجداول الزمنية.",
      responsibilities: [
        "الإشراف على تنفيذ المشاريع الإنشائية وفقاً للمخططات والمواصفات",
        "مراجعة واعتماد المخططات التنفيذية والتنسيق مع المقاولين",
        "متابعة جداول العمل وضمان الالتزام بالمواعيد النهائية",
        "إعداد تقارير دورية عن تقدم العمل والتحديات",
        "ضمان الالتزام بمعايير الجودة والسلامة في مواقع العمل"
      ],
      requirements: [
        "بكالوريوس في الهندسة المدنية",
        "خبرة 3-5 سنوات في الإشراف على المشاريع الإنشائية",
        "معرفة جيدة بكودات البناء المصرية والعالمية",
        "إتقان برامج AutoCAD وMS Project",
        "مهارات قيادية وقدرة على حل المشكلات"
      ],
      benefits: [
        "راتب تنافسي",
        "تأمين صحي",
        "بدل مواصلات",
        "فرص للتدريب والتطوير المهني",
        "بيئة عمل محفزة"
      ]
    },
    {
      id: 4,
      title: "مستشار مبيعات عقارية",
      department: "قسم المبيعات",
      location: "القاهرة",
      type: "دوام كامل",
      category: "مبيعات",
      experience: "2-4 سنوات",
      education: "بكالوريوس",
      salary: "أساسي + عمولة",
      postedDate: "1 نوفمبر 2023",
      description: "نبحث عن مستشار مبيعات عقارية ديناميكي للانضمام إلى فريق المبيعات لدينا. المرشح المثالي لديه شغف بالعقارات وقدرة على بناء علاقات قوية مع العملاء وتحقيق أهداف المبيعات.",
      responsibilities: [
        "عرض وتسويق الوحدات العقارية للعملاء المحتملين",
        "تقديم استشارات متخصصة للعملاء حول خيارات الاستثمار العقاري",
        "متابعة العملاء المحتملين وتحويلهم إلى عملاء فعليين",
        "إعداد عقود البيع والتنسيق مع الإدارة القانونية",
        "المشاركة في المعارض والفعاليات العقارية"
      ],
      requirements: [
        "بكالوريوس في أي تخصص، يفضل إدارة أعمال أو تسويق",
        "خبرة 2-4 سنوات في مجال المبيعات، يفضل في القطاع العقاري",
        "مهارات تواصل ممتازة وقدرة على الإقناع",
        "معرفة جيدة بسوق العقارات المصري",
        "الالتزام بتحقيق أهداف المبيعات"
      ],
      benefits: [
        "راتب أساسي مع عمولات مجزية على المبيعات",
        "تأمين صحي",
        "برامج تدريبية متقدمة",
        "فرص للترقية بناءً على الأداء",
        "بيئة عمل محفزة وداعمة"
      ]
    },
    {
      id: 5,
      title: "محاسب",
      department: "قسم المالية",
      location: "أسوان الجديدة",
      type: "دوام كامل",
      category: "مالية",
      experience: "3-5 سنوات",
      education: "بكالوريوس محاسبة",
      salary: "تنافسي",
      postedDate: "5 نوفمبر 2023",
      description: "نبحث عن محاسب ذو خبرة للانضمام إلى فريق المالية لدينا. المرشح المثالي لديه خبرة في المحاسبة العقارية وإعداد التقارير المالية وإدارة التدفقات النقدية.",
      responsibilities: [
        "إعداد وتحليل التقارير المالية الدورية",
        "إدارة حسابات المشاريع العقارية ومتابعة التدفقات النقدية",
        "إعداد الميزانيات التقديرية ومراقبة الأداء المالي",
        "التنسيق مع المراجعين الخارجيين والجهات الضريبية",
        "ضمان الامتثال للمعايير المحاسبية والضريبية"
      ],
      requirements: [
        "بكالوريوس في المحاسبة أو المالية",
        "خبرة 3-5 سنوات في مجال المحاسبة، يفضل في القطاع العقاري",
        "معرفة جيدة بالمعايير المحاسبية المصرية والدولية",
        "إتقان برامج المحاسبة وExcel",
        "دقة عالية في العمل والتزام بالمواعيد النهائية"
      ],
      benefits: [
        "راتب تنافسي",
        "تأمين صحي",
        "فرص للتطوير المهني",
        "بيئة عمل مستقرة",
        "إجازات سنوية مدفوعة"
      ]
    },
    {
      id: 6,
      title: "مصمم جرافيك",
      department: "قسم التسويق",
      location: "القاهرة",
      type: "دوام كامل",
      category: "تصميم",
      experience: "2-4 سنوات",
      education: "بكالوريوس تصميم جرافيك أو فنون",
      salary: "تنافسي",
      postedDate: "10 نوفمبر 2023",
      description: "نبحث عن مصمم جرافيك مبدع للانضمام إلى فريق التسويق لدينا. المرشح المثالي لديه شغف بالتصميم وقدرة على إنشاء مواد تسويقية جذابة للمشاريع العقارية.",
      responsibilities: [
        "تصميم مواد تسويقية للمشاريع العقارية (بروشورات، كتالوجات، لافتات)",
        "إنشاء محتوى بصري لوسائل التواصل الاجتماعي والموقع الإلكتروني",
        "تطوير هوية بصرية متسقة للمشاريع العقارية",
        "تصميم العروض التقديمية والإنفوجرافيك",
        "التعاون مع فريق التسويق لتنفيذ الحملات الإعلانية"
      ],
      requirements: [
        "بكالوريوس في تصميم الجرافيك أو الفنون",
        "خبرة 2-4 سنوات في مجال التصميم الجرافيكي",
        "إتقان برامج Adobe Creative Suite (Photoshop, Illustrator, InDesign)",
        "مهارات إبداعية قوية وحس فني متطور",
        "القدرة على العمل ضمن فريق والالتزام بالمواعيد النهائية"
      ],
      benefits: [
        "راتب تنافسي",
        "تأمين صحي",
        "بيئة عمل إبداعية",
        "فرص للتطوير المهني",
        "مرونة في ساعات العمل"
      ]
    }
  ];

  const filteredJobs = activeFilter === 'all' 
    ? jobs 
    : jobs.filter(job => job.category === activeFilter);

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>وظائف الفراعنة</h1>
          <p className={styles.pageDescription}>انضم إلى فريق الفراعنة للتطوير العقاري وكن جزءاً من نجاحنا</p>
        </div>

        {/* Filters */}
        <div className={styles.filtersContainer}>
          <div className={styles.filtersTitle}>
            <FontAwesomeIcon icon={faFilter} className={styles.filterIcon} />
            <span>تصفية الوظائف</span>
          </div>
          <div className={styles.filterButtons}>
            <button 
              className={`${styles.filterButton} ${activeFilter === 'all' ? styles.active : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              الكل
            </button>
            <button 
              className={`${styles.filterButton} ${activeFilter === 'هندسة' ? styles.active : ''}`}
              onClick={() => setActiveFilter('هندسة')}
            >
              <FontAwesomeIcon icon={faBuilding} className={styles.buttonIcon} />
              هندسة
            </button>
            <button 
              className={`${styles.filterButton} ${activeFilter === 'تسويق' ? styles.active : ''}`}
              onClick={() => setActiveFilter('تسويق')}
            >
              <FontAwesomeIcon icon={faBriefcase} className={styles.buttonIcon} />
              تسويق
            </button>
            <button 
              className={`${styles.filterButton} ${activeFilter === 'مبيعات' ? styles.active : ''}`}
              onClick={() => setActiveFilter('مبيعات')}
            >
              <FontAwesomeIcon icon={faMoneyBillWave} className={styles.buttonIcon} />
              مبيعات
            </button>
            <button 
              className={`${styles.filterButton} ${activeFilter === 'مالية' ? styles.active : ''}`}
              onClick={() => setActiveFilter('مالية')}
            >
              <FontAwesomeIcon icon={faMoneyBillWave} className={styles.buttonIcon} />
              مالية
            </button>
            <button 
              className={`${styles.filterButton} ${activeFilter === 'تصميم' ? styles.active : ''}`}
              onClick={() => setActiveFilter('تصميم')}
            >
              <FontAwesomeIcon icon={faGraduationCap} className={styles.buttonIcon} />
              تصميم
            </button>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className={styles.jobsContainer}>
          <div className={styles.jobsList}>
            {filteredJobs.map(job => (
              <div 
                key={job.id} 
                className={`${styles.jobCard} ${selectedJob && selectedJob.id === job.id ? styles.active : ''}`}
                onClick={() => setSelectedJob(job)}
              >
                <h2 className={styles.jobTitle}>{job.title}</h2>
                <div className={styles.jobMeta}>
                  <div className={styles.jobDepartment}>
                    <FontAwesomeIcon icon={faBriefcase} className={styles.metaIcon} />
                    <span>{job.department}</span>
                  </div>
                  <div className={styles.jobLocation}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.metaIcon} />
                    <span>{job.location}</span>
                  </div>
                  <div className={styles.jobDate}>
                    <FontAwesomeIcon icon={faCalendarAlt} className={styles.metaIcon} />
                    <span>{job.postedDate}</span>
                  </div>
                </div>
                <p className={styles.jobDescription}>{job.description}</p>
                <div className={styles.jobType}>{job.type}</div>
              </div>
            ))}

            {filteredJobs.length === 0 && (
              <div className={styles.noResults}>
                <p>لا توجد وظائف متاحة بهذا التصنيف حالياً</p>
              </div>
            )}
          </div>

          <div className={styles.jobDetails}>
            {selectedJob ? (
              <div className={styles.jobDetailsContent}>
                <div className={styles.jobHeader}>
                  <h2 className={styles.detailsTitle}>{selectedJob.title}</h2>
                  <div className={styles.detailsMeta}>
                    <div className={styles.metaItem}>
                      <FontAwesomeIcon icon={faBriefcase} className={styles.detailsIcon} />
                      <span>{selectedJob.department}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.detailsIcon} />
                      <span>{selectedJob.location}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <FontAwesomeIcon icon={faCalendarAlt} className={styles.detailsIcon} />
                      <span>تاريخ النشر: {selectedJob.postedDate}</span>
                    </div>
                  </div>
                  <div className={styles.jobTypeDetail}>{selectedJob.type}</div>
                </div>

                <div className={styles.jobSection}>
                  <h3 className={styles.sectionTitle}>وصف الوظيفة</h3>
                  <p className={styles.sectionContent}>{selectedJob.description}</p>
                </div>

                <div className={styles.jobSection}>
                  <h3 className={styles.sectionTitle}>المسؤوليات</h3>
                  <ul className={styles.sectionList}>
                    {selectedJob.responsibilities.map((item, index) => (
                      <li key={index} className={styles.listItem}>
                        <FontAwesomeIcon icon={faCheckCircle} className={styles.listIcon} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.jobSection}>
                  <h3 className={styles.sectionTitle}>المتطلبات</h3>
                  <ul className={styles.sectionList}>
                    {selectedJob.requirements.map((item, index) => (
                      <li key={index} className={styles.listItem}>
                        <FontAwesomeIcon icon={faCheckCircle} className={styles.listIcon} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.jobSection}>
                  <h3 className={styles.sectionTitle}>المميزات</h3>
                  <ul className={styles.sectionList}>
                    {selectedJob.benefits.map((item, index) => (
                      <li key={index} className={styles.listItem}>
                        <FontAwesomeIcon icon={faCheckCircle} className={styles.listIcon} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.applySection}>
                  <a href="#applicationForm" className="gold-button">تقدم للوظيفة</a>
                </div>
              </div>
            ) : (
              <div className={styles.noSelectionMessage}>
                <FontAwesomeIcon icon={faBriefcase} className={styles.noSelectionIcon} />
                <p>الرجاء اختيار وظيفة من القائمة لعرض التفاصيل</p>
              </div>
            )}
          </div>
        </div>

        {/* Application Form */}
        <div id="applicationForm" className={styles.applicationForm}>
          <h2 className={styles.formTitle}>تقدم لوظيفة في الفراعنة</h2>
          <p className={styles.formDescription}>املأ النموذج التالي للتقدم للوظيفة المناسبة لك</p>
          
          <form className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">الاسم الكامل</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">البريد الإلكتروني</label>
                <input type="email" id="email" name="email" required />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="phone">رقم الهاتف</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="position">الوظيفة المطلوبة</label>
                <select id="position" name="position" required>
                  <option value="">اختر الوظيفة</option>
                  {jobs.map(job => (
                    <option key={job.id} value={job.title}>{job.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="experience">الخبرات السابقة</label>
              <textarea id="experience" name="experience" rows="4" required></textarea>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="cv" className={styles.fileLabel}>
                السيرة الذاتية (PDF أو Word)
                <input type="file" id="cv" name="cv" accept=".pdf,.doc,.docx" required />
              </label>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">رسالة تعريفية</label>
              <textarea id="message" name="message" rows="4"></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              <FontAwesomeIcon icon={faPaperPlane} className={styles.submitIcon} />
              إرسال الطلب
            </button>
          </form>
        </div>

        {/* Join Our Team */}
        <div className={styles.joinTeam}>
          <h2 className={styles.joinTitle}>انضم إلى فريق النجاح</h2>
          <p className={styles.joinDescription}>في شركة الفراعنة للتطوير العقاري، نؤمن بأن موظفينا هم أساس نجاحنا. نحن نسعى دائماً لاستقطاب المواهب المتميزة والكفاءات العالية للانضمام إلى فريقنا.</p>
          
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <h3 className={styles.benefitTitle}>التطوير المهني</h3>
              <p className={styles.benefitText}>نوفر فرص تدريب وتطوير مستمرة لموظفينا لتعزيز مهاراتهم وتطوير مساراتهم المهنية.</p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <h3 className={styles.benefitTitle}>بيئة عمل محفزة</h3>
              <p className={styles.benefitText}>نحرص على توفير بيئة عمل إيجابية ومحفزة تشجع على الإبداع والابتكار وتحقيق الذات.</p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <FontAwesomeIcon icon={faMoneyBillWave} />
              </div>
              <h3 className={styles.benefitTitle}>حزمة مزايا تنافسية</h3>
              <p className={styles.benefitText}>نقدم رواتب تنافسية وحزمة مزايا شاملة تشمل التأمين الصحي والمكافآت والحوافز.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CareersPage;