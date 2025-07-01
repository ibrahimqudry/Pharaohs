import React, { useEffect, useState } from 'react';
import styles from './ContactPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const branches = [
    {
      name: 'المقر الرئيسي - أسوان',
      address: 'شارع كورنيش النيل، أسوان الجديدة',
      phone: '123-456-789',
      email: 'aswan@pharaohs.com',
      mapUrl: 'https://maps.google.com/?q=Aswan,Egypt',
    },
    {
      name: 'فرع القاهرة',
      address: 'شارع التحرير، وسط البلد، القاهرة',
      phone: '123-456-790',
      email: 'cairo@pharaohs.com',
      mapUrl: 'https://maps.google.com/?q=Cairo,Egypt',
    },
    {
      name: 'فرع الإسكندرية',
      address: 'شارع 45، ميامي، الإسكندرية',
      phone: '123-456-791',
      email: 'alex@pharaohs.com',
      mapUrl: 'https://maps.google.com/?q=Alexandria,Egypt',
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const email = e.target.email.value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('الرجاء إدخال بريد إلكتروني صالح');
      setIsSubmitting(false);
      return;
    }

    try {
      // Send email via EmailJS
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      alert('تم إرسال رسالتك بنجاح!');
      e.target.reset();
    } catch (error) {
      console.error('Error:', error);
      alert('حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">تواصل معنا</h1>

        {/* Contact Information Section */}
        <section className={styles.contactSection}>
          <div className={styles.contactGrid}>
            <div className={`card ${styles.contactInfo}`}>
              <h2 className={styles.sectionTitle}>معلومات الاتصال</h2>
              <div className={styles.infoItem}>
                <FontAwesomeIcon icon={faPhone} className={styles.infoIcon} />
                <div>
                  <h3>اتصل بنا</h3>
                  <p>123-456-789</p>
                  <p>123-456-790</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <FontAwesomeIcon icon={faEnvelope} className={styles.infoIcon} />
                <div>
                  <h3>البريد الإلكتروني</h3>
                  <p>info@pharaohs.com</p>
                  <p>sales@pharaohs.com</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.infoIcon} />
                <div>
                  <h3>العنوان الرئيسي</h3>
                  <p>شارع كورنيش النيل، أسوان الجديدة، مصر</p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className={styles.socialSection}>
                <h3>تابعنا على وسائل التواصل الاجتماعي</h3>
                <div className={styles.socialLinks}>
                  <a href="#" className={`dmGold ${styles.socialLink}`} aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="#" className={`dmGold ${styles.socialLink}`} aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="#" className={`dmGold ${styles.socialLink}`} aria-label="YouTube">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                  <a href="#" className={`dmGold ${styles.socialLink}`} aria-label="Twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#" className={`dmGold ${styles.socialLink}`} aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`card ${styles.contactForm}`}>
              <h2 className={styles.sectionTitle}>أرسل لنا رسالة</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">الاسم</label>
                  <input type="text" id="name" name="name" required placeholder="أدخل اسمك" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">البريد الإلكتروني</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">رقم الهاتف</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="أدخل رقم هاتفك"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="subject">الموضوع</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="أدخل الموضوع"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">الرسالة</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="اكتب رسالتك هنا"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="gold-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Branches Section */}
        <section className={styles.branchesSection}>
          <h2 className={styles.sectionTitle}>فروعنا</h2>
          <div className={styles.branchesGrid}>
            {branches.map((branch, index) => (
              <div key={index} className={`card ${styles.branchCard}`}>
                <h3 className={styles.branchName}>{branch.name}</h3>
                <div className={styles.branchDetails}>
                  <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {branch.address}</p>
                  <p><FontAwesomeIcon icon={faPhone} /> {branch.phone}</p>
                  <p><FontAwesomeIcon icon={faEnvelope} /> {branch.email}</p>
                </div>
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`dmGold ${styles.mapLink}`}
                >
                  عرض على الخريطة
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default ContactPage;