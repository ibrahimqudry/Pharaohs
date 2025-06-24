import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import styles from './ProjectDetailsPage.module.css';

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const docRef = doc(db, 'projects', id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setProject({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log('No such project!');
        }
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) return <div className={styles.loading}>جاري التحميل...</div>;
  if (!project) return <div className={styles.notFound}>المشروع غير موجود</div>;

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={project.image} alt={project.title} className={styles.mainImage} />
      </div>
      
      <div className={styles.detailsContainer}>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.location}>{project.location}</p>
        
        <div className={styles.priceStatusContainer}>
          <span className={styles.price}>{project.price}</span>
          <span className={`${styles.status} ${project.status === 'تم البيع' ? styles.sold : ''}`}>
            {project.status}
          </span>
        </div>
        
        <div className={styles.description}>
          <h2>وصف المشروع</h2>
          <p>{project.description}</p>
          {project.longDescription && <p>{project.longDescription}</p>}
        </div>
           
        <a href="/contact" className={styles.inquiryButton}>استفسار</a>
      </div>
    </div>
  );
}