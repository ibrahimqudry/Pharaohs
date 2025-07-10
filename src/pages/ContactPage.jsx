import { useEffect, useState } from 'react';
import styles from './ContactPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTiktok,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);


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
                  <h3>للتواصل</h3>
                  <a href="tel:=+201080071544" className={`dmGold ${styles.contactLink}`}>+201080071544</a>
                </div>
              </div>
              <div className={styles.infoItem}>
                <FontAwesomeIcon icon={faEnvelope} className={styles.infoIcon} />
                <div>
                  <h3>البريد الإلكتروني</h3>
                  <a href="mailto:pharaohsdevelopment1@gmail.com" className={`dmGold ${styles.contactLink}`}>pharaohsdevelopment1@gmail.com</a>
                  <br /><br />
                  <a href="mailto:Pharaohshr1@gmail.com" className={`dmGold ${styles.contactLink}`}>Pharaohshr1@gmail.com</a>
                </div>
              </div>
              <div className={styles.infoItem}>
                <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.infoIcon} />
                <div>
                  <h3>الفروع</h3>
                  <p className={styles.mapLink} >
                    <a className='dmGold' href="https://maps.app.goo.gl/XFRquurV1Z78GPdJ7?g_st=ac" target="_blank" rel="noopener noreferrer">
                      الفرع الإداري : اسوان الجديدة - الحي التاني
                    </a>
                  </p>
                  <p className={styles.mapLink}>
                    <a className='dmGold' href="https://maps.app.goo.gl/xpsCHsbw76ChMF4z9?g_st=ac" target="_blank" rel="noopener noreferrer">
                      فرع ادفو : شارع المركز - مول ابو الشيخ
                    </a>
                  </p>
                  <p className={styles.mapLink}>

                    <a className='dmGold' href="https://maps.app.goo.gl/Hcun2YKbgqNQekN39?g_st=ac" target="_blank" rel="noopener noreferrer">
                      فرع أسوان : كورنيش النيل - مول الرياض
                    </a>
                  </p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className={styles.socialSection}>
                <h3>تابعنا على وسائل التواصل الاجتماعي</h3>
                <div className={styles.socialLinks}>
                  <a href="https://www.facebook.com/alfranaa.realestate" className={`dmGoldBackground ${styles.socialLink}`} aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="https://www.instagram.com/alfranaa_for_realestate?igsh=MXJwN2dxdnRsZjF3cQ==" className={`dmGoldBackground ${styles.socialLink}`} aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="https://youtube.com/@pharaohsdevelopment?feature=shared" className={`dmGoldBackground ${styles.socialLink}`} aria-label="YouTube">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                  <a href="https://www.tiktok.com/@pharaohsdevelopment1?_t=ZS-8wD7sDC7Oqr&_r=1" className={`dmGoldBackground ${styles.socialLink}`} aria-label="Twitter">
                    <FontAwesomeIcon icon={faTiktok} />
                  </a>
                  <a href="https://www.linkedin.com/company/pharaohs-developments-group/" className={`dmGoldBackground ${styles.socialLink}`} aria-label="LinkedIn">
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

      </div>
    </main>
  );
}

export default ContactPage;