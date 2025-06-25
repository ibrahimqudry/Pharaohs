import { useState, useEffect } from 'react';
import styles from './EditorStyles.module.css';
import { db } from '../../firebase/config';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

export default function EventsEditor() {
  const [events, setEvents] = useState([]);
  const eventsCollection = collection(db, "events");

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getDocs(eventsCollection);
      setEvents(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchEvents();
  }, []);

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
    image: "",
    detailsLink: ""
  });

  const handleEditEvent = (event) => {
    setEditingEvent({ ...event });
  };

  const handleUpdateEvent = async () => {
    const eventDoc = doc(db, "events", editingEvent.id);
    await updateDoc(eventDoc, editingEvent);
    // Re-fetch events
    const data = await getDocs(eventsCollection);
    setEvents(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    setEditingEvent(null);
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

  const handleAddEvent = async () => {
    await addDoc(eventsCollection, newEvent);
    // Re-fetch events
    const data = await getDocs(eventsCollection);
    setEvents(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    setNewEvent({
      title: "",
      date: "",
      location: "",
      type: "معرض",
      description: "",
      highlights: [""],
      time: "",
      registration: "",
      image: "",
      detailsLink: ""
    });
    alert('تمت إضافة الفعالية بنجاح');
  };

  const handleDeleteEvent = async (id) => {
    if (confirm('هل أنت متأكد من حذف هذه الفعالية؟')) {
      const eventDoc = doc(db, "events", id);
      await deleteDoc(eventDoc);
      // Re-fetch events
      const data = await getDocs(eventsCollection);
      setEvents(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
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
              onChange={(e) => setEditingEvent({ ...editingEvent, title: e.target.value })}
            />
          </div>
          <div className={styles.formGroup}>
            <label>التاريخ</label>
            <input
              type="text"
              value={editingEvent.date}
              onChange={(e) => setEditingEvent({ ...editingEvent, date: e.target.value })}
            />
          </div>
          <div className={styles.formGroup}>
            <label>الموقع</label>
            <input
              type="text"
              value={editingEvent.location}
              onChange={(e) => setEditingEvent({ ...editingEvent, location: e.target.value })}
            />
          </div>
          <div className={styles.formGroup}>
            <label>النوع</label>
            <select
              value={editingEvent.type}
              onChange={(e) => setEditingEvent({ ...editingEvent, type: e.target.value })}
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
              onChange={(e) => setEditingEvent({ ...editingEvent, description: e.target.value })}
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
              onChange={(e) => setEditingEvent({ ...editingEvent, time: e.target.value })}
            />
          </div>
          <div className={styles.formGroup}>
            <label>رسوم التسجيل</label>
            <input
              type="text"
              value={editingEvent.registration}
              onChange={(e) => setEditingEvent({ ...editingEvent, registration: e.target.value })}
            />
          </div>
          <div className={styles.formGroup}>
            <label>رابط الصورة</label>
            <input
              type="text"
              value={editingEvent.image}
              onChange={(e) => setEditingEvent({ ...editingEvent, image: e.target.value })}
            />
          </div>
          <div className={styles.formGroup}>
            <label>رابط التفاصيل</label>
            <input
              type="text"
              value={editingEvent.detailsLink || ''}
              onChange={(e) => setEditingEvent({ ...editingEvent, detailsLink: e.target.value })}
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
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            />
          </div>
          <div className={styles.formGroup}>
            <label>التاريخ</label>
            <input
              type="text"
              value={newEvent.date}
              onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            />
          </div>
          <div className={styles.formGroup}>
            <label>الموقع</label>
            <input
              type="text"
              value={newEvent.location}
              onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
            />
          </div>
          <div className={styles.formGroup}>
            <label>النوع</label>
            <select
              value={newEvent.type}
              onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
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
              onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
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
              onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
            />
          </div>
          <div className={styles.formGroup}>
            <label>رسوم التسجيل</label>
            <input
              type="text"
              value={newEvent.registration}
              onChange={(e) => setNewEvent({ ...newEvent, registration: e.target.value })}
            />
          </div>
          <div className={styles.formGroup}>
            <label>رابط الصورة</label>
            <input
              type="text"
              value={newEvent.image}
              onChange={(e) => setNewEvent({ ...newEvent, image: e.target.value })}
            />
          </div>
          <div className={styles.formGroup}>
            <label>رابط التفاصيل</label>
            <input
              type="text"
              value={newEvent.detailsLink || ''}
              onChange={(e) => setNewEvent({ ...newEvent, detailsLink: e.target.value })}
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