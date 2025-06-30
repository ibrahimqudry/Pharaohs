import styles from './Projects.module.css';
import { useState, useEffect } from 'react';
import { db } from '../../../firebase/config';
import { doc, getDoc } from "firebase/firestore";
import ClipLoader from 'react-spinners/ClipLoader';

const Projects = () => {
  const [vipProjects, setVipProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVipProjects = async () => {
      try {
        // Get the VIP projects document
        const vipDocRef = doc(db, "homepage", "vipProjects");
        const vipDocSnap = await getDoc(vipDocRef);

        if (vipDocSnap.exists()) {
          const { projectIds } = vipDocSnap.data();

          // Fetch details for each VIP project
          const projectsPromises = projectIds.map(async (id) => {
            const projectDocRef = doc(db, "projects", id);
            const projectDocSnap = await getDoc(projectDocRef);
            return projectDocSnap.data();
          });

          const projectsData = await Promise.all(projectsPromises);
          setVipProjects(projectsData);
        }
      } catch (error) {
        console.error("Error fetching VIP projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVipProjects();
  }, []);

  if (loading) return <div className='loading'><ClipLoader color="#bfa13a" size={48} /></div>;

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>أبرز مشاريعنا</h2>
        <div className={styles.grid}>
          {vipProjects.map((project, index) => (
            <div key={index} className={`${styles.card} card`}>
              <img src={project.image} alt={project.title} />
              <div className={styles.cardContent}>
                <h3 className={styles.reasonTitle}>{project.title}</h3>
                <p className={styles.reasonDescription}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <a href="/projects" className="gold-button">المزيد من المشاريع</a>
        </div>
      </div>
    </section>
  );

};
export default Projects;