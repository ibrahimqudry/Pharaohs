import { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const selectRef = useRef(null);

  // Close dropdown on outside click
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
    if (isDropdownOpen) setIsDropdownOpen(false);
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

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`} aria-label="التنقل الرئيسي">
        <a href="/" className={styles.logo} aria-label="الفراعنة - الصفحة الرئيسية">
          <img src="/logo.jpg" alt="الفراعنة" />
        </a>

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
                onClick={() => {
                  setIsOpen(false);
                  setIsDropdownOpen(false);
                }}
              >
                الرئيسية
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className={styles.navLink}
                onClick={() => {
                  setIsOpen(false);
                  setIsDropdownOpen(false);
                }}
              >
                مشاريعنا
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={styles.navLink}
                onClick={() => {
                  setIsOpen(false);
                  setIsDropdownOpen(false);
                }}
              >
                عن الفراعنة
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={styles.navLink}
                onClick={() => {
                  setIsOpen(false);
                  setIsDropdownOpen(false);
                }}
              >
                تواصل معنا
              </a>
            </li>
            <li className={styles.dropdown} ref={selectRef}>
              <button
                className={`${styles.dropdownToggle} ${styles.navLink}`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                المزيد
                <span className={`${styles.arrow} ${isDropdownOpen ? styles.arrowOpen : ''}`} aria-hidden="true"></span>
              </button>
              <ul className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.show : ''}`}>
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