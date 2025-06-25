import { useEffect, useState } from "react";
import { db } from "../../../firebase/config";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import styles from './PharaohsEvents.module.css';

function PharaohsEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchBestEvents = async () => {
      // 1. Get the best events IDs
      const bestEventsDoc = await getDoc(doc(db, "homepage", "bestEvents"));
      if (!bestEventsDoc.exists()) return;

      const { eventIds } = bestEventsDoc.data();
      if (!eventIds || eventIds.length === 0) return;

      // 2. Fetch all events and filter by best event IDs
      const eventsSnapshot = await getDocs(collection(db, "events"));
      const allEvents = eventsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      const filteredEvents = allEvents.filter(event => eventIds.includes(event.id));
      setEvents(filteredEvents);
    };

    fetchBestEvents();
  }, []);

  return (
    <section className={styles.pharaohsEvents}>
      <div className="container py-16">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>فعاليات الفراعنة</h2>
          <div className={styles.titleDecoration}></div>
        </div>

        <div className={styles.eventsGrid}>
          {events.map((event) => (
            <div key={event.id} className={styles.eventCard}>
              <div className={styles.eventImage}>
                <img src={event.image} alt={event.title} />
              </div>
              <div className={styles.eventContent}>
                <div className={styles.eventDate}>{event.date}</div>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <p className={styles.eventDescription}>{event.description}</p>
                <a href={event.detailsLink || "/events"} className={styles.eventButton}>التفاصيل</a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.buttonContainer}>
          <a href="/events" className="gold-button">اعرف أكتر</a>
        </div>
      </div>
    </section>
  );
}

export default PharaohsEvents;