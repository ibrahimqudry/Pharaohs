import React, { useState, useEffect } from 'react';
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
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';

export default function CareersPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobsCollection = collection(db, 'jobs');
        const data = await getDocs(jobsCollection);
        setJobs(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  if (loading) {
    return <div>جاري التحميل...</div>;
  }

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