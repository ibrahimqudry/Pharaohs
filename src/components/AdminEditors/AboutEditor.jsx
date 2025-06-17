import { useState } from 'react';
import styles from './EditorStyles.module.css';

export default function AboutEditor() {
  const [aboutData, setAboutData] = useState({
    description: "شركة الفراعنة للتطوير العقاري هي شركة رائدة في مجال التطوير العقاري في مصر، نسعى لتقديم مشاريع سكنية وتجارية متميزة تجمع بين الأصالة والحداثة.",
    goals: [
      {
        id: 1,
        title: "التميز في التطوير العقاري",
        description: "نسعى لتقديم مشاريع عقارية متميزة تلبي احتياجات عملائنا وتتجاوز توقعاتهم من حيث الجودة والتصميم والخدمات."
      },
      {
        id: 2,
        title: "بناء مجتمعات متكاملة",
        description: "نهدف إلى إنشاء مجتمعات سكنية متكاملة توفر لساكنيها جميع الخدمات والمرافق التي يحتاجونها لحياة مريحة ومتوازنة."
      },
      {
        id: 3,
        title: "بناء علاقات طويلة الأمد",
        description: "نسعى لبناء علاقات قوية ودائمة مع عملائنا وشركائنا تقوم على الثقة والشفافية والالتزام بتقديم أفضل الخدمات."
      }
    ],
    vision: {
      text: "نطمح أن نكون الشركة الرائدة في مجال التطوير العقاري في مصر والشرق الأوسط، من خلال تقديم مشاريع مبتكرة ومستدامة تجمع بين الأصالة والحداثة، وتساهم في تحسين جودة الحياة وتعزيز النمو الاقتصادي.",
      points: [
        "الريادة في تقديم حلول سكنية مبتكرة ومستدامة",
        "تطوير مشاريع تعكس الهوية المصرية الأصيلة بلمسة عصرية",
        "المساهمة في تنمية المجتمع وتحسين جودة الحياة",
        "تعزيز مكانة مصر كوجهة استثمارية جاذبة في مجال العقارات"
      ]
    },
    values: [
      {
        id: 1,
        title: "الجودة",
        description: "نلتزم بأعلى معايير الجودة في جميع مشاريعنا، من التصميم إلى التنفيذ والتسليم، لضمان رضا عملائنا."
      },
      {
        id: 2,
        title: "الابتكار",
        description: "نسعى دائماً لتقديم حلول مبتكرة وتصاميم عصرية تلبي احتياجات العملاء وتواكب أحدث التوجهات العالمية."
      },
      {
        id: 3,
        title: "المصداقية",
        description: "نؤمن بأهمية المصداقية والشفافية في التعامل مع عملائنا وشركائنا، ونلتزم بالوفاء بوعودنا وتعهداتنا."
      },
      {
        id: 4,
        title: "الاستدامة",
        description: "نحرص على تطوير مشاريع مستدامة تراعي البعد البيئي والاجتماعي والاقتصادي، وتساهم في بناء مستقبل أفضل للأجيال القادمة."
      }
    ]
  });

  const [editingSection, setEditingSection] = useState(null);

  const handleSaveChanges = () => {
    // In a real app, you would save to a database here
    alert('تم حفظ التغييرات بنجاح');
    setEditingSection(null);
  };

  return (
    <div className={styles.editorWrapper}>
      <div className={styles.editForm}>
        <h2 className={styles.sectionTitle}>تحرير صفحة من نحن</h2>
        
        <div className={styles.formGroup}>
          <label>وصف الشركة</label>
          <textarea 
            value={aboutData.description}
            onChange={(e) => setAboutData({...aboutData, description: e.target.value})}
            rows="4"
          ></textarea>
        </div>
        
        <h3>أهدافنا</h3>
        {aboutData.goals.map((goal, index) => (
          <div key={goal.id} className={styles.formGroup}>
            <label>الهدف {index + 1}</label>
            <input 
              type="text" 
              value={goal.title}
              onChange={(e) => {
                const updatedGoals = [...aboutData.goals];
                updatedGoals[index].title = e.target.value;
                setAboutData({...aboutData, goals: updatedGoals});
              }}
              placeholder="عنوان الهدف"
            />
            <textarea 
              value={goal.description}
              onChange={(e) => {
                const updatedGoals = [...aboutData.goals];
                updatedGoals[index].description = e.target.value;
                setAboutData({...aboutData, goals: updatedGoals});
              }}
              rows="3"
              placeholder="وصف الهدف"
              className="mt-2"
            ></textarea>
          </div>
        ))}
        
        <h3>رؤيتنا</h3>
        <div className={styles.formGroup}>
          <label>نص الرؤية</label>
          <textarea 
            value={aboutData.vision.text}
            onChange={(e) => setAboutData({
              ...aboutData, 
              vision: {...aboutData.vision, text: e.target.value}
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
                    vision: {...aboutData.vision, points: updatedPoints}
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
                    vision: {...aboutData.vision, points: updatedPoints}
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
          <div key={value.id} className={styles.formGroup}>
            <label>القيمة {index + 1}</label>
            <input 
              type="text" 
              value={value.title}
              onChange={(e) => {
                const updatedValues = [...aboutData.values];
                updatedValues[index].title = e.target.value;
                setAboutData({...aboutData, values: updatedValues});
              }}
              placeholder="عنوان القيمة"
            />
            <textarea 
              value={value.description}
              onChange={(e) => {
                const updatedValues = [...aboutData.values];
                updatedValues[index].description = e.target.value;
                setAboutData({...aboutData, values: updatedValues});
              }}
              rows="3"
              placeholder="وصف القيمة"
              className="mt-2"
            ></textarea>
          </div>
        ))}
        
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