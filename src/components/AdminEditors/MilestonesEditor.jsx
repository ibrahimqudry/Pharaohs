import { useState } from 'react';
import styles from './EditorStyles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faHome, faLandmark, faMapMarkerAlt, faCheckCircle, faCalendarAlt, faHardHat, faTools, faFileContract, faKey } from '@fortawesome/free-solid-svg-icons';

export default function MilestonesEditor() {
  const [projects, setProjects] = useState([
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
          icon: "faFileContract"
        },
        {
          id: 2,
          title: "التصميم والتخطيط",
          date: "مارس 2022",
          status: "مكتمل",
          description: "تم الانتهاء من التصاميم المعمارية والإنشائية واعتمادها من الجهات المختصة.",
          icon: "faTools"
        },
        {
          id: 3,
          title: "الحفر والأساسات",
          date: "يونيو 2022",
          status: "مكتمل",
          description: "تم الانتهاء من أعمال الحفر وصب الأساسات وفقاً للمواصفات الهندسية.",
          icon: "faHardHat"
        },
        {
          id: 4,
          title: "الهيكل الخرساني",
          date: "ديسمبر 2022",
          status: "مكتمل",
          description: "تم الانتهاء من أعمال الهيكل الخرساني لجميع الطوابق.",
          icon: "faBuilding"
        },
        {
          id: 5,
          title: "التشطيبات الخارجية",
          date: "يونيو 2023",
          status: "جاري",
          description: "جاري العمل على التشطيبات الخارجية للمبنى والواجهات.",
          icon: "faBuilding"
        },
        {
          id: 6,
          title: "التشطيبات الداخلية",
          date: "أكتوبر 2023",
          status: "جاري",
          description: "جاري العمل على التشطيبات الداخلية للوحدات السكنية.",
          icon: "faHome"
        },
        {
          id: 7,
          title: "المرافق والخدمات",
          date: "فبراير 2024",
          status: "مخطط",
          description: "تركيب وتشغيل كافة المرافق والخدمات مثل المصاعد والكهرباء والمياه.",
          icon: "faTools"
        },
        {
          id: 8,
          title: "التسليم",
          date: "يونيو 2024",
          status: "مخطط",
          description: "تسليم الوحدات للملاك بعد الانتهاء من كافة الأعمال والتشطيبات.",
          icon: "faKey"
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
          icon: "faFileContract"
        },
        {
          id: 2,
          title: "التصميم والتخطيط",
          date: "يوليو 2022",
          status: "مكتمل",
          description: "تم الانتهاء من التصاميم المعمارية والإنشائية واعتمادها من الجهات المختصة.",
          icon: "faTools"
        },
        {
          id: 3,
          title: "الحفر والأساسات",
          date: "نوفمبر 2022",
          status: "مكتمل",
          description: "تم الانتهاء من أعمال الحفر وصب الأساسات وفقاً للمواصفات الهندسية.",
          icon: "faHardHat"
        },
        {
          id: 4,
          title: "الهيكل الخرساني",
          date: "مايو 2023",
          status: "جاري",
          description: "جاري العمل على إنشاء الهيكل الخرساني للفلل.",
          icon: "faBuilding"
        }
      ]
    }
  ]);

  const [editingProject, setEditingProject] = useState(null);
  const [editingMilestone, setEditingMilestone] = useState(null);
  const [newProject, setNewProject] = useState({
    title: "",
    location: "",
    type: "شقق",
    description: "",
    completion: "",
    currentPhase: "",
    progress: 0,
    image: "",
    milestones: []
  });
  const [newMilestone, setNewMilestone] = useState({
    title: "",
    date: "",
    status: "مخطط",
    description: "",
    icon: "faFileContract"
  });

  const iconOptions = [
    { value: "faFileContract", label: "عقد" },
    { value: "faTools", label: "أدوات" },
    { value: "faHardHat", label: "خوذة" },
    { value: "faBuilding", label: "مبنى" },
    { value: "faHome", label: "منزل" },
    { value: "faKey", label: "مفتاح" },
    { value: "faMapMarkerAlt", label: "موقع" },
    { value: "faCalendarAlt", label: "تقويم" },
    { value: "faCheckCircle", label: "تم" },
    { value: "faLandmark", label: "معلم" }
  ];

  const getIconComponent = (iconName) => {
    switch(iconName) {
      case "faFileContract": return faFileContract;
      case "faTools": return faTools;
      case "faHardHat": return faHardHat;
      case "faBuilding": return faBuilding;
      case "faHome": return faHome;
      case "faKey": return faKey;
      case "faMapMarkerAlt": return faMapMarkerAlt;
      case "faCalendarAlt": return faCalendarAlt;
      case "faCheckCircle": return faCheckCircle;
      case "faLandmark": return faLandmark;
      default: return faFileContract;
    }
  };

  const handleEditProject = (project) => {
    setEditingProject({...project});
    setEditingMilestone(null);
  };

  const handleUpdateProject = () => {
    setProjects(projects.map(project => 
      project.id === editingProject.id ? editingProject : project
    ));
    setEditingProject(null);
  };

  const handleAddProject = () => {
    const newProjectWithId = {
      ...newProject,
      id: projects.length > 0 ? Math.max(...projects.map(project => project.id)) + 1 : 1
    };
    setProjects([...projects, newProjectWithId]);
    setNewProject({
      title: "",
      location: "",
      type: "شقق",
      description: "",
      completion: "",
      currentPhase: "",
      progress: 0,
      image: "",
      milestones: []
    });
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter(project => project.id !== id));
    if (editingProject && editingProject.id === id) {
      setEditingProject(null);
    }
  };

  const handleEditMilestone = (milestone, projectId) => {
    setEditingMilestone({...milestone, projectId});
  };

  const handleUpdateMilestone = () => {
    const updatedProjects = projects.map(project => {
      if (project.id === editingMilestone.projectId) {
        return {
          ...project,
          milestones: project.milestones.map(milestone => 
            milestone.id === editingMilestone.id ? 
            {
              id: editingMilestone.id,
              title: editingMilestone.title,
              date: editingMilestone.date,
              status: editingMilestone.status,
              description: editingMilestone.description,
              icon: editingMilestone.icon
            } : milestone
          )
        };
      }
      return project;
    });
    setProjects(updatedProjects);
    setEditingMilestone(null);
  };

  const handleAddMilestone = (projectId) => {
    const updatedProjects = projects.map(project => {
      if (project.id === projectId) {
        const newMilestoneWithId = {
          ...newMilestone,
          id: project.milestones.length > 0 ? 
              Math.max(...project.milestones.map(m => m.id)) + 1 : 1
        };
        return {
          ...project,
          milestones: [...project.milestones, newMilestoneWithId]
        };
      }
      return project;
    });
    setProjects(updatedProjects);
    setNewMilestone({
      title: "",
      date: "",
      status: "مخطط",
      description: "",
      icon: "faFileContract"
    });
  };

  const handleDeleteMilestone = (milestoneId, projectId) => {
    const updatedProjects = projects.map(project => {
      if (project.id === projectId) {
        return {
          ...project,
          milestones: project.milestones.filter(m => m.id !== milestoneId)
        };
      }
      return project;
    });
    setProjects(updatedProjects);
    if (editingMilestone && editingMilestone.id === milestoneId) {
      setEditingMilestone(null);
    }
  };

  return (
    <div className={styles.editorWrapper}>
      <h2 className={styles.sectionTitle}>إدارة مراحل المشاريع</h2>
      
      {/* List of existing projects */}
      <div className={styles.tableContainer}>
        <h3>قائمة المشاريع الحالية</h3>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>اسم المشروع</th>
              <th>الموقع</th>
              <th>النوع</th>
              <th>نسبة الإنجاز</th>
              <th>المرحلة الحالية</th>
              <th>موعد التسليم</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(project => (
              <tr key={project.id}>
                <td>{project.title}</td>
                <td>{project.location}</td>
                <td>{project.type}</td>
                <td>{project.progress}%</td>
                <td>{project.currentPhase}</td>
                <td>{project.completion}</td>
                <td>
                  <button 
                    className={styles.editButton}
                    onClick={() => handleEditProject(project)}
                  >
                    تعديل
                  </button>
                  <button 
                    className={styles.deleteButton}
                    onClick={() => handleDeleteProject(project.id)}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit project form */}
      {editingProject && (
        <div className={styles.editForm}>
          <h3>تعديل المشروع</h3>
          <div className={styles.formGroup}>
            <label>اسم المشروع</label>
            <input 
              type="text" 
              value={editingProject.title}
              onChange={(e) => setEditingProject({...editingProject, title: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>الموقع</label>
            <input 
              type="text" 
              value={editingProject.location}
              onChange={(e) => setEditingProject({...editingProject, location: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>نوع المشروع</label>
            <select
              value={editingProject.type}
              onChange={(e) => setEditingProject({...editingProject, type: e.target.value})}
            >
              <option value="شقق">شقق</option>
              <option value="فلل">فلل</option>
              <option value="تجاري">تجاري</option>
              <option value="أراضي">أراضي</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>وصف المشروع</label>
            <textarea 
              value={editingProject.description}
              onChange={(e) => setEditingProject({...editingProject, description: e.target.value})}
              rows="3"
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <label>موعد التسليم</label>
            <input 
              type="text" 
              value={editingProject.completion}
              onChange={(e) => setEditingProject({...editingProject, completion: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>المرحلة الحالية</label>
            <input 
              type="text" 
              value={editingProject.currentPhase}
              onChange={(e) => setEditingProject({...editingProject, currentPhase: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>نسبة الإنجاز (%)</label>
            <input 
              type="number" 
              min="0"
              max="100"
              value={editingProject.progress}
              onChange={(e) => setEditingProject({...editingProject, progress: parseInt(e.target.value)})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>رابط الصورة</label>
            <input 
              type="text" 
              value={editingProject.image}
              onChange={(e) => setEditingProject({...editingProject, image: e.target.value})}
            />
          </div>
          
          <h4>مراحل المشروع</h4>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>عنوان المرحلة</th>
                <th>التاريخ</th>
                <th>الحالة</th>
                <th>الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {editingProject.milestones.map(milestone => (
                <tr key={milestone.id}>
                  <td>{milestone.title}</td>
                  <td>{milestone.date}</td>
                  <td>{milestone.status}</td>
                  <td>
                    <button 
                      className={styles.editButton}
                      onClick={() => handleEditMilestone(milestone, editingProject.id)}
                    >
                      تعديل
                    </button>
                    <button 
                      className={styles.deleteButton}
                      onClick={() => handleDeleteMilestone(milestone.id, editingProject.id)}
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Add new milestone form */}
          {!editingMilestone && (
            <div className={styles.nestedForm}>
              <h4>إضافة مرحلة جديدة</h4>
              <div className={styles.formGroup}>
                <label>عنوان المرحلة</label>
                <input 
                  type="text" 
                  value={newMilestone.title}
                  onChange={(e) => setNewMilestone({...newMilestone, title: e.target.value})}
                />
              </div>
              <div className={styles.formGroup}>
                <label>التاريخ</label>
                <input 
                  type="text" 
                  value={newMilestone.date}
                  onChange={(e) => setNewMilestone({...newMilestone, date: e.target.value})}
                  placeholder="مثال: يناير 2023"
                />
              </div>
              <div className={styles.formGroup}>
                <label>الحالة</label>
                <select
                  value={newMilestone.status}
                  onChange={(e) => setNewMilestone({...newMilestone, status: e.target.value})}
                >
                  <option value="مكتمل">مكتمل</option>
                  <option value="جاري">جاري</option>
                  <option value="مخطط">مخطط</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>الوصف</label>
                <textarea 
                  value={newMilestone.description}
                  onChange={(e) => setNewMilestone({...newMilestone, description: e.target.value})}
                  rows="2"
                ></textarea>
              </div>
              <div className={styles.formGroup}>
                <label>الأيقونة</label>
                <select
                  value={newMilestone.icon}
                  onChange={(e) => setNewMilestone({...newMilestone, icon: e.target.value})}
                >
                  {iconOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <button 
                className={styles.addButton}
                onClick={() => handleAddMilestone(editingProject.id)}
              >
                إضافة المرحلة
              </button>
            </div>
          )}
          
          {/* Edit milestone form */}
          {editingMilestone && (
            <div className={styles.nestedForm}>
              <h4>تعديل المرحلة</h4>
              <div className={styles.formGroup}>
                <label>عنوان المرحلة</label>
                <input 
                  type="text" 
                  value={editingMilestone.title}
                  onChange={(e) => setEditingMilestone({...editingMilestone, title: e.target.value})}
                />
              </div>
              <div className={styles.formGroup}>
                <label>التاريخ</label>
                <input 
                  type="text" 
                  value={editingMilestone.date}
                  onChange={(e) => setEditingMilestone({...editingMilestone, date: e.target.value})}
                />
              </div>
              <div className={styles.formGroup}>
                <label>الحالة</label>
                <select
                  value={editingMilestone.status}
                  onChange={(e) => setEditingMilestone({...editingMilestone, status: e.target.value})}
                >
                  <option value="مكتمل">مكتمل</option>
                  <option value="جاري">جاري</option>
                  <option value="مخطط">مخطط</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>الوصف</label>
                <textarea 
                  value={editingMilestone.description}
                  onChange={(e) => setEditingMilestone({...editingMilestone, description: e.target.value})}
                  rows="2"
                ></textarea>
              </div>
              <div className={styles.formGroup}>
                <label>الأيقونة</label>
                <select
                  value={editingMilestone.icon}
                  onChange={(e) => setEditingMilestone({...editingMilestone, icon: e.target.value})}
                >
                  {iconOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.formActions}>
                <button 
                  className={styles.saveButton}
                  onClick={handleUpdateMilestone}
                >
                  حفظ التغييرات
                </button>
                <button 
                  className={styles.cancelButton}
                  onClick={() => setEditingMilestone(null)}
                >
                  إلغاء
                </button>
              </div>
            </div>
          )}
          
          <div className={styles.formActions}>
            <button 
              className={styles.saveButton}
              onClick={handleUpdateProject}
            >
              حفظ التغييرات
            </button>
            <button 
              className={styles.cancelButton}
              onClick={() => setEditingProject(null)}
            >
              إلغاء
            </button>
          </div>
        </div>
      )}

      {/* Add new project form */}
      {!editingProject && (
        <div className={styles.editForm}>
          <h3>إضافة مشروع جديد</h3>
          <div className={styles.formGroup}>
            <label>اسم المشروع</label>
            <input 
              type="text" 
              value={newProject.title}
              onChange={(e) => setNewProject({...newProject, title: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>الموقع</label>
            <input 
              type="text" 
              value={newProject.location}
              onChange={(e) => setNewProject({...newProject, location: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>نوع المشروع</label>
            <select
              value={newProject.type}
              onChange={(e) => setNewProject({...newProject, type: e.target.value})}
            >
              <option value="شقق">شقق</option>
              <option value="فلل">فلل</option>
              <option value="تجاري">تجاري</option>
              <option value="أراضي">أراضي</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>وصف المشروع</label>
            <textarea 
              value={newProject.description}
              onChange={(e) => setNewProject({...newProject, description: e.target.value})}
              rows="3"
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <label>موعد التسليم</label>
            <input 
              type="text" 
              value={newProject.completion}
              onChange={(e) => setNewProject({...newProject, completion: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>المرحلة الحالية</label>
            <input 
              type="text" 
              value={newProject.currentPhase}
              onChange={(e) => setNewProject({...newProject, currentPhase: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>نسبة الإنجاز (%)</label>
            <input 
              type="number" 
              min="0"
              max="100"
              value={newProject.progress}
              onChange={(e) => setNewProject({...newProject, progress: parseInt(e.target.value)})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>رابط الصورة</label>
            <input 
              type="text" 
              value={newProject.image}
              onChange={(e) => setNewProject({...newProject, image: e.target.value})}
            />
          </div>
          <div className={styles.formActions}>
            <button 
              className={styles.addButton}
              onClick={handleAddProject}
            >
              إضافة المشروع
            </button>
          </div>
        </div>
      )}
    </div>
  );
}