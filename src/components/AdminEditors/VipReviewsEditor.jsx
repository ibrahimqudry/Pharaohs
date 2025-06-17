import { useState } from 'react';
import styles from './EditorStyles.module.css';

export default function VipReviewsEditor() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "أحمد محمود",
      title: "مستثمر عقاري",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      projectType: "سكني",
      projectName: "مشروع النيل",
      date: "15 يناير 2023",
      review: "تجربتي مع شركة الفراعنة كانت استثنائية من البداية للنهاية. الشفافية في التعامل والالتزام بالمواعيد والجودة العالية في التنفيذ جعلتني أثق بهم بشكل كامل.",
      highlights: [
        "جودة التشطيبات ممتازة",
        "الالتزام بمواعيد التسليم",
        "خدمة عملاء متميزة"
      ]
    },
    {
      id: 2,
      name: "سارة أحمد",
      title: "مالكة شقة",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      projectType: "سكني",
      projectName: "مشروع الواحة",
      date: "3 مارس 2023",
      review: "أنا سعيدة جداً باختياري للسكن في مشروع الواحة. التصميم العصري والمساحات الخضراء والخدمات المتكاملة توفر بيئة معيشية مثالية لي ولعائلتي.",
      highlights: [
        "تصميم عصري وأنيق",
        "مساحات خضراء واسعة",
        "أمن وحراسة على مدار الساعة"
      ]
    },
    {
      id: 3,
      name: "محمد علي",
      title: "رجل أعمال",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 4,
      projectType: "تجاري",
      projectName: "مشروع الأهرامات التجاري",
      date: "20 أبريل 2023",
      review: "استثماري في المشروع التجاري كان قراراً موفقاً. العائد الاستثماري ممتاز والموقع الاستراتيجي يضمن استمرارية نجاح المشروع على المدى الطويل.",
      highlights: [
        "موقع استراتيجي ممتاز",
        "عائد استثماري مجزي",
        "إدارة محترفة للمشروع"
      ]
    }
  ]);

  const [editingReview, setEditingReview] = useState(null);
  const [newReview, setNewReview] = useState({
    name: "",
    title: "",
    image: "",
    rating: 5,
    projectType: "سكني",
    projectName: "",
    date: "",
    review: "",
    highlights: [""]
  });

  const handleEditReview = (review) => {
    setEditingReview({...review});
  };

  const handleUpdateReview = () => {
    setReviews(reviews.map(review => 
      review.id === editingReview.id ? editingReview : review
    ));
    setEditingReview(null);
  };

  const handleAddReview = () => {
    const newReviewWithId = {
      ...newReview,
      id: reviews.length > 0 ? Math.max(...reviews.map(review => review.id)) + 1 : 1
    };
    setReviews([...reviews, newReviewWithId]);
    setNewReview({
      name: "",
      title: "",
      image: "",
      rating: 5,
      projectType: "سكني",
      projectName: "",
      date: "",
      review: "",
      highlights: [""]
    });
  };

  const handleDeleteReview = (id) => {
    setReviews(reviews.filter(review => review.id !== id));
  };

  const handleAddHighlight = (isNew) => {
    if (isNew) {
      setNewReview({
        ...newReview,
        highlights: [...newReview.highlights, ""]
      });
    } else {
      setEditingReview({
        ...editingReview,
        highlights: [...editingReview.highlights, ""]
      });
    }
  };

  const handleRemoveHighlight = (index, isNew) => {
    if (isNew) {
      const updatedHighlights = [...newReview.highlights];
      updatedHighlights.splice(index, 1);
      setNewReview({
        ...newReview,
        highlights: updatedHighlights
      });
    } else {
      const updatedHighlights = [...editingReview.highlights];
      updatedHighlights.splice(index, 1);
      setEditingReview({
        ...editingReview,
        highlights: updatedHighlights
      });
    }
  };

  const handleHighlightChange = (index, value, isNew) => {
    if (isNew) {
      const updatedHighlights = [...newReview.highlights];
      updatedHighlights[index] = value;
      setNewReview({
        ...newReview,
        highlights: updatedHighlights
      });
    } else {
      const updatedHighlights = [...editingReview.highlights];
      updatedHighlights[index] = value;
      setEditingReview({
        ...editingReview,
        highlights: updatedHighlights
      });
    }
  };

  return (
    <div className={styles.editorWrapper}>
      <h2 className={styles.sectionTitle}>إدارة آراء العملاء المميزين</h2>
      
      {/* List of existing reviews */}
      <div className={styles.tableContainer}>
        <h3>قائمة آراء العملاء الحالية</h3>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>الاسم</th>
              <th>المسمى الوظيفي</th>
              <th>نوع المشروع</th>
              <th>اسم المشروع</th>
              <th>التقييم</th>
              <th>التاريخ</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map(review => (
              <tr key={review.id}>
                <td>{review.name}</td>
                <td>{review.title}</td>
                <td>{review.projectType}</td>
                <td>{review.projectName}</td>
                <td>{review.rating} نجوم</td>
                <td>{review.date}</td>
                <td>
                  <button 
                    className={styles.editButton}
                    onClick={() => handleEditReview(review)}
                  >
                    تعديل
                  </button>
                  <button 
                    className={styles.deleteButton}
                    onClick={() => handleDeleteReview(review.id)}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit review form */}
      {editingReview && (
        <div className={styles.editForm}>
          <h3>تعديل رأي العميل</h3>
          <div className={styles.formGroup}>
            <label>اسم العميل</label>
            <input 
              type="text" 
              value={editingReview.name}
              onChange={(e) => setEditingReview({...editingReview, name: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>المسمى الوظيفي</label>
            <input 
              type="text" 
              value={editingReview.title}
              onChange={(e) => setEditingReview({...editingReview, title: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>رابط الصورة</label>
            <input 
              type="text" 
              value={editingReview.image}
              onChange={(e) => setEditingReview({...editingReview, image: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>التقييم (1-5)</label>
            <select
              value={editingReview.rating}
              onChange={(e) => setEditingReview({...editingReview, rating: parseInt(e.target.value)})}
            >
              <option value="1">1 نجمة</option>
              <option value="2">2 نجمة</option>
              <option value="3">3 نجوم</option>
              <option value="4">4 نجوم</option>
              <option value="5">5 نجوم</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>نوع المشروع</label>
            <select
              value={editingReview.projectType}
              onChange={(e) => setEditingReview({...editingReview, projectType: e.target.value})}
            >
              <option value="سكني">سكني</option>
              <option value="تجاري">تجاري</option>
              <option value="فلل">فلل</option>
              <option value="أراضي">أراضي</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>اسم المشروع</label>
            <input 
              type="text" 
              value={editingReview.projectName}
              onChange={(e) => setEditingReview({...editingReview, projectName: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>التاريخ</label>
            <input 
              type="text" 
              value={editingReview.date}
              onChange={(e) => setEditingReview({...editingReview, date: e.target.value})}
              placeholder="مثال: 15 يناير 2023"
            />
          </div>
          <div className={styles.formGroup}>
            <label>نص التقييم</label>
            <textarea 
              value={editingReview.review}
              onChange={(e) => setEditingReview({...editingReview, review: e.target.value})}
              rows="4"
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <label>أبرز المميزات</label>
            {editingReview.highlights.map((highlight, index) => (
              <div key={index} className={styles.featureInput}>
                <input 
                  type="text" 
                  value={highlight}
                  onChange={(e) => handleHighlightChange(index, e.target.value, false)}
                />
                <button 
                  type="button" 
                  className={styles.removeButton}
                  onClick={() => handleRemoveHighlight(index, false)}
                >
                  حذف
                </button>
              </div>
            ))}
            <button 
              type="button" 
              className={styles.addButton}
              onClick={() => handleAddHighlight(false)}
            >
              إضافة ميزة
            </button>
          </div>
          <div className={styles.formActions}>
            <button 
              className={styles.saveButton}
              onClick={handleUpdateReview}
            >
              حفظ التغييرات
            </button>
            <button 
              className={styles.cancelButton}
              onClick={() => setEditingReview(null)}
            >
              إلغاء
            </button>
          </div>
        </div>
      )}

      {/* Add new review form */}
      <div className={styles.editForm}>
        <h3>إضافة رأي عميل جديد</h3>
        <div className={styles.formGroup}>
          <label>اسم العميل</label>
          <input 
            type="text" 
            value={newReview.name}
            onChange={(e) => setNewReview({...newReview, name: e.target.value})}
          />
        </div>
        <div className={styles.formGroup}>
          <label>المسمى الوظيفي</label>
          <input 
            type="text" 
            value={newReview.title}
            onChange={(e) => setNewReview({...newReview, title: e.target.value})}
          />
        </div>
        <div className={styles.formGroup}>
          <label>رابط الصورة</label>
          <input 
            type="text" 
            value={newReview.image}
            onChange={(e) => setNewReview({...newReview, image: e.target.value})}
          />
        </div>
        <div className={styles.formGroup}>
          <label>التقييم (1-5)</label>
          <select
            value={newReview.rating}
            onChange={(e) => setNewReview({...newReview, rating: parseInt(e.target.value)})}
          >
            <option value="1">1 نجمة</option>
            <option value="2">2 نجمة</option>
            <option value="3">3 نجوم</option>
            <option value="4">4 نجوم</option>
            <option value="5">5 نجوم</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>نوع المشروع</label>
          <select
            value={newReview.projectType}
            onChange={(e) => setNewReview({...newReview, projectType: e.target.value})}
          >
            <option value="سكني">سكني</option>
            <option value="تجاري">تجاري</option>
            <option value="فلل">فلل</option>
            <option value="أراضي">أراضي</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>اسم المشروع</label>
          <input 
            type="text" 
            value={newReview.projectName}
            onChange={(e) => setNewReview({...newReview, projectName: e.target.value})}
          />
        </div>
        <div className={styles.formGroup}>
          <label>التاريخ</label>
          <input 
            type="text" 
            value={newReview.date}
            onChange={(e) => setNewReview({...newReview, date: e.target.value})}
            placeholder="مثال: 15 يناير 2023"
          />
        </div>
        <div className={styles.formGroup}>
          <label>نص التقييم</label>
          <textarea 
            value={newReview.review}
            onChange={(e) => setNewReview({...newReview, review: e.target.value})}
            rows="4"
          ></textarea>
        </div>
        <div className={styles.formGroup}>
          <label>أبرز المميزات</label>
          {newReview.highlights.map((highlight, index) => (
            <div key={index} className={styles.featureInput}>
              <input 
                type="text" 
                value={highlight}
                onChange={(e) => handleHighlightChange(index, e.target.value, true)}
              />
              <button 
                type="button" 
                className={styles.removeButton}
                onClick={() => handleRemoveHighlight(index, true)}
              >
                حذف
              </button>
            </div>
          ))}
          <button 
            type="button" 
            className={styles.addButton}
            onClick={() => handleAddHighlight(true)}
          >
            إضافة ميزة
          </button>
        </div>
        <div className={styles.formActions}>
          <button 
            className={styles.addButton}
            onClick={handleAddReview}
          >
            إضافة التقييم
          </button>
        </div>
      </div>
    </div>
  );
}