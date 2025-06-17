import { useState } from 'react';
import styles from './EditorStyles.module.css';

export default function HomeEditor() {
  const [heroSlides, setHeroSlides] = useState([
    {
      id: 1,
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',
      title: 'الفراعنة للتطوير العقاري',
      description: 'نبني مستقبلك في أسوان الجديدة',
      link: '/projects'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      title: 'مشروع النيل',
      description: 'إطلالة مباشرة على النيل',
      link: '/projects'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      title: 'مشروع الفردوس',
      description: 'فلل مستقلة بتصميم عصري',
      link: '/projects'
    }
  ]);

  const [offers, setOffers] = useState([
    {
      id: 1,
      image: '/images/offer1.jpg',
      title: 'فلل فاخرة',
      description: 'خصم 15% على الدفعة المقدمة',
      price: 'يبدأ من 2.5 مليون جنيه',
      link: '/offers/villas'
    },
    {
      id: 2,
      image: '/images/offer2.jpg',
      title: 'شقق سكنية',
      description: 'أقساط تصل إلى 7 سنوات',
      price: 'يبدأ من 1.2 مليون جنيه',
      link: '/offers/apartments'
    },
    {
      id: 3,
      image: '/images/offer3.jpg',
      title: 'قطع أراضي',
      description: 'تقسيط حتى 5 سنوات بدون فوائد',
      price: 'يبدأ من 800 ألف جنيه',
      link: '/offers/lands'
    }
  ]);

  const [editingSlide, setEditingSlide] = useState(null);
  const [editingOffer, setEditingOffer] = useState(null);
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

  const handleEditSlide = (slide) => {
    setEditingSlide({...slide});
  };

  const handleUpdateSlide = () => {
    setHeroSlides(heroSlides.map(s => s.id === editingSlide.id ? editingSlide : s));
    setEditingSlide(null);
    // In a real app, you would save to a database here
    alert('تم تحديث السلايد بنجاح');
  };

  const handleAddSlide = () => {
    const slideToAdd = {
      ...newSlide,
      id: heroSlides.length > 0 ? Math.max(...heroSlides.map(s => s.id)) + 1 : 1
    };
    setHeroSlides([...heroSlides, slideToAdd]);
    setNewSlide({
      title: '',
      description: '',
      image: '',
      link: '/projects'
    });
    // In a real app, you would save to a database here
    alert('تمت إضافة السلايد بنجاح');
  };

  const handleDeleteSlide = (id) => {
    if (confirm('هل أنت متأكد من حذف هذا السلايد؟')) {
      setHeroSlides(heroSlides.filter(s => s.id !== id));
      // In a real app, you would delete from a database here
      alert('تم حذف السلايد بنجاح');
    }
  };

  const handleEditOffer = (offer) => {
    setEditingOffer({...offer});
  };

  const handleUpdateOffer = () => {
    setOffers(offers.map(o => o.id === editingOffer.id ? editingOffer : o));
    setEditingOffer(null);
    // In a real app, you would save to a database here
    alert('تم تحديث العرض بنجاح');
  };

  const handleAddOffer = () => {
    const offerToAdd = {
      ...newOffer,
      id: offers.length > 0 ? Math.max(...offers.map(o => o.id)) + 1 : 1
    };
    setOffers([...offers, offerToAdd]);
    setNewOffer({
      title: '',
      description: '',
      price: '',
      image: '',
      link: ''
    });
    // In a real app, you would save to a database here
    alert('تمت إضافة العرض بنجاح');
  };

  const handleDeleteOffer = (id) => {
    if (confirm('هل أنت متأكد من حذف هذا العرض؟')) {
      setOffers(offers.filter(o => o.id !== id));
      // In a real app, you would delete from a database here
      alert('تم حذف العرض بنجاح');
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
            <table>
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
                onChange={(e) => setEditingSlide({...editingSlide, title: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <label>الوصف</label>
              <input 
                type="text" 
                value={editingSlide.description}
                onChange={(e) => setEditingSlide({...editingSlide, description: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <label>رابط الصورة</label>
              <input 
                type="text" 
                value={editingSlide.image}
                onChange={(e) => setEditingSlide({...editingSlide, image: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <label>الرابط</label>
              <input 
                type="text" 
                value={editingSlide.link}
                onChange={(e) => setEditingSlide({...editingSlide, link: e.target.value})}
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
          <div className={styles.addForm}>
            <h3 className={styles.subsectionTitle}>إضافة سلايد جديد</h3>
            <div className={styles.formGroup}>
              <label>العنوان</label>
              <input 
                type="text" 
                value={newSlide.title}
                onChange={(e) => setNewSlide({...newSlide, title: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <label>الوصف</label>
              <input 
                type="text" 
                value={newSlide.description}
                onChange={(e) => setNewSlide({...newSlide, description: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <label>رابط الصورة</label>
              <input 
                type="text" 
                value={newSlide.image}
                onChange={(e) => setNewSlide({...newSlide, image: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <label>الرابط</label>
              <input 
                type="text" 
                value={newSlide.link}
                onChange={(e) => setNewSlide({...newSlide, link: e.target.value})}
              />
            </div>
            <div className={styles.formActions}>
              <button 
                className={styles.saveButton}
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
            <table>
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
                onChange={(e) => setEditingOffer({...editingOffer, title: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <label>الوصف</label>
              <input 
                type="text" 
                value={editingOffer.description}
                onChange={(e) => setEditingOffer({...editingOffer, description: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <label>السعر</label>
              <input 
                type="text" 
                value={editingOffer.price}
                onChange={(e) => setEditingOffer({...editingOffer, price: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <label>رابط الصورة</label>
              <input 
                type="text" 
                value={editingOffer.image}
                onChange={(e) => setEditingOffer({...editingOffer, image: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <label>الرابط</label>
              <input 
                type="text" 
                value={editingOffer.link}
                onChange={(e) => setEditingOffer({...editingOffer, link: e.target.value})}
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
          <div className={styles.addForm}>
            <h3 className={styles.subsectionTitle}>إضافة عرض جديد</h3>
            <div className={styles.formGroup}>
              <label>العنوان</label>
              <input 
                type="text" 
                value={newOffer.title}
                onChange={(e) => setNewOffer({...newOffer, title: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <label>الوصف</label>
              <input 
                type="text" 
                value={newOffer.description}
                onChange={(e) => setNewOffer({...newOffer, description: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <label>السعر</label>
              <input 
                type="text" 
                value={newOffer.price}
                onChange={(e) => setNewOffer({...newOffer, price: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <label>رابط الصورة</label>
              <input 
                type="text" 
                value={newOffer.image}
                onChange={(e) => setNewOffer({...newOffer, image: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <label>الرابط</label>
              <input 
                type="text" 
                value={newOffer.link}
                onChange={(e) => setNewOffer({...newOffer, link: e.target.value})}
              />
            </div>
            <div className={styles.formActions}>
              <button 
                className={styles.saveButton}
                onClick={handleAddOffer}
              >
                إضافة العرض
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}