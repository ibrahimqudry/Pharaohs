import { useEffect, useState } from 'react';
import styles from './ExclusiveOffers.module.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import ClipLoader from 'react-spinners/ClipLoader';

function ExclusiveOffers() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'offers'));
        const offersData = [];
        querySnapshot.forEach((doc) => {
          offersData.push({ id: doc.id, ...doc.data() });
        });
        setOffers(offersData);
      } catch (error) {
        console.error('Error fetching offers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  if (loading) return <div className='loading'><ClipLoader color="#bfa13a" size={48} /></div>;
  if (offers.length === 0) return '';

  return (
    <section className={styles.exclusiveOffers}>
      <div className="container py-16">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>عروض حصرية</h2>
          <div className={styles.titleDecoration}></div>
        </div>
        <div className={styles.offersGrid}>
          {offers.map((offer) => (
            <div key={offer.id} className={`${styles.offerCard} card`}>
              <div className={styles.offerImage}>
                <img src={offer.image} alt={offer.title} />
              </div>
              <div className={styles.offerContent}>
                <h3 className="text-2xl font-semibold mb-2">{offer.title}</h3>
                <p className="mb-4">{offer.description}</p>
                <div className={styles.offerDetails}>
                  <span>{offer.price}</span>
                  <a href={offer.link} className="gold-button">التفاصيل</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExclusiveOffers;