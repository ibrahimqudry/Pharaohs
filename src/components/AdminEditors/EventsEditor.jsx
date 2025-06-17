import { useState } from 'react';
import styles from './EditorStyles.module.css';

export default function EventsEditor() {
  const [events, setEvents] = useState([
    {
      id: 1,
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
      title: "معرض العقارات السنوي",
      date: "15 أكتوبر 2023",
      location: "فندق كتراكت - أسوان",
      type: "معرض",
      description: "معرض لأحدث المشاريع العقارية في أسوان الجديدة مع عروض حصرية للزوار. فرصة مميزة للتعرف على أفضل الفرص الاستثمارية المتاحة والحصول على خصومات خاصة.",
      highlights: [
        "عروض حصرية على الوحدات السكنية",
        "لقاءات مباشرة مع مطوري المشاريع",
        "استشارات عقارية مجانية",
        "جوائز وهدايا للزوار"
      ],
      time: "10:00 صباحاً - 10:00 مساءً",
      registration: "مجاني"
    },
    // More events would be here
  ]);

  const [editingEvent, setEditingEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
    type: "معرض",
    description: "",
    highlights: [""],
    time: "",
    registration: "",
    image: ""
  });

  const handleEditEvent = (event) => {
    setEditingEvent({...event});
  };

  const handleUpdateEvent = () => {
    setEvents(events.map(e => e.id === editingEvent.id ? editingEvent : e));
    setEditingEvent(null);
    // In a real app, you would save to a database here
    alert('تم تحديث الفعالية بنجاح');
  };

  const handleAddHighlight = () => {
    if (editingEvent) {
      setEditingEvent({
        ...editingEvent,
        highlights: [...editingEvent.highlights, ""]
      });
    } else {
      setNewEvent({
        ...newEvent,
        highlights: [...newEvent.highlights, ""]
      });
    }
  };

  const handleRemoveHighlight = (index) => {
    if (editingEvent) {
      const updatedHighlights = [...editingEvent.highlights];
      updatedHighlights.splice(index, 1);
      setEditingEvent({
        ...editingEvent,
        highlights: updatedHighlights
      });
    } else {
      const updatedHighlights = [...newEvent.highlights];
      updatedHighlights.splice(index, 1);
      setNewEvent({
        ...newEvent,
        highlights: updatedHighlights
      });
    }
  };

  const handleHighlightChange = (index, value) => {
    if (editingEvent) {
      const updatedHighlights = [...editingEvent.highlights];
      updatedHighlights[index] = value;
      setEditingEvent({
        ...editingEvent,
        highlights: updatedHighlights
      });
    } else {
      const updatedHighlights = [...newEvent.highlights];
      updatedHighlights[index] = value;
      setNewEvent({
        ...newEvent,
        highlights: updatedHighlights
      });
    }
  };

  const handleAddEvent = () => {
    const eventToAdd = {
      ...newEvent,
      id: events.length > 0 ? Math.max(...events.map(e => e.id)) + 1 : 1
    };
    setEvents([...events, eventToAdd]);
    setNewEvent({
      title: "",
      date: "",
      location: "",
      type: "معرض",
      description: "",
      highlights: [""],
      time: "",
      registration: "",
      image: ""
    });
    // In a real app, you would save to a database here
    alert('تمت إضافة الفعالية بنجاح');
  };

  const handleDeleteEvent = (id) => {
    if (confirm('هل أنت متأكد من حذف هذه الفعالية؟')) {
      setEvents(events.filter(e => e.id !== id));
      // In a real app, you would delete from a database here
      alert('تم حذف الفعالية بنجاح');
    }
  };

  return (
    <div className={styles.editorWrapper}>
      <div className={styles.projectsList}>
        <h2 className={styles.sectionTitle}>قائمة الفعاليات</h2>
        <div className={styles.projectsTable}>
          <table>
            <thead>
              <tr>
                <th>العنوان</th>
                <th>التاريخ</th>
                <th>الموقع</th>
                <th>النوع</th>
                <th>الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {events.map(event => (
                <tr key={event.id}>
                  <td>{event.title}</td>
                  <td>{event.date}</td>
                  <td>{event.location}</td>
                  <td>{event.type}</td>
                  <td>
                    <button 
                      className={styles.editButton}
                      onClick={() => handleEditEvent(event)}
                    >
                      تعديل
                    </button>
                    <button 
                      className={styles.deleteButton}
                      onClick={() => handleDeleteEvent(event.id)}
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

      {editingEvent ? (
        <div className={styles.editForm}>
          <h2 className={styles.sectionTitle}>تعديل الفعالية</h2>
          <div className={styles.formGroup}>
            <label>عنوان الفعالية</label>
            <input 
              type="text" 
              value={editingEvent.title}
              onChange={(e) => setEditingEvent({...editingEvent, title: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>التاريخ</label>
            <input 
              type="text" 
              value={editingEvent.date}
              onChange={(e) => setEditingEvent({...editingEvent, date: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>الموقع</label>
            <input 
              type="text" 
              value={editingEvent.location}
              onChange={(e) => setEditingEvent({...editingEvent, location: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>النوع</label>
            <select
              value={editingEvent.type}
              onChange={(e) => setEditingEvent({...editingEvent, type: e.target.value})}
            >
              <option value="معرض">معرض</option>
              <option value="ندوة">ندوة</option>
              <option value="مؤتمر">مؤتمر</option>
              <option value="ورشة">ورشة</option>
              <option value="جولة">جولة</option>
              <option value="يوم مفتوح">يوم مفتوح</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>الوصف</label>
            <textarea 
              value={editingEvent.description}
              onChange={(e) => setEditingEvent({...editingEvent, description: e.target.value})}
              rows="4"
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <label>أبرز النقاط</label>
            {editingEvent.highlights.map((highlight, index) => (
              <div key={index} className={styles.featureInput}>
                <input 
                  type="text" 
                  value={highlight}
                  onChange={(e) => handleHighlightChange(index, e.target.value)}
                />
                <button 
                  type="button" 
                  className={styles.removeButton}
                  onClick={() => handleRemoveHighlight(index)}
                >
                  حذف
                </button>
              </div>
            ))}
            <button 
              type="button" 
              className={styles.addButton}
              onClick={handleAddHighlight}
            >
              إضافة نقطة
            </button>
          </div>
          <div className={styles.formGroup}>
            <label>الوقت</label>
            <input 
              type="text" 
              value={editingEvent.time}
              onChange={(e) => setEditingEvent({...editingEvent, time: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>التسجيل</label>
            <input 
              type="text" 
              value={editingEvent.registration}
              onChange={(e) => setEditingEvent({...editingEvent, registration: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>رابط الصورة</label>
            <input 
              type="text" 
              value={editingEvent.image}
              onChange={(e) => setEditingEvent({...editingEvent, image: e.target.value})}
            />
          </div>
          <div className={styles.formActions}>
            <button 
              className={styles.saveButton}
              onClick={handleUpdateEvent}
            >
              حفظ التغييرات
            </button>
            <button 
              className={styles.cancelButton}
              onClick={() => setEditingEvent(null)}
            >
              إلغاء
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.addForm}>
          <h2 className={styles.sectionTitle}>إضافة فعالية جديدة</h2>
          <div className={styles.formGroup}>
            <label>عنوان الفعالية</label>
            <input 
              type="text" 
              value={newEvent.title}
              onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>التاريخ</label>
            <input 
              type="text" 
              value={newEvent.date}
              onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>الموقع</label>
            <input 
              type="text" 
              value={newEvent.location}
              onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>النوع</label>
            <select
              value={newEvent.type}
              onChange={(e) => setNewEvent({...newEvent, type: e.target.value})}
            >
              <option value="معرض">معرض</option>
              <option value="ندوة">ندوة</option>
              <option value="مؤتمر">مؤتمر</option>
              <option value="ورشة">ورشة</option>
              <option value="جولة">جولة</option>
              <option value="يوم مفتوح">يوم مفتوح</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>الوصف</label>
            <textarea 
              value={newEvent.description}
              onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
              rows="4"
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <label>أبرز النقاط</label>
            {newEvent.highlights.map((highlight, index) => (
              <div key={index} className={styles.featureInput}>
                <input 
                  type="text" 
                  value={highlight}
                  onChange={(e) => handleHighlightChange(index, e.target.value)}
                />
                {newEvent.highlights.length > 1 && (
                  <button 
                    type="button" 
                    className={styles.removeButton}
                    onClick={() => handleRemoveHighlight(index)}
                  >
                    حذف
                  </button>
                )}
              </div>
            ))}
            <button 
              type="button" 
              className={styles.addButton}
              onClick={handleAddHighlight}
            >
              إضافة نقطة
            </button>
          </div>
          <div className={styles.formGroup}>
            <label>الوقت</label>
            <input 
              type="text" 
              value={newEvent.time}
              onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>التسجيل</label>
            <input 
              type="text" 
              value={newEvent.registration}
              onChange={(e) => setNewEvent({...newEvent, registration: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label>رابط الصورة</label>
            <input 
              type="text" 
              value={newEvent.image}
              onChange={(e) => setNewEvent({...newEvent, image: e.target.value})}
            />
          </div>
          <div className={styles.formActions}>
            <button 
              className={styles.saveButton}
              onClick={handleAddEvent}
            >
              إضافة الفعالية
            </button>
          </div>
        </div>
      )}
    </div>
  );
}