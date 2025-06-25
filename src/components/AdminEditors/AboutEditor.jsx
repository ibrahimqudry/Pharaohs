import { useState, useEffect } from 'react';
import styles from './EditorStyles.module.css';
import { db } from '../../firebase/config';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export default function AboutEditor() {
  const [aboutData, setAboutData] = useState(null);
  const [editingSection, setEditingSection] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const aboutDoc = await getDoc(doc(db, 'about', 'page'));
        if (aboutDoc.exists()) {
          setAboutData(aboutDoc.data());
        } else {
          setAboutData({
            description: '',
            goals: [],
            vision: { text: '', points: [], imgSrc: '' },
            values: [],
            owners: []
          });
        }
      } catch (error) {
        alert('حدث خطأ أثناء جلب البيانات');
        setAboutData({
          description: '',
          goals: [],
          vision: { text: '', points: [], imgSrc: '' },
          values: [],
          owners: []
        });
      } finally {
        setLoading(false);
      }
    };
    fetchAboutData();
  }, []);

  const handleSaveChanges = async () => {
    try {
      await setDoc(doc(db, 'about', 'page'), aboutData, { merge: true });
      alert('تم حفظ التغييرات بنجاح');
      setEditingSection(null);
    } catch (error) {
      alert('حدث خطأ أثناء حفظ البيانات');
    }
  };

  if (loading || !aboutData) {
    return <div>جاري التحميل...</div>;
  }

  return (
    <div className={styles.editorWrapper}>
      <div className={styles.editForm}>
        <h2 className={styles.sectionTitle}>تحرير صفحة من نحن</h2>
        <div className={styles.formGroup}>
          <label>وصف الشركة</label>
          <textarea
            value={aboutData.description}
            onChange={(e) => setAboutData({ ...aboutData, description: e.target.value })}
            rows="4"
          ></textarea>
        </div>
        <h3>أهدافنا</h3>
        {aboutData.goals.map((goal, index) => (
          <div key={goal.id || index} className={styles.formGroup}>
            <label>الهدف {index + 1}</label>
            <input
              type="text"
              value={goal.title}
              onChange={(e) => {
                const updatedGoals = [...aboutData.goals];
                updatedGoals[index].title = e.target.value;
                setAboutData({ ...aboutData, goals: updatedGoals });
              }}
              placeholder="عنوان الهدف"
            />
            <textarea
              value={goal.description}
              onChange={(e) => {
                const updatedGoals = [...aboutData.goals];
                updatedGoals[index].description = e.target.value;
                setAboutData({ ...aboutData, goals: updatedGoals });
              }}
              rows="3"
              placeholder="وصف الهدف"
              className="mt-2"
            ></textarea>
            <button
              type="button"
              className={styles.removeButton}
              onClick={() => {
                const updatedGoals = aboutData.goals.filter((_, i) => i !== index);
                setAboutData({ ...aboutData, goals: updatedGoals });
              }}
            >
              حذف
            </button>
          </div>
        ))}
        <button
          type="button"
          className={styles.addButton}
          onClick={() => setAboutData({
            ...aboutData,
            goals: [...aboutData.goals, { title: '', description: '' }]
          })}
        >
          إضافة هدف
        </button>
        <h3>رؤيتنا</h3>
        <div className={styles.formGroup}>
          <label>رابط صورة الرؤية</label>
          <input
            type="text"
            value={aboutData.vision.imgSrc || ''}
            onChange={e => setAboutData({
              ...aboutData,
              vision: { ...aboutData.vision, imgSrc: e.target.value }
            })}
            placeholder="رابط الصورة (اختياري)"
          />
        </div>
        <div className={styles.formGroup}>
          <label>نص الرؤية</label>
          <textarea
            value={aboutData.vision.text}
            onChange={(e) => setAboutData({
              ...aboutData,
              vision: { ...aboutData.vision, text: e.target.value }
            })}
            rows="4"
          ></textarea>
        </div>
        <div className={styles.formGroup}>
          <label>نقاط الرؤية</label>
          {aboutData.vision.points.map((point, index) => (
            <div key={index} className={styles.featureInput}>
              <input
                type="text"
                value={point}
                onChange={(e) => {
                  const updatedPoints = [...aboutData.vision.points];
                  updatedPoints[index] = e.target.value;
                  setAboutData({
                    ...aboutData,
                    vision: { ...aboutData.vision, points: updatedPoints }
                  });
                }}
              />
              <button
                type="button"
                className={styles.removeButton}
                onClick={() => {
                  const updatedPoints = [...aboutData.vision.points];
                  updatedPoints.splice(index, 1);
                  setAboutData({
                    ...aboutData,
                    vision: { ...aboutData.vision, points: updatedPoints }
                  });
                }}
              >
                حذف
              </button>
            </div>
          ))}
          <button
            type="button"
            className={styles.addButton}
            onClick={() => {
              setAboutData({
                ...aboutData,
                vision: {
                  ...aboutData.vision,
                  points: [...aboutData.vision.points, ""]
                }
              });
            }}
          >
            إضافة نقطة
          </button>
        </div>
        <h3>قيمنا</h3>
        {aboutData.values.map((value, index) => (
          <div key={value.id || index} className={styles.formGroup}>
            <label>القيمة {index + 1}</label>
            <input
              type="text"
              value={value.title}
              onChange={(e) => {
                const updatedValues = [...aboutData.values];
                updatedValues[index].title = e.target.value;
                setAboutData({ ...aboutData, values: updatedValues });
              }}
              placeholder="عنوان القيمة"
            />
            <textarea
              value={value.description}
              onChange={(e) => {
                const updatedValues = [...aboutData.values];
                updatedValues[index].description = e.target.value;
                setAboutData({ ...aboutData, values: updatedValues });
              }}
              rows="3"
              placeholder="وصف القيمة"
              className="mt-2"
            ></textarea>
            <button
              type="button"
              className={styles.removeButton}
              onClick={() => {
                const updatedValues = aboutData.values.filter((_, i) => i !== index);
                setAboutData({ ...aboutData, values: updatedValues });
              }}
            >
              حذف
            </button>
          </div>
        ))}
        <button
          type="button"
          className={styles.addButton}
          onClick={() => setAboutData({
            ...aboutData,
            values: [...aboutData.values, { title: '', description: '' }]
          })}
        >
          إضافة قيمة
        </button>
        <h3>ملاك الشركة</h3>
        <div className={styles.formGroup}>
          {aboutData.owners && aboutData.owners.map((owner, idx) => (
            <div key={idx} className={styles.ownerInput} style={{ marginBottom: '1.5rem', border: '1px solid #eee', borderRadius: 8, padding: 12 }}>
              <input
                type="text"
                placeholder="الاسم"
                value={owner.name}
                onChange={e => {
                  const updated = [...aboutData.owners];
                  updated[idx].name = e.target.value;
                  setAboutData({ ...aboutData, owners: updated });
                }}
                style={{ marginBottom: 8 }}
              />
              <input
                type="text"
                placeholder="الدور/الوظيفة"
                value={owner.role}
                onChange={e => {
                  const updated = [...aboutData.owners];
                  updated[idx].role = e.target.value;
                  setAboutData({ ...aboutData, owners: updated });
                }}
                style={{ marginBottom: 8 }}
              />
              <input
                type="text"
                placeholder="رابط الصورة"
                value={owner.image}
                onChange={e => {
                  const updated = [...aboutData.owners];
                  updated[idx].image = e.target.value;
                  setAboutData({ ...aboutData, owners: updated });
                }}
                style={{ marginBottom: 8 }}
              />
              <input
                type="text"
                placeholder="وصف مختصر"
                value={owner.description}
                onChange={e => {
                  const updated = [...aboutData.owners];
                  updated[idx].description = e.target.value;
                  setAboutData({ ...aboutData, owners: updated });
                }}
                style={{ marginBottom: 8 }}
              />
              <button
                type="button"
                className={styles.removeButton}
                onClick={() => {
                  const updated = aboutData.owners.filter((_, i) => i !== idx);
                  setAboutData({ ...aboutData, owners: updated });
                }}
              >
                حذف
              </button>
            </div>
          ))}
          <button
            type="button"
            className={styles.addButton}
            onClick={() => setAboutData({ ...aboutData, owners: [...(aboutData.owners || []), { name: '', role: '', image: '', description: '' }] })}
          >
            إضافة مالك
          </button>
        </div>
        <div className={styles.formActions}>
          <button
            className={styles.saveButton}
            onClick={handleSaveChanges}
          >
            حفظ التغييرات
          </button>
        </div>
      </div>
    </div>
  );
}