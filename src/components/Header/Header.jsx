import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext'; // Add this import
import styles from './Header.module.css';
import { FaMoon, FaSun } from 'react-icons/fa'; // Add icons

import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const selectRef = useRef(null);
  const { darkMode, toggleTheme } = useTheme();


  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsRef = collection(db, 'projects');
      const snapshot = await getDocs(projectsRef);
      const projectsList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProjects(projectsList);
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isMoreDropdownOpen) setIsMoreDropdownOpen(false);
    if (isProjectsDropdownOpen) setIsProjectsDropdownOpen(false);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+201149136352';
    const message = encodeURIComponent('مرحبا، أرغب في حجز وحدة');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const moreLinks = [
    { href: '/events', label: 'فعالياتنا' },
    { href: '/careers', label: 'الوظائف' },
    { href: '/investment', label: 'فرص الاستثمار' },
    { href: '/vip-reviews', label: 'آراء العملاء' },
  ];

  const toggleProjectsDropdown = () => {
    setIsMoreDropdownOpen(false); // Close the other dropdown
    setIsProjectsDropdownOpen(prev => !prev);
  };

  const toggleMoreDropdown = () => {
    setIsProjectsDropdownOpen(false); // Close the other dropdown
    setIsMoreDropdownOpen(prev => !prev);
  };

  return (
    <header className={`${styles.header} dm`}>
      <nav className={`${styles.nav} container`} aria-label="التنقل الرئيسي">
        <div className={styles.logoAndToggle}>
          <a href="/" className={styles.logo} aria-label="الفراعنة - الصفحة الرئيسية">
            <img src="/logo.png" alt="الفراعنة" />
          </a>

          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="تبديل الوضع المظلم"
          >
            {darkMode ? <FaSun className={styles.themeIcon} /> : <FaMoon className={styles.themeIcon} />}
          </button>
        </div>

        <button
          className={`${styles.toggleButton} ${isOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="nav-menu"
          aria-label="تبديل القائمة"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`} id="nav-menu">
          <ul className={styles.navList}>
            <li>
              <a
                href="/"
                className={styles.navLink}
                onClick={toggleMenu}
              >
                الرئيسية
              </a>
            </li>

            <li className={styles.dropdown} ref={selectRef}>
              <button
                className={`${styles.dropdownToggle} ${styles.navLink}`}
                onClick={toggleProjectsDropdown}
                aria-expanded={isProjectsDropdownOpen}
                aria-haspopup="true"
              >
                مشاريعنا
                <span className={`${styles.arrow} ${isProjectsDropdownOpen ? styles.arrowOpen : ''}`} aria-hidden="true"></span>
              </button>
              <ul className={`${styles.dropdownMenu} ${isProjectsDropdownOpen ? styles.show : ''}`}>
                <li>
                  <a
                    href="/projects"
                    className={styles.dropdownLink}
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    جميع المشاريع
                  </a>
                </li>
                {projects.map(project => (
                  <li key={project.id}>
                    <a
                      href={`/projects/${project.id}`}
                      className={styles.dropdownLink}
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      {project.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <a
                href="/about"
                className={styles.navLink}
                onClick={toggleMenu}
              >
                عن الفراعنة
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={styles.navLink}
                onClick={toggleMenu}
              >
                تواصل معنا
              </a>
            </li>
            <li className={styles.dropdown} ref={selectRef}>
              <button
                className={`${styles.dropdownToggle} ${styles.navLink} dm`}
                onClick={toggleMoreDropdown}
                aria-expanded={isMoreDropdownOpen}
                aria-haspopup="true"
              >
                المزيد
                <span className={`${styles.arrow} ${isMoreDropdownOpen ? styles.arrowOpen : ''}`} aria-hidden="true"></span>
              </button>
              <ul className={`${styles.dropdownMenu} ${isMoreDropdownOpen ? styles.show : ''}`}>
                {moreLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={styles.dropdownLink}
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>

        <button
          className={`${styles.bookButton} gold-button`}
          onClick={handleWhatsAppClick}
          aria-label="احجز وحدتك عبر واتساب"
        >
          احجز وحدتك
        </button>
      </nav>
    </header>
  );
}

export default Header;