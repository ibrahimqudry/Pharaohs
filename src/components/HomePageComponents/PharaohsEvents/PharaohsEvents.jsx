import { useEffect, useState } from "react";
import { db } from "../../../firebase/config";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import styles from './PharaohsEvents.module.css';
import ClipLoader from 'react-spinners/ClipLoader';

function PharaohsEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBestEvents = async () => {
      // 1. Get the best events IDs
      const bestEventsDoc = await getDoc(doc(db, "homepage", "bestEvents"));
      if (!bestEventsDoc.exists()) { setLoading(false); return; }

      const { eventIds } = bestEventsDoc.data();
      if (!eventIds || eventIds.length === 0) { setLoading(false); return; }

      // 2. Fetch all events and filter by best event IDs
      const eventsSnapshot = await getDocs(collection(db, "events"));
      const allEvents = eventsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      const filteredEvents = allEvents.filter(event => eventIds.includes(event.id));
      setEvents(filteredEvents);
      setLoading(false);
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
          {loading ? (
            <div className="loading"><ClipLoader color="#bfa13a" size={48} /></div>
          ) :
            events.length !== 0 ?
              (events.map((event) => (
                <div key={event.id} className={`${styles.eventCard} card`}>
                  <div className={styles.eventImage}>
                    <img 
                    src={event.image ? event.image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOZugSlXrDIB3SLtuip9ZDU1iJScEqfby_Q&s'} 
                    alt={event.title} />
                  </div>
                  <div className={styles.eventContent}>
                    <div className={styles.eventDate}>{event.date}</div>
                    <h3 className={styles.eventTitle}>{event.title}</h3>
                    <p className={styles.eventDescription}>{event.description}</p>
                    <a href={event.detailsLink || "/events"} className={`${styles.eventButton} dmGold`}>التفاصيل</a>
                  </div>
                </div>
              ))) : (<p className="center">لا توجد أبرز فعاليات</p>)}
        </div>

        <div className={styles.buttonContainer}>
          <a href="/events" className="gold-button">اعرف أكتر</a>
        </div>
      </div>
    </section>
  );
}

export default PharaohsEvents;