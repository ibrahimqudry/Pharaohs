import { useState } from 'react';
import styles from './EditorStyles.module.css';

export default function CareersEditor() {
  const [jobs, setJobs] = useState([
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
    // More jobs would be here
  ]);

  const [editingJob, setEditingJob] = useState(null);
  const [newJob, setNewJob] = useState({
    title: "",
    department: "",
    location: "",
    type: "دوام كامل",
    category: "",
    experience: "",
    education: "",
    salary: "تنافسي",
    postedDate: "",
    description: "",
    responsibilities: [""],
    requirements: [""],
    benefits: [""]
  });

  const handleEditJob = (job) => {
    setEditingJob({...job});
  };

  const handleUpdateJob = () => {
    setJobs(jobs.map(j => j.id === editingJob.id ? editingJob : j));
    setEditingJob(null);
    // In a real app, you would save to a database here
    alert('تم تحديث الوظيفة بنجاح');
  };

  const handleAddListItem = (listName) => {
    if (editingJob) {
      setEditingJob({
        ...editingJob,
        [listName]: [...editingJob[listName], ""]
      });
    } else {
      setNewJob({
        ...newJob,
        [listName]: [...newJob[listName], ""]
      });
    }
  };

  const handleRemoveListItem = (listName, index) => {
    if (editingJob) {
      const updatedList = [...editingJob[listName]];
      updatedList.splice(index, 1);
      setEditingJob({
        ...editingJob,
        [listName]: updatedList
      });
    } else {
      const updatedList = [...newJob[listName]];
      updatedList.splice(index, 1);
      setNewJob({
        ...newJob,
        [listName]: updatedList
      });
    }
  };

  const handleListItemChange = (listName, index, value) => {
    if (editingJob) {
      const updatedList = [...editingJob[listName]];
      updatedList[index] = value;
      setEditingJob({
        ...editingJob,
        [listName]: updatedList
      });
    } else {
      const updatedList = [...newJob[listName]];
      updatedList[index] = value;
      setNewJob({
        ...newJob,
        [listName]: updatedList
      });
    }
  };

  const handleAddJob = () => {
    const jobToAdd = {
      ...newJob,
      id: jobs.length > 0 ? Math.max(...jobs.map(j => j.id)) + 1 : 1
    };
    setJobs([...jobs, jobToAdd]);
    setNewJob({
      title: "",
      department: "",
      location: "",
      type: "دوام كامل",
      category: "",
      experience: "",
      education: "",
      salary: "تنافسي",
      postedDate: "",
      description: "",
      responsibilities: [""],
      requirements: [""],
      benefits: [""]
    });
    // In a real app, you would save to a database here
    alert('تمت إضافة الوظيفة بنجاح');
  };

  const handleDeleteJob = (id) => {
    if (confirm('هل أنت متأكد من حذف هذه الوظيفة؟')) {
      setJobs(jobs.filter(j => j.id !== id));
      // In a real app, you would delete from a database here
      alert('تم حذف الوظيفة بنجاح');
    }
  };

  return (
    <div className={styles.editorWrapper}>
      <div className={styles.projectsList}>
        <h2 className={styles.sectionTitle}>قائمة الوظائف</h2>
        <div className={styles.projectsTable}>
          <table>
            <thead>
              <tr>
                <th>المسمى الوظيفي</th>
                <th>القسم</th>
                <th>الموقع</th>
                <th>نوع الوظيفة</th>
                <th>الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map(job => (
                <tr key={job.id}>
                  <td>{job.title}</td>
                  <td>{job.department}</td>
                  <td>{job.location}</td>
                  <td>{job.type}</td>
                  <td>
                    <button 
                      className={styles.editButton}
                      onClick={() => handleEditJob(job)}
                    >
                      تعديل
                    </button>
                    <button 
                      className={styles.deleteButton}
                      onClick={() => handleDeleteJob(job.id)}
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {editingJob ? (
        <div className={styles.editForm}>
          <h2 className={styles.sectionTitle}>تعديل الوظيفة</h2>
          <div className={styles.formGroup}>
            <label>المسمى الوظيفي</label>
            <input 
              type="text" 
              value={editingJob.title}
              onChange={(e) => setEditingJob({...editingJob, title: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>القسم</label>
            <input 
              type="text" 
              value={editingJob.department}
              onChange={(e) => setEditingJob({...editingJob, department: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>الموقع</label>
            <input 
              type="text" 
              value={editingJob.location}
              onChange={(e) => setEditingJob({...editingJob, location: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>نوع الوظيفة</label>
            <select
              value={editingJob.type}
              onChange={(e) => setEditingJob({...editingJob, type: e.target.value})}
            >
              <option value="دوام كامل">دوام كامل</option>
              <option value="دوام جزئي">دوام جزئي</option>
              <option value="عن بعد">عن بعد</option>
              <option value="تدريب">تدريب</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>التخصص</label>
            <input 
              type="text" 
              value={editingJob.category}
              onChange={(e) => setEditingJob({...editingJob, category: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>الخبرة المطلوبة</label>
            <input 
              type="text" 
              value={editingJob.experience}
              onChange={(e) => setEditingJob({...editingJob, experience: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>المؤهل العلمي</label>
            <input 
              type="text" 
              value={editingJob.education}
              onChange={(e) => setEditingJob({...editingJob, education: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>الراتب</label>
            <input 
              type="text" 
              value={editingJob.salary}
              onChange={(e) => setEditingJob({...editingJob, salary: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>تاريخ النشر</label>
            <input 
              type="text" 
              value={editingJob.postedDate}
              onChange={(e) => setEditingJob({...editingJob, postedDate: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>الوصف</label>
            <textarea 
              value={editingJob.description}
              onChange={(e) => setEditingJob({...editingJob, description: e.target.value})}
              rows="4"
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <label>المسؤوليات</label>
            {editingJob.responsibilities.map((responsibility, index) => (
              <div key={index} className={styles.featureInput}>
                <input 
                  type="text" 
                  value={responsibility}
                  onChange={(e) => handleListItemChange('responsibilities', index, e.target.value)}
                />
                <button 
                  type="button" 
                  className={styles.removeButton}
                  onClick={() => handleRemoveListItem('responsibilities', index)}
                >
                  حذف
                </button>
              </div>
            ))}
            <button 
              type="button" 
              className={styles.addButton}
              onClick={() => handleAddListItem('responsibilities')}
            >
              إضافة مسؤولية
            </button>
          </div>
          <div className={styles.formGroup}>
            <label>المتطلبات</label>
            {editingJob.requirements.map((requirement, index) => (
              <div key={index} className={styles.featureInput}>
                <input 
                  type="text" 
                  value={requirement}
                  onChange={(e) => handleListItemChange('requirements', index, e.target.value)}
                />
                <button 
                  type="button" 
                  className={styles.removeButton}
                  onClick={() => handleRemoveListItem('requirements', index)}
                >
                  حذف
                </button>
              </div>
            ))}
            <button 
              type="button" 
              className={styles.addButton}
              onClick={() => handleAddListItem('requirements')}
            >
              إضافة متطلب
            </button>
          </div>
          <div className={styles.formGroup}>
            <label>المميزات</label>
            {editingJob.benefits.map((benefit, index) => (
              <div key={index} className={styles.featureInput}>
                <input 
                  type="text" 
                  value={benefit}
                  onChange={(e) => handleListItemChange('benefits', index, e.target.value)}
                />
                <button 
                  type="button" 
                  className={styles.removeButton}
                  onClick={() => handleRemoveListItem('benefits', index)}
                >
                  حذف
                </button>
              </div>
            ))}
            <button 
              type="button" 
              className={styles.addButton}
              onClick={() => handleAddListItem('benefits')}
            >
              إضافة ميزة
            </button>
          </div>
          <div className={styles.formActions}>
            <button 
              className={styles.saveButton}
              onClick={handleUpdateJob}
            >
              حفظ التغييرات
            </button>
            <button 
              className={styles.cancelButton}
              onClick={() => setEditingJob(null)}
            >
              إلغاء
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.addForm}>
          <h2 className={styles.sectionTitle}>إضافة وظيفة جديدة</h2>
          <div className={styles.formGroup}>
            <label>المسمى الوظيفي</label>
            <input 
              type="text" 
              value={newJob.title}
              onChange={(e) => setNewJob({...newJob, title: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>القسم</label>
            <input 
              type="text" 
              value={newJob.department}
              onChange={(e) => setNewJob({...newJob, department: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>الموقع</label>
            <input 
              type="text" 
              value={newJob.location}
              onChange={(e) => setNewJob({...newJob, location: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>نوع الوظيفة</label>
            <select
              value={newJob.type}
              onChange={(e) => setNewJob({...newJob, type: e.target.value})}
            >
              <option value="دوام كامل">دوام كامل</option>
              <option value="دوام جزئي">دوام جزئي</option>
              <option value="عن بعد">عن بعد</option>
              <option value="تدريب">تدريب</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>التخصص</label>
            <input 
              type="text" 
              value={newJob.category}
              onChange={(e) => setNewJob({...newJob, category: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>الخبرة المطلوبة</label>
            <input 
              type="text" 
              value={newJob.experience}
              onChange={(e) => setNewJob({...newJob, experience: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>المؤهل العلمي</label>
            <input 
              type="text" 
              value={newJob.education}
              onChange={(e) => setNewJob({...newJob, education: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>الراتب</label>
            <input 
              type="text" 
              value={newJob.salary}
              onChange={(e) => setNewJob({...newJob, salary: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>تاريخ النشر</label>
            <input 
              type="text" 
              value={newJob.postedDate}
              onChange={(e) => setNewJob({...newJob, postedDate: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>الوصف</label>
            <textarea 
              value={newJob.description}
              onChange={(e) => setNewJob({...newJob, description: e.target.value})}
              rows="4"
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <label>المسؤوليات</label>
            {newJob.responsibilities.map((responsibility, index) => (
              <div key={index} className={styles.featureInput}>
                <input 
                  type="text" 
                  value={responsibility}
                  onChange={(e) => handleListItemChange('responsibilities', index, e.target.value)}
                />
                {newJob.responsibilities.length > 1 && (
                  <button 
                    type="button" 
                    className={styles.removeButton}
                    onClick={() => handleRemoveListItem('responsibilities', index)}
                  >
                    حذف
                  </button>
                )}
              </div>
            ))}
            <button 
              type="button" 
              className={styles.addButton}
              onClick={() => handleAddListItem('responsibilities')}
            >
              إضافة مسؤولية
            </button>
          </div>
          <div className={styles.formGroup}>
            <label>المتطلبات</label>
            {newJob.requirements.map((requirement, index) => (
              <div key={index} className={styles.featureInput}>
                <input 
                  type="text" 
                  value={requirement}
                  onChange={(e) => handleListItemChange('requirements', index, e.target.value)}
                />
                {newJob.requirements.length > 1 && (
                  <button 
                    type="button" 
                    className={styles.removeButton}
                    onClick={() => handleRemoveListItem('requirements', index)}
                  >
                    حذف
                  </button>
                )}
              </div>
            ))}
            <button 
              type="button" 
              className={styles.addButton}
              onClick={() => handleAddListItem('requirements')}
            >
              إضافة متطلب
            </button>
          </div>
          <div className={styles.formGroup}>
            <label>المميزات</label>
            {newJob.benefits.map((benefit, index) => (
              <div key={index} className={styles.featureInput}>
                <input 
                  type="text" 
                  value={benefit}
                  onChange={(e) => handleListItemChange('benefits', index, e.target.value)}
                />
                {newJob.benefits.length > 1 && (
                  <button 
                    type="button" 
                    className={styles.removeButton}
                    onClick={() => handleRemoveListItem('benefits', index)}
                  >
                    حذف
                  </button>
                )}
              </div>
            ))}
            <button 
              type="button" 
              className={styles.addButton}
              onClick={() => handleAddListItem('benefits')}
            >
              إضافة ميزة
            </button>
          </div>
          <div className={styles.formActions}>
            <button 
              className={styles.saveButton}
              onClick={handleAddJob}
            >
              إضافة الوظيفة
            </button>
          </div>
        </div>
      )}
    </div>
  );
}