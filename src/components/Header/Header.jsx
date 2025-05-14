import { useEffect } from 'react';
import styles from './Header.module.css';

function Header() {
  useEffect(() => {
    const toggleButton = document.querySelector(`.${styles.toggleButton}`);
    const navLinks = document.querySelector(`.${styles.navLinks}`);

    if (toggleButton && navLinks) {
      const toggleMenu = () => {
        navLinks.classList.toggle(styles.active);
        toggleButton.classList.toggle(styles.active);
      };

      toggleButton.addEventListener('click', toggleMenu);

      return () => {
        toggleButton.removeEventListener('click', toggleMenu);
      };
    }
  }, []);

  return (
    <header>
      <nav className="container">
        <div className={styles.logo}>الفراعنة</div>
        <button className={styles.toggleButton}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={styles.navLinks}>
          <a href="/">الرئيسية</a>
          <a href="/projects">مشاريعنا</a>
          <a href="/investment">فرص الاستثمار</a>
          <a href="/about">عن الفراعنة</a>
          <a href="/contact">تواصل معنا</a>
        </div>
        <button className="gold-button">احجز وحدتك</button>
      </nav>
    </header>
  );
}
export default Header;