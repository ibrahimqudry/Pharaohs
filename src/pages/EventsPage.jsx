import React, { useState, useEffect } from 'react';
import styles from './EventsPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt, faFilter, faBuilding, faUsers, faCertificate, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';

function EventsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsCollection = collection(db, "events");
      const data = await getDocs(eventsCollection);
      setEvents(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchEvents();
  }, []);

  const filteredEvents = activeFilter === 'all'
    ? events
    : events.filter(event => event.type === activeFilter);

  const handleWhatsAppClick = () => {
    const phoneNumber = '+201149136352';
    const message = encodeURIComponent('مرحبا، أرغب في التسجيل في الفعالية');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>فعاليات الفراعنة</h1>
          <p className={styles.pageDescription}>تعرف على أحدث الفعاليات والمناسبات التي تنظمها شركة الفراعنة للتطوير العقاري</p>
        </div>

        {/* Filters */}
        <div className={styles.filtersContainer}>
          <div className={styles.filtersTitle}>
            <FontAwesomeIcon icon={faFilter} className={styles.filterIcon} />
            <span>تصفية الفعاليات</span>
          </div>
          <div className={styles.filterButtons}>
            <button
              className={`${styles.filterButton} ${activeFilter === 'all' ? styles.active : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              الكل
            </button>
            <button
              className={`${styles.filterButton} ${activeFilter === 'معرض' ? styles.active : ''}`}
              onClick={() => setActiveFilter('معرض')}
            >
              <FontAwesomeIcon icon={faBuilding} className={styles.buttonIcon} />
              معارض
            </button>
            <button
              className={`${styles.filterButton} ${activeFilter === 'ندوة' ? styles.active : ''}`}
              onClick={() => setActiveFilter('ندوة')}
            >
              <FontAwesomeIcon icon={faUsers} className={styles.buttonIcon} />
              ندوات
            </button>
            <button
              className={`${styles.filterButton} ${activeFilter === 'مؤتمر' ? styles.active : ''}`}
              onClick={() => setActiveFilter('مؤتمر')}
            >
              <FontAwesomeIcon icon={faCertificate} className={styles.buttonIcon} />
              مؤتمرات
            </button>
            <button
              className={`${styles.filterButton} ${activeFilter === 'جولة' ? styles.active : ''}`}
              onClick={() => setActiveFilter('جولة')}
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.buttonIcon} />
              جولات
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className={styles.eventsGrid}>
          {filteredEvents.map(event => (
            <div key={event.id} className={styles.eventCard}>
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

                <div className={styles.eventHighlights}>
                  <h4 className={styles.highlightsTitle}>مميزات الفعالية:</h4>
                  <ul className={styles.highlightsList}>
                    {event.highlights.map((highlight, index) => (
                      <li key={index} className={styles.highlightItem}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.eventMeta}>
                  <div className={styles.eventTime}>
                    <span className={styles.metaLabel}>الموعد:</span>
                    <span className={styles.metaValue}>{event.time}</span>
                  </div>
                  <div className={styles.eventRegistration}>
                    <span className={styles.metaLabel}>رسوم التسجيل:</span>
                    <span className={styles.metaValue}>{event.registration}</span>
                  </div>
                </div>

                <div className={styles.eventActions}>
                  <a href={event.detailsLink ? event.detailsLink : `/events/${event.id}`} className={styles.detailsButton}>
                    <FontAwesomeIcon icon={faInfoCircle} className={styles.actionIcon} />
                    التفاصيل
                  </a>
                  <a onClick={handleWhatsAppClick} className="gold-button">التسجيل</a>
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
    </main>
  );
}

export default EventsPage;