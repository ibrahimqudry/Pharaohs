import styles from './Projects.module.css';

function Projects() {
  const projects = [
    {
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
      title: "مشروع النيل",
      description: "وحدات سكنية فاخرة بإطلالة مباشرة على النيل"
    },
    {
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      title: "مشروع الواحة",
      description: "مجمع سكني متكامل الخدمات"
    },
    {
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      title: "مشروع الفردوس",
      description: "فلل مستقلة بتصميم عصري"
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>أبرز مشاريعنا</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
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
}
export default Projects;