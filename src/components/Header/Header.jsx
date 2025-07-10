import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import styles from './Header.module.css';
import ClipLoader from 'react-spinners/ClipLoader';

// Navigation link data
const navLinks = [
  { to: '/', label: 'الرئيسية' },
  { to: '/about', label: 'عن الفراعنة' },
  { to: '/contact', label: 'تواصل معنا' },
];

const moreLinks = [
  { to: '/events', label: 'فعالياتنا' },
  { to: '/careers', label: 'الوظائف' },
  { to: '/investment', label: 'فرص الاستثمار' },
  { to: '/vip-reviews', label: 'قالوا عن الفراعنة' },
];

function Header() {
  const { darkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({ projects: false, more: false });
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const projectsDropdownRef = useRef(null);
  const moreDropdownRef = useRef(null);

  // Fetch projects from Firebase
  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const projectsRef = collection(db, 'projects');
        const snapshot = await getDocs(projectsRef);
        const projectsList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(projectsList);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setError('فشل في تحميل المشاريع');
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Handle clicks and keypresses outside dropdowns
  useEffect(() => {
    let timeoutId;
    const handleClickOutside = (event) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const isOutsideProjects = projectsDropdownRef.current && !projectsDropdownRef.current.contains(event.target);
        const isOutsideMore = moreDropdownRef.current && !moreDropdownRef.current.contains(event.target);
        if (isOutsideProjects && isOutsideMore) {
          setDropdowns({ projects: false, more: false });
        }
      }, 100);
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setDropdowns({ projects: false, more: false });
      }
    };

    document.addEventListener('pointerdown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timeoutId);
    };
  }, []);

  // Toggle mobile menu and close dropdowns
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    setDropdowns({ projects: false, more: false });
  };

  // Toggle dropdowns, closing the other
  const toggleDropdown = (dropdown) =>
    setDropdowns(prev => ({
      projects: dropdown === 'projects' ? !prev.projects : false,
      more: dropdown === 'more' ? !prev.more : false,
    }));

  // Handle WhatsApp booking
  const handleWhatsAppClick = () => {
    const phoneNumber = '+201080071544';
    const message = encodeURIComponent('مرحبا، أرغب في حجز وحدة');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  // Render navigation link
  const renderNavLink = ({ to, label }) => (
    <li key={to}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${styles.navLink} ${isActive ? styles.active : ''}`
        }
        onClick={toggleMenu}
      >
        {label}
      </NavLink>
    </li>
  );

  // Render dropdown
  const renderDropdown = (type, items, label) => {
    const isMobile = window.innerWidth <= 768;
    const shouldShowDropdown = !isMobile || (isMenuOpen && dropdowns[type]);
    return (
      <li className={styles.dropdown} ref={type === 'projects' ? projectsDropdownRef : moreDropdownRef}>
        <button
          className={`${styles.dropdownToggle} ${styles.navLink} ${darkMode ? 'dm' : ''}`}
          onClick={() => toggleDropdown(type)}
          aria-expanded={dropdowns[type]}
          aria-haspopup="true"
          aria-controls={`${type}-dropdown`}
        >
          {label}
          <span
            className={`${styles.arrow} ${dropdowns[type] ? styles.arrowOpen : ''}`}
            aria-hidden="true"
          ></span>
        </button>
        {shouldShowDropdown && (
          <ul
            className={`${styles.dropdownMenu} ${darkMode ? 'dm' : ''} ${dropdowns[type] ? styles.show : ''}`}
            role="menu"
            id={`${type}-dropdown`}
          >
            {type === 'projects' ? (
              isLoading ? (
                <li className="loading"><ClipLoader color="#bfa13a" size={32} /></li>
              ) : error ? (
                <li>{error}</li>
              ) : projects.length === 0 ? (
                <li>لا توجد مشاريع متاحة</li>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="/projects"
                      className={({ isActive }) =>
                        `${styles.dropdownLink} ${isActive ? styles.active : ''}`
                      }
                      onClick={toggleMenu}
                    >
                      جميع المشاريع
                    </NavLink>
                  </li>
                  {projects.map(project => (
                    <li key={project.id}>
                      <NavLink
                        to={`/projects/${project.id}`}
                        className={({ isActive }) =>
                          `${styles.dropdownLink} ${isActive ? styles.active : ''}`
                        }
                        onClick={toggleMenu}
                      >
                        {project.title}
                      </NavLink>
                    </li>
                  ))}
                </>
              )
            ) : (
              items.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `${styles.dropdownLink} ${isActive ? styles.active : ''}`
                    }
                    onClick={toggleMenu}
                  >
                    {label}
                  </NavLink>
                </li>
              ))
            )}
          </ul>
        )}
      </li>
    );
  };

  return (
    <header className={`${styles.header} ${darkMode ? 'header-dm' : ''}`}>
      <nav className={`header-dm ${styles.nav} container`} aria-label="التنقل الرئيسي">
        {/* Logo and Theme Toggle */}
        <div className={styles.logoAndToggle}>
          <NavLink
            to="/"
            className={styles.logo}
            aria-label="الفراعنة - الصفحة الرئيسية"
            onClick={toggleMenu}
          >
            <img src="/logo.png" alt="الفراعنة" />
          </NavLink>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`تبديل إلى الوضع ${darkMode ? 'الفاتح' : 'المظلم'}`}
          >
            {darkMode ? <FaSun className={styles.themeIcon} /> : <FaMoon className={styles.themeIcon} />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`toggle-dm ${styles.toggleButton} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
          aria-label="تبديل القائمة"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <div
          className={`dm ${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}
          id="nav-menu"
          role="navigation"
        >
          <ul className={styles.navList}>
            {navLinks.map(renderNavLink)}
            {renderDropdown('projects', projects, 'مشاريعنا')}
            {renderDropdown('more', moreLinks, 'المزيد')}
          </ul>
        </div>

        {/* Book Now Button */}
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