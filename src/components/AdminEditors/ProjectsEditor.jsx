import { useState, useEffect } from 'react';
import styles from './EditorStyles.module.css';

export default function ProjectsEditor() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
      title: "مشروع النيل",
      location: "أسوان الجديدة",
      type: "شقق",
      description: "وحدات سكنية فاخرة بإطلالة مباشرة على النيل، تتميز بتصميم عصري وإطلالات بانورامية.",
      features: [
        { text: "2-4 غرف نوم" },
        { text: "2-3 حمامات" },
        { text: "120-220 متر مربع" }
      ],
      price: "يبدأ من 1.5 مليون جنيه",
      status: "متاح",
      completion: "2024"
    },
    // More projects would be here
  ]);

  const [editingProject, setEditingProject] = useState(null);
  const [newProject, setNewProject] = useState({
    title: "",
    location: "",
    type: "شقق",
    description: "",
    features: [{ text: "" }],
    price: "",
    status: "متاح",
    completion: "",
    image: ""
  });

  const handleEditProject = (project) => {
    setEditingProject({...project});
  };

  const handleUpdateProject = () => {
    setProjects(projects.map(p => p.id === editingProject.id ? editingProject : p));
    setEditingProject(null);
    // In a real app, you would save to a database here
    alert('تم تحديث المشروع بنجاح');
  };

  const handleAddFeature = () => {
    if (editingProject) {
      setEditingProject({
        ...editingProject,
        features: [...editingProject.features, { text: "" }]
      });
    } else {
      setNewProject({
        ...newProject,
        features: [...newProject.features, { text: "" }]
      });
    }
  };

  const handleRemoveFeature = (index) => {
    if (editingProject) {
      const updatedFeatures = [...editingProject.features];
      updatedFeatures.splice(index, 1);
      setEditingProject({
        ...editingProject,
        features: updatedFeatures
      });
    } else {
      const updatedFeatures = [...newProject.features];
      updatedFeatures.splice(index, 1);
      setNewProject({
        ...newProject,
        features: updatedFeatures
      });
    }
  };

  const handleFeatureChange = (index, value) => {
    if (editingProject) {
      const updatedFeatures = [...editingProject.features];
      updatedFeatures[index] = { text: value };
      setEditingProject({
        ...editingProject,
        features: updatedFeatures
      });
    } else {
      const updatedFeatures = [...newProject.features];
      updatedFeatures[index] = { text: value };
      setNewProject({
        ...newProject,
        features: updatedFeatures
      });
    }
  };

  const handleAddProject = () => {
    const projectToAdd = {
      ...newProject,
      id: projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 1
    };
    setProjects([...projects, projectToAdd]);
    setNewProject({
      title: "",
      location: "",
      type: "شقق",
      description: "",
      features: [{ text: "" }],
      price: "",
      status: "متاح",
      completion: "",
      image: ""
    });
    // In a real app, you would save to a database here
    alert('تمت إضافة المشروع بنجاح');
  };

  const handleDeleteProject = (id) => {
    if (confirm('هل أنت متأكد من حذف هذا المشروع؟')) {
      setProjects(projects.filter(p => p.id !== id));
      // In a real app, you would delete from a database here
      alert('تم حذف المشروع بنجاح');
    }
  };

  return (
    <div className={styles.editorWrapper}>
      <div className={styles.projectsList}>
        <h2 className={styles.sectionTitle}>قائمة المشاريع</h2>
        <div className={styles.projectsTable}>
          <table>
            <thead>
              <tr>
                <th>العنوان</th>
                <th>الموقع</th>
                <th>النوع</th>
                <th>الحالة</th>
                <th>الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {projects.map(project => (
                <tr key={project.id}>
                  <td>{project.title}</td>
                  <td>{project.location}</td>
                  <td>{project.type}</td>
                  <td>{project.status}</td>
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
      </div>

      {editingProject ? (
        <div className={styles.editForm}>
          <h2 className={styles.sectionTitle}>تعديل المشروع</h2>
          <div className={styles.formGroup}>
            <label>عنوان المشروع</label>
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
            <label>النوع</label>
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
            <label>الوصف</label>
            <textarea 
              value={editingProject.description}
              onChange={(e) => setEditingProject({...editingProject, description: e.target.value})}
              rows="4"
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <label>المميزات</label>
            {editingProject.features.map((feature, index) => (
              <div key={index} className={styles.featureInput}>
                <input 
                  type="text" 
                  value={feature.text}
                  onChange={(e) => handleFeatureChange(index, e.target.value)}
                />
                <button 
                  type="button" 
                  className={styles.removeButton}
                  onClick={() => handleRemoveFeature(index)}
                >
                  حذف
                </button>
              </div>
            ))}
            <button 
              type="button" 
              className={styles.addButton}
              onClick={handleAddFeature}
            >
              إضافة ميزة
            </button>
          </div>
          <div className={styles.formGroup}>
            <label>السعر</label>
            <input 
              type="text" 
              value={editingProject.price}
              onChange={(e) => setEditingProject({...editingProject, price: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>الحالة</label>
            <select
              value={editingProject.status}
              onChange={(e) => setEditingProject({...editingProject, status: e.target.value})}
            >
              <option value="متاح">متاح</option>
              <option value="محجوز">محجوز</option>
              <option value="مكتمل">مكتمل</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>تاريخ الإنجاز</label>
            <input 
              type="text" 
              value={editingProject.completion}
              onChange={(e) => setEditingProject({...editingProject, completion: e.target.value})}
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
      ) : (
        <div className={styles.addForm}>
          <h2 className={styles.sectionTitle}>إضافة مشروع جديد</h2>
          <div className={styles.formGroup}>
            <label>عنوان المشروع</label>
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
            <label>النوع</label>
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
            <label>الوصف</label>
            <textarea 
              value={newProject.description}
              onChange={(e) => setNewProject({...newProject, description: e.target.value})}
              rows="4"
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <label>المميزات</label>
            {newProject.features.map((feature, index) => (
              <div key={index} className={styles.featureInput}>
                <input 
                  type="text" 
                  value={feature.text}
                  onChange={(e) => handleFeatureChange(index, e.target.value)}
                />
                {newProject.features.length > 1 && (
                  <button 
                    type="button" 
                    className={styles.removeButton}
                    onClick={() => handleRemoveFeature(index)}
                  >
                    حذف
                  </button>
                )}
              </div>
            ))}
            <button 
              type="button" 
              className={styles.addButton}
              onClick={handleAddFeature}
            >
              إضافة ميزة
            </button>
          </div>
          <div className={styles.formGroup}>
            <label>السعر</label>
            <input 
              type="text" 
              value={newProject.price}
              onChange={(e) => setNewProject({...newProject, price: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>الحالة</label>
            <select
              value={newProject.status}
              onChange={(e) => setNewProject({...newProject, status: e.target.value})}
            >
              <option value="متاح">متاح</option>
              <option value="محجوز">محجوز</option>
              <option value="مكتمل">مكتمل</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>تاريخ الإنجاز</label>
            <input 
              type="text" 
              value={newProject.completion}
              onChange={(e) => setNewProject({...newProject, completion: e.target.value})}
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
              className={styles.saveButton}
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