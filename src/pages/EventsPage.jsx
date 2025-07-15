import React, { useState, useEffect } from 'react';
import styles from './EventsPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt, faFilter, faBuilding, faUsers, faCertificate, faInfoCircle, faMagnet, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import ClipLoader from 'react-spinners/ClipLoader';

function EventsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsCollection = collection(db, "events");
      const data = await getDocs(eventsCollection);
      setEvents(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    };
    fetchEvents();
  }, []);

  const filteredEvents = activeFilter === 'all'
    ? events
    : events.filter(event => event.type === activeFilter);

  if (loading) {
    return (
      <div className="loading">
        <ClipLoader size={40} color="#bfa046" />
      </div>
    );
  }

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>فعاليات الفراعنة</h1>
          <p className={styles.pageDescription}>تعرف على أحدث الفعاليات والمناسبات التي تنظمها شركة الفراعنة للتطوير العقاري</p>
        </div>

        {/* Filters */}
        <div className={`dm ${styles.filtersContainer}`}>
          <div className={styles.filtersTitle}>
            <FontAwesomeIcon icon={faFilter} className={styles.filterIcon} />
            <span>تصفية الفعاليات</span>
          </div>
          <div className={styles.filterButtons}>
            <button
              className={`${styles.filterButton} ${activeFilter === 'all' ? styles.active : 'dm'}`}
              onClick={() => setActiveFilter('all')}
            >
              الكل
            </button>
            <button
              className={`${styles.filterButton} ${activeFilter === 'معرض' ? styles.active : 'dm'}`}
              onClick={() => setActiveFilter('معرض')}
            >
              <FontAwesomeIcon icon={faBuilding} className={styles.buttonIcon} />
              معارض
            </button>
            <button
              className={`${styles.filterButton} ${activeFilter === 'ندوة' ? styles.active : 'dm'}`}
              onClick={() => setActiveFilter('ندوة')}
            >
              <FontAwesomeIcon icon={faUsers} className={styles.buttonIcon} />
              ندوات
            </button>
            <button
              className={`${styles.filterButton} ${activeFilter === 'مؤتمر' ? styles.active : 'dm'}`}
              onClick={() => setActiveFilter('مؤتمر')}
            >
              <FontAwesomeIcon icon={faCertificate} className={styles.buttonIcon} />
              مؤتمرات
            </button>
            <button
              className={`${styles.filterButton} ${activeFilter === 'ورشة' ? styles.active : 'dm'}`}
              onClick={() => setActiveFilter('ورشة')}
            >
              <FontAwesomeIcon icon={faMagnet} className={styles.buttonIcon} />
              ورش
            </button>
            <button
              className={`${styles.filterButton} ${activeFilter === 'جولة' ? styles.active : 'dm'}`}
              onClick={() => setActiveFilter('جولة')}
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.buttonIcon} />
              جولات
            </button>
            <button
              className={`${styles.filterButton} ${activeFilter === 'يوم مفتوح' ? styles.active : 'dm'}`}
              onClick={() => setActiveFilter('يوم مفتوح')}
            >
              <FontAwesomeIcon icon={faLockOpen} className={styles.buttonIcon} />
              أيام مفتوحة
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className={styles.eventsGrid}>
          {filteredEvents.map(event => (
            <div key={event.id} className={`card ${styles.eventCard}`}>
              <div className={styles.eventImage}>
                <img src={event.image} alt={event.title} />
                <div className={styles.eventType}>{event.type}</div>
              </div>
              <div className={styles.eventContent}>
                <div className={styles.eventDate}>
                  <FontAwesomeIcon icon={faCalendarAlt} className={styles.dateIcon} />
                  {event.date}
                </div>
                <h2 className={styles.eventTitle}>{event.title}</h2>
                <div className={styles.eventLocation}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.locationIcon} />
                  <span>{event.location}</span>
                </div>
                <p className={styles.eventDescription}>{event.description}</p>

                <div className={`dm ${styles.eventHighlights}`}>
                  <h4 className={styles.highlightsTitle}>مميزات الفعالية:</h4>
                  <ul className={styles.highlightsList}>
                    {event.highlights.map((highlight, index) => (
                      <li key={index} className={styles.highlightItem}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.eventActions}>
                  {event.detailsLink ? (
                    <a href={event.detailsLink} className="gold-button">
                      <FontAwesomeIcon icon={faInfoCircle} className={styles.actionIcon} />
                      التفاصيل
                    </a>
                  ) : (<a></a>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className={styles.noResults}>
            <p>لا توجد فعاليات متاحة بهذا التصنيف حالياً</p>
          </div>
        )}


      </div>
    </main >
  );
}

export default EventsPage;