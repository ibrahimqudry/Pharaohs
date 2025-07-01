import { useState, useEffect } from 'react';
import styles from './EditorStyles.module.css';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config';


export default function ProjectsEditor() {

  const initialProjectState = {
    title: '',
    location: '',
    types: ['شقق'],
    description: '',
    longDescription: '',
    sliderImages: [''],
    price: '',
    status: 'متاح',
    completion: '',
    image: '',
    isSold: false,
    onSale: false,
    progress: 0,
    youtubeLink: ''
  };

  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const [newProject, setNewProject] = useState(initialProjectState);

  // Fetch projects from Firestore on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsCollection = collection(db, 'projects');
        const projectsSnapshot = await getDocs(projectsCollection);
        const projectsList = projectsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProjects(projectsList);
      } catch (error) {
        console.error('Error fetching projects:', error);
        alert('حدث خطأ أثناء جلب المشاريع');
      }
    };
    fetchProjects();
  }, []);

  const handleEditProject = (project) => {
    setEditingProject({
      ...project,
      sliderImages: project.sliderImages?.length ? project.sliderImages : ['']
    });
  };

  const handleUpdateProject = async () => {
    try {
      const projectRef = doc(db, 'projects', editingProject.id);
      await updateDoc(projectRef, {
        ...editingProject,
        sliderImages: editingProject.sliderImages.filter(img => img !== '')
      });
      setProjects(projects.map(p => p.id === editingProject.id ? editingProject : p));
      setEditingProject(null);
      alert('تم تحديث المشروع بنجاح');
    } catch (error) {
      console.error('Error updating project:', error);
      alert('حدث خطأ أثناء تحديث المشروع');
    }
  };

  const handleAddProject = async () => {
    try {
      const projectToAdd = {
        ...newProject,
        sliderImages: newProject.sliderImages.filter(img => img !== '')
      };
      const docRef = await addDoc(collection(db, 'projects'), projectToAdd);
      setProjects([...projects, { id: docRef.id, ...projectToAdd }]);
      setNewProject(initialProjectState);
      alert('تمت إضافة المشروع بنجاح');
    } catch (error) {
      console.error('Error adding project:', error);
      alert('حدث خطأ أثناء إضافة المشروع');
    }
  };

  const handleDeleteProject = async (id) => {
    if (confirm('هل أنت متأكد من حذف هذا المشروع؟')) {
      try {
        await deleteDoc(doc(db, 'projects', id));
        setProjects(projects.filter(p => p.id !== id));
        alert('تم حذف المشروع بنجاح');
      } catch (error) {
        console.error('Error deleting project:', error);
        alert('حدث خطأ أثناء حذف المشروع');
      }
    }
  };

  const renderForm = (project, setProject, isEditing) => (
    <div className={isEditing ? styles.editForm : styles.addForm}>
      <h2 className={styles.sectionTitle}>{isEditing ? 'تعديل المشروع' : 'إضافة مشروع جديد'}</h2>

      <div className={styles.formGroup}>
        <label>عنوان المشروع</label>
        <input
          type="text"
          value={project.title}
          onChange={(e) => setProject({ ...project, title: e.target.value })}
        />
      </div>

      <div className={styles.formGroup}>
        <label>الموقع</label>
        <input
          type="text"
          value={project.location}
          onChange={(e) => setProject({ ...project, location: e.target.value })}
        />
      </div>

      <div className={styles.formGroup}>
        <label>أنواع المشروع</label>
        <select
          multiple
          value={project.types}
          onChange={(e) => {
            const selectedTypes = Array.from(e.target.options)
              .filter(option => option.selected)
              .map(option => option.value);
            setProject({ ...project, types: selectedTypes });
          }}
        >
          <option value="شقق">شقق</option>
          <option value="فلل">فلل</option>
          <option value="تجاري">تجاري</option>
          <option value="أراضي">أراضي</option>
          <option value="سكني">سكني</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>الوصف</label>
        <textarea
          value={project.description}
          onChange={(e) => setProject({ ...project, description: e.target.value })}
          rows="4"
        />
      </div>

      <div className={styles.formGroup}>
        <label>الوصف الطويل</label>
        <textarea
          value={project.longDescription}
          onChange={(e) => setProject({ ...project, longDescription: e.target.value })}
          rows="8"
        />
      </div>

      <div className={styles.formGroup}>
        <label>صور السلايدر</label>
        {project.sliderImages.map((img, index) => (
          <div key={index} className={styles.imageInput}>
            <input
              type="text"
              value={img}
              onChange={(e) => {
                const updatedImages = [...project.sliderImages];
                updatedImages[index] = e.target.value;
                setProject({ ...project, sliderImages: updatedImages });
              }}
              placeholder="رابط الصورة"
            />
            <button
              type="button"
              className={styles.removeButton}
              onClick={() => {
                const updatedImages = project.sliderImages.filter((_, i) => i !== index);
                setProject({ ...project, sliderImages: updatedImages });
              }}
            >
              حذف
            </button>
          </div>
        ))}
        <button
          type="button"
          className={styles.addButton}
          onClick={() => setProject({ ...project, sliderImages: [...project.sliderImages, ''] })}
        >
          إضافة صورة
        </button>
      </div>

      <div className={styles.formGroup}>
        <label>السعر</label>
        <input
          type="text"
          value={project.price}
          onChange={(e) => setProject({ ...project, price: e.target.value })}
        />
      </div>

      <div className={styles.formGroup}>
        <label>الحالة</label>
        <select
          value={project.status}
          onChange={(e) => setProject({ ...project, status: e.target.value })}
        >
          <option value="متاح">متاح</option>
          <option value="محجوز">محجوز</option>
          <option value="مكتمل">مكتمل</option>
          <option value="تم البيع">تم البيع</option>
          <option value="خصم 15%">خصم 15%</option>
          <option value="خصم 20%">خصم 20%</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>تاريخ الإنجاز</label>
        <input
          type="text"
          value={project.completion}
          onChange={(e) => setProject({ ...project, completion: e.target.value })}
        />
      </div>

      <div className={styles.formGroup}>
        <label>رابط الصورة</label>
        <input
          type="text"
          value={project.image}
          onChange={(e) => setProject({ ...project, image: e.target.value })}
        />
      </div>

      <div className={styles.formGroup}>
        <label>رابط قائمة تشغيل يوتيوب</label>
        <input
          type="text"
          value={project.youtubeLink || ''}
          onChange={(e) => setProject({ ...project, youtubeLink: e.target.value })}
        />
      </div>

      <div className={styles.formGroup}>
        <label>تم البيع</label>
        <input
          type="checkbox"
          checked={project.isSold}
          onChange={(e) => setProject({ ...project, isSold: e.target.checked })}
        />
      </div>

      <div className={styles.formGroup}>
        <label>عرض خاص</label>
        <input
          type="checkbox"
          checked={project.onSale}
          onChange={(e) => setProject({ ...project, onSale: e.target.checked })}
        />
      </div>

      <div className={styles.formGroup}>
        <label>نسبة الإنجاز (%)</label>
        <input
          type="number"
          min="0"
          max="100"
          value={project.progress}
          onChange={(e) => setProject({ ...project, progress: parseInt(e.target.value) || 0 })}
        />
      </div>

      <div className={styles.formActions}>
        <button
          className={styles.saveButton}
          onClick={isEditing ? handleUpdateProject : handleAddProject}
        >
          {isEditing ? 'حفظ التغييرات' : 'إضافة المشروع'}
        </button>
        {isEditing && (
          <button
            className={styles.cancelButton}
            onClick={() => setEditingProject(null)}
          >
            إلغاء
          </button>
        )}
      </div>
    </div>
  );

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
                  <td>{project.types.join(', ')}</td>
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

      {editingProject ? renderForm(editingProject, setEditingProject, true) : renderForm(newProject, setNewProject, false)}
    </div>
  );
}
