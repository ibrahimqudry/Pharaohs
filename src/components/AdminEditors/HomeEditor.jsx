import { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { collection, setDoc, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import styles from './EditorStyles.module.css';

export default function HomeEditor() {
  const [heroSlides, setHeroSlides] = useState([]);
  const [offers, setOffers] = useState([]);
  const [editingSlide, setEditingSlide] = useState(null);
  const [editingOffer, setEditingOffer] = useState(null);
  const [allProjects, setAllProjects] = useState([]);
  const [selectedVipProjects, setSelectedVipProjects] = useState([]);
  const [newSlide, setNewSlide] = useState({
    title: '',
    description: '',
    image: '',
    link: '/projects'
  });
  const [newOffer, setNewOffer] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
    link: ''
  });
  const [allEvents, setAllEvents] = useState([]);
  const [selectedBestEvents, setSelectedBestEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch hero slides
        const slidesSnapshot = await getDocs(collection(db, 'heroSlides'));
        const slidesData = slidesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setHeroSlides(slidesData);

        // Fetch offers
        const offersSnapshot = await getDocs(collection(db, 'offers'));
        const offersData = offersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setOffers(offersData);
      } catch (error) {
        console.error('Error fetching data:', error);
        alert('فشل في تحميل البيانات');
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'projects'));
        const projects = [];
        querySnapshot.forEach((doc) => {
          projects.push({ id: doc.id, ...doc.data() });
        });
        setAllProjects(projects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'events'));
        const events = [];
        querySnapshot.forEach((doc) => {
          events.push({ id: doc.id, ...doc.data() });
        });
        setAllEvents(events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  const handleEditSlide = (slide) => {
    setEditingSlide(slide);
    setEditingOffer(null);
  };

  const handleUpdateSlide = async () => {
    try {
      const slideRef = doc(db, 'heroSlides', editingSlide.id);
      await updateDoc(slideRef, {
        title: editingSlide.title,
        description: editingSlide.description,
        image: editingSlide.image,
        link: editingSlide.link
      });
      setHeroSlides(heroSlides.map(s => s.id === editingSlide.id ? editingSlide : s));
      setEditingSlide(null);
      alert('تم تحديث السلايد بنجاح');
    } catch (error) {
      console.error('Error updating slide:', error);
      alert('فشل في تحديث السلايد');
    }
  };

  const handleAddSlide = async () => {
    try {
      const slideToAdd = { ...newSlide };
      const docRef = await addDoc(collection(db, 'heroSlides'), slideToAdd);
      setHeroSlides([...heroSlides, { id: docRef.id, ...slideToAdd }]);
      setNewSlide({
        title: '',
        description: '',
        image: '',
        link: '/projects'
      });
      alert('تمت إضافة السلايد بنجاح');
    } catch (error) {
      console.error('Error adding slide:', error);
      alert('فشل في إضافة السلايد');
    }
  };

  const handleDeleteSlide = async (id) => {
    if (confirm('هل أنت متأكد من حذف هذا السلايد؟')) {
      try {
        await deleteDoc(doc(db, 'heroSlides', id));
        setHeroSlides(heroSlides.filter(s => s.id !== id));
        if (editingSlide && editingSlide.id === id) {
          setEditingSlide(null);
        }
        alert('تم حذف السلايد بنجاح');
      } catch (error) {
        console.error('Error deleting slide:', error);
        alert('فشل في حذف السلايد');
      }
    }
  };

  const handleEditOffer = (offer) => {
    setEditingOffer(offer);
    setEditingSlide(null);
  };

  const handleUpdateOffer = async () => {
    try {
      const offerRef = doc(db, 'offers', editingOffer.id);
      await updateDoc(offerRef, {
        title: editingOffer.title,
        description: editingOffer.description,
        price: editingOffer.price,
        image: editingOffer.image,
        link: editingOffer.link
      });
      setOffers(offers.map(o => o.id === editingOffer.id ? editingOffer : o));
      setEditingOffer(null);
      alert('تم تحديث العرض بنجاح');
    } catch (error) {
      console.error('Error updating offer:', error);
      alert('فشل في تحديث العرض');
    }
  };

  const handleAddOffer = async () => {
    try {
      const offerToAdd = { ...newOffer };
      const docRef = await addDoc(collection(db, 'offers'), offerToAdd);
      setOffers([...offers, { id: docRef.id, ...offerToAdd }]);
      setNewOffer({
        title: '',
        description: '',
        price: '',
        image: '',
        link: ''
      });
      alert('تمت إضافة العرض بنجاح');
    } catch (error) {
      console.error('Error adding offer:', error);
      alert('فشل في إضافة العرض');
    }
  };

  const handleDeleteOffer = async (id) => {
    if (confirm('هل أنت متأكد من حذف هذا العرض؟')) {
      try {
        await deleteDoc(doc(db, 'offers', id));
        setOffers(offers.filter(o => o.id !== id));
        if (editingOffer && editingOffer.id === id) {
          setEditingOffer(null);
        }
        alert('تم حذف العرض بنجاح');
      } catch (error) {
        console.error('Error deleting offer:', error);
        alert('فشل في حذف العرض');
      }
    }
  };

  const handleVipProjectSelect = (projectId) => {
    setSelectedVipProjects(prev =>
      prev.includes(projectId)
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  const saveVipProjects = async (projectIds) => {
    try {
      const vipRef = doc(db, 'homepage', 'vipProjects');
      await setDoc(vipRef, { projectIds }, { merge: true });
      alert('تم حفظ المشاريع المميزة بنجاح');
    } catch (error) {
      console.error('Error saving VIP projects:', error);
      alert('حدث خطأ أثناء حفظ المشاريع المميزة');
    }
  };

  const handleBestEventSelect = (eventId) => {
    setSelectedBestEvents(prev =>
      prev.includes(eventId)
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    );
  };

  const saveBestEvents = async (eventIds) => {
    try {
      const bestEventsRef = doc(db, 'homepage', 'bestEvents');
      await setDoc(bestEventsRef, { eventIds }, { merge: true });
      alert('تم حفظ أفضل الفعاليات بنجاح');
    } catch (error) {
      console.error('Error saving Best Events:', error);
      alert('حدث خطأ أثناء حفظ أفضل الفعاليات');
    }
  };

  return (
    <div className={styles.editorWrapper}>
      {/* Hero Slides Section */}
      <div className={styles.editorSection}>
        <h2 className={styles.sectionTitle}>تحرير سلايدر الصفحة الرئيسية</h2>
        <div className={styles.projectsList}>
          <h3 className={styles.subsectionTitle}>قائمة السلايدات</h3>
          <div className={styles.projectsTable}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>العنوان</th>
                  <th>الوصف</th>
                  <th>الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                {heroSlides.map(slide => (
                  <tr key={slide.id}>
                    <td>{slide.title}</td>
                    <td>{slide.description}</td>
                    <td>
                      <button
                        className={styles.editButton}
                        onClick={() => handleEditSlide(slide)}
                      >
                        تعديل
                      </button>
                      <button
                        className={styles.deleteButton}
                        onClick={() => handleDeleteSlide(slide.id)}
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

        {editingSlide ? (
          <div className={styles.editForm}>
            <h3 className={styles.subsectionTitle}>تعديل السلايد</h3>
            <div className={styles.formGroup}>
              <label>العنوان</label>
              <input
                type="text"
                value={editingSlide.title}
                onChange={(e) => setEditingSlide({ ...editingSlide, title: e.target.value })}
                placeholder="أدخل العنوان"
              />
            </div>
            <div className={styles.formGroup}>
              <label>الوصف</label>
              <textarea
                value={editingSlide.description}
                onChange={(e) => setEditingSlide({ ...editingSlide, description: e.target.value })}
                placeholder="أدخل الوصف"
                rows="3"
              />
            </div>
            <div className={styles.formGroup}>
              <label>رابط الصورة</label>
              <input
                type="text"
                value={editingSlide.image}
                onChange={(e) => setEditingSlide({ ...editingSlide, image: e.target.value })}
                placeholder="أدخل رابط الصورة"
              />
            </div>
            <div className={styles.formGroup}>
              <label>الرابط</label>
              <input
                type="text"
                value={editingSlide.link}
                onChange={(e) => setEditingSlide({ ...editingSlide, link: e.target.value })}
                placeholder="أدخل الرابط"
              />
            </div>
            <div className={styles.formActions}>
              <button
                className={styles.saveButton}
                onClick={handleUpdateSlide}
              >
                حفظ التغييرات
              </button>
              <button
                className={styles.cancelButton}
                onClick={() => setEditingSlide(null)}
              >
                إلغاء
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.editForm}>
            <h3 className={styles.subsectionTitle}>إضافة سلايد جديد</h3>
            <div className={styles.formGroup}>
              <label>العنوان</label>
              <input
                type="text"
                value={newSlide.title}
                onChange={(e) => setNewSlide({ ...newSlide, title: e.target.value })}
                placeholder="أدخل العنوان"
              />
            </div>
            <div className={styles.formGroup}>
              <label>الوصف</label>
              <textarea
                value={newSlide.description}
                onChange={(e) => setNewSlide({ ...newSlide, description: e.target.value })}
                placeholder="أدخل الوصف"
                rows="3"
              />
            </div>
            <div className={styles.formGroup}>
              <label>رابط الصورة</label>
              <input
                type="text"
                value={newSlide.image}
                onChange={(e) => setNewSlide({ ...newSlide, image: e.target.value })}
                placeholder="أدخل رابط الصورة"
              />
            </div>
            <div className={styles.formGroup}>
              <label>الرابط</label>
              <input
                type="text"
                value={newSlide.link}
                onChange={(e) => setNewSlide({ ...newSlide, link: e.target.value })}
                placeholder="أدخل الرابط"
              />
            </div>
            <div className={styles.formActions}>
              <button
                className={styles.addButton}
                onClick={handleAddSlide}
              >
                إضافة السلايد
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Exclusive Offers Section */}
      <div className={styles.editorSection}>
        <h2 className={styles.sectionTitle}>تحرير العروض الحصرية</h2>
        <div className={styles.projectsList}>
          <h3 className={styles.subsectionTitle}>قائمة العروض</h3>
          <div className={styles.projectsTable}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>العنوان</th>
                  <th>الوصف</th>
                  <th>السعر</th>
                  <th>الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                {offers.map(offer => (
                  <tr key={offer.id}>
                    <td>{offer.title}</td>
                    <td>{offer.description}</td>
                    <td>{offer.price}</td>
                    <td>
                      <button
                        className={styles.editButton}
                        onClick={() => handleEditOffer(offer)}
                      >
                        تعديل
                      </button>
                      <button
                        className={styles.deleteButton}
                        onClick={() => handleDeleteOffer(offer.id)}
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

        {editingOffer ? (
          <div className={styles.editForm}>
            <h3 className={styles.subsectionTitle}>تعديل العرض</h3>
            <div className={styles.formGroup}>
              <label>العنوان</label>
              <input
                type="text"
                value={editingOffer.title}
                onChange={(e) => setEditingOffer({ ...editingOffer, title: e.target.value })}
                placeholder="أدخل العنوان"
              />
            </div>
            <div className={styles.formGroup}>
              <label>الوصف</label>
              <textarea
                value={editingOffer.description}
                onChange={(e) => setEditingOffer({ ...editingOffer, description: e.target.value })}
                placeholder="أدخل الوصف"
                rows="3"
              />
            </div>
            <div className={styles.formGroup}>
              <label>السعر</label>
              <input
                type="text"
                value={editingOffer.price}
                onChange={(e) => setEditingOffer({ ...editingOffer, price: e.target.value })}
                placeholder="أدخل السعر"
              />
            </div>
            <div className={styles.formGroup}>
              <label>رابط الصورة</label>
              <input
                type="text"
                value={editingOffer.image}
                onChange={(e) => setEditingOffer({ ...editingOffer, image: e.target.value })}
                placeholder="أدخل رابط الصورة"
              />
            </div>
            <div className={styles.formGroup}>
              <label>الرابط</label>
              <input
                type="text"
                value={editingOffer.link}
                onChange={(e) => setEditingOffer({ ...editingOffer, link: e.target.value })}
                placeholder="أدخل الرابط"
              />
            </div>
            <div className={styles.formActions}>
              <button
                className={styles.saveButton}
                onClick={handleUpdateOffer}
              >
                حفظ التغييرات
              </button>
              <button
                className={styles.cancelButton}
                onClick={() => setEditingOffer(null)}
              >
                إلغاء
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.editForm}>
            <h3 className={styles.subsectionTitle}>إضافة عرض جديد</h3>
            <div className={styles.formGroup}>
              <label>العنوان</label>
              <input
                type="text"
                value={newOffer.title}
                onChange={(e) => setNewOffer({ ...newOffer, title: e.target.value })}
                placeholder="أدخل العنوان"
              />
            </div>
            <div className={styles.formGroup}>
              <label>الوصف</label>
              <textarea
                value={newOffer.description}
                onChange={(e) => setNewOffer({ ...newOffer, description: e.target.value })}
                placeholder="أدخل الوصف"
                rows="3"
              />
            </div>
            <div className={styles.formGroup}>
              <label>السعر</label>
              <input
                type="text"
                value={newOffer.price}
                onChange={(e) => setNewOffer({ ...newOffer, price: e.target.value })}
                placeholder="أدخل السعر"
              />
            </div>
            <div className={styles.formGroup}>
              <label>رابط الصورة</label>
              <input
                type="text"
                value={newOffer.image}
                onChange={(e) => setNewOffer({ ...newOffer, image: e.target.value })}
                placeholder="أدخل رابط الصورة"
              />
            </div>
            <div className={styles.formGroup}>
              <label>الرابط</label>
              <input
                type="text"
                value={newOffer.link}
                onChange={(e) => setNewOffer({ ...newOffer, link: e.target.value })}
                placeholder="أدخل الرابط"
              />
            </div>
            <div className={styles.formActions}>
              <button
                className={styles.addButton}
                onClick={handleAddOffer}
              >
                إضافة العرض
              </button>
            </div>
          </div>
        )}
      </div>

      {/* VIP Projects Section */}
      <div className={styles.editorSection}>
        <h2 className={styles.sectionTitle}>اختر المشاريع المميزة</h2>
        <div className={styles.projectsGrid}>
          {allProjects.map(project => (
            <div key={project.id} className={styles.projectCard}>
              <input
                type="checkbox"
                id={`project-${project.id}`}
                checked={selectedVipProjects.includes(project.id)}
                onChange={() => handleVipProjectSelect(project.id)}
              />
              <label htmlFor={`project-${project.id}`}>
                <img src={project.image} alt={project.title} />
                <h4>{project.title}</h4>
              </label>
            </div>
          ))}
        </div>
        <div className={styles.formActions}>
          <button
            className={styles.saveButton}
            onClick={() => saveVipProjects(selectedVipProjects)}
          >
            حفظ المشاريع المميزة
          </button>
        </div>
      </div>

      {/* Best Events Section */}
      <div className={styles.editorSection}>
        <h2 className={styles.sectionTitle}>اختر أفضل الفعاليات</h2>
        <div className={styles.projectsGrid}>
          {allEvents.map(event => (
            <div key={event.id} className={styles.projectCard}>
              <input
                type="checkbox"
                id={`event-${event.id}`}
                checked={selectedBestEvents.includes(event.id)}
                onChange={() => handleBestEventSelect(event.id)}
              />
              <label htmlFor={`event-${event.id}`}>
                <img src={event.image} alt={event.title} />
                <h4>{event.title}</h4>
              </label>
            </div>
          ))}
        </div>
        <div className={styles.formActions}>
          <button
            className={styles.saveButton}
            onClick={() => saveBestEvents(selectedBestEvents)}
          >
            حفظ أفضل الفعاليات
          </button>
        </div>
      </div>
    </div>
  );
}