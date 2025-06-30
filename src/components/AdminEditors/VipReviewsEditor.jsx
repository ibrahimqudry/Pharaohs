import { useEffect, useState } from 'react';
import styles from './EditorStyles.module.css';
import { db } from '../../firebase/config';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export default function VipReviewsEditor() {
  const [vipReviews, setVipReviews] = useState([]);
  const [editingReview, setEditingReview] = useState(null);
  const [newReview, setNewReview] = useState({
    reviewer: '',
    img: '',
    videoLink: '',
    rating: 5,
    content: '',
    date: '',
    highlights: []
  });

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsSnap = await getDocs(collection(db, 'vipReviews'));
      setVipReviews(
        reviewsSnap.docs.map(doc => {
          const data = doc.data();
          return {
            ...data,
            id: doc.id,
            highlights: Array.isArray(data.highlights) ? data.highlights : []
          };
        })
      );
    };
    fetchReviews();
  }, []);

  const handleAddReview = async () => {
    await addDoc(collection(db, 'vipReviews'), newReview);
    const reviewsSnap = await getDocs(collection(db, 'vipReviews'));
    setVipReviews(reviewsSnap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    setNewReview({ reviewer: '', img: '', videoLink: '', rating: 5, content: '', date: '', highlights: [] });
    alert('تمت الإضافة بنجاح');
  };

  const handleEditReview = (review) => {
    setEditingReview({
      ...review,
      highlights: Array.isArray(review.highlights) ? review.highlights : [],
      img: review.img || '',
      videoLink: review.videoLink || ''
    });
  };

  const handleUpdateReview = async () => {
    const reviewDoc = doc(db, 'vipReviews', editingReview.id);
    await updateDoc(reviewDoc, editingReview);
    const reviewsSnap = await getDocs(collection(db, 'vipReviews'));
    setVipReviews(reviewsSnap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    setEditingReview(null);
    alert('تم التعديل بنجاح');
  };

  const handleDeleteReview = async (id) => {
    await deleteDoc(doc(db, 'vipReviews', id));
    const reviewsSnap = await getDocs(collection(db, 'vipReviews'));
    setVipReviews(reviewsSnap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    if (editingReview && editingReview.id === id) setEditingReview(null);
    alert('تم الحذف بنجاح');
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
              <th>التقييم</th>
              <th>التاريخ</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {vipReviews.map(review => (
              <tr key={review.id}>
                <td>{review.reviewer}</td>
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
              value={editingReview.reviewer}
              onChange={(e) => setEditingReview({ ...editingReview, reviewer: e.target.value })}
            />
          </div>
          <div className={styles.formGroup}>
            <label>رابط صورة العميل</label>
            <input
              type="text"
              value={editingReview.img}
              onChange={(e) => setEditingReview({ ...editingReview, img: e.target.value })}
              placeholder="رابط الصورة"
            />
          </div>
          <div className={styles.formGroup}>
            <label>رابط فيديو (اختياري)</label>
            <input
              type="text"
              value={editingReview.videoLink}
              onChange={(e) => setEditingReview({ ...editingReview, videoLink: e.target.value })}
              placeholder="رابط فيديو يوتيوب أو غيره (اختياري)"
            />
          </div>
          <div className={styles.formGroup}>
            <label>التقييم (1-5)</label>
            <select
              value={editingReview.rating}
              onChange={(e) => setEditingReview({ ...editingReview, rating: parseInt(e.target.value) })}
            >
              <option value="1">1 نجمة</option>
              <option value="2">2 نجمة</option>
              <option value="3">3 نجوم</option>
              <option value="4">4 نجوم</option>
              <option value="5">5 نجوم</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>التاريخ</label>
            <input
              type="text"
              value={editingReview.date}
              onChange={(e) => setEditingReview({ ...editingReview, date: e.target.value })}
              placeholder="مثال: 15 يناير 2023"
            />
          </div>
          <div className={styles.formGroup}>
            <label>نص التقييم</label>
            <textarea
              value={editingReview.content}
              onChange={(e) => setEditingReview({ ...editingReview, content: e.target.value })}
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

      {/* Add new review form (show only if not editing) */}
      {!editingReview && (
        <div className={styles.editForm}>
          <h3>إضافة رأي عميل جديد</h3>
          <div className={styles.formGroup}>
            <label>اسم العميل</label>
            <input
              type="text"
              value={newReview.reviewer}
              onChange={(e) => setNewReview({ ...newReview, reviewer: e.target.value })}
            />
          </div>
          <div className={styles.formGroup}>
            <label>رابط صورة العميل</label>
            <input
              type="text"
              value={newReview.img}
              onChange={(e) => setNewReview({ ...newReview, img: e.target.value })}
              placeholder="رابط الصورة"
            />
          </div>
          <div className={styles.formGroup}>
            <label>رابط فيديو (اختياري)</label>
            <input
              type="text"
              value={newReview.videoLink}
              onChange={(e) => setNewReview({ ...newReview, videoLink: e.target.value })}
              placeholder="رابط فيديو يوتيوب أو غيره (اختياري)"
            />
          </div>
          <div className={styles.formGroup}>
            <label>التقييم (1-5)</label>
            <select
              value={newReview.rating}
              onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
            >
              <option value="1">1 نجمة</option>
              <option value="2">2 نجمة</option>
              <option value="3">3 نجوم</option>
              <option value="4">4 نجوم</option>
              <option value="5">5 نجوم</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>التاريخ</label>
            <input
              type="text"
              value={newReview.date}
              onChange={(e) => setNewReview({ ...newReview, date: e.target.value })}
              placeholder="مثال: 15 يناير 2023"
            />
          </div>
          <div className={styles.formGroup}>
            <label>نص التقييم</label>
            <textarea
              value={newReview.content}
              onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
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
      )}
    </div>
  );
}