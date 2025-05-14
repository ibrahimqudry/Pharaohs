import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faInstagram, 
  faYoutube,
  faTwitter,
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerLogo}>
          <div className={styles.logoText}>الفراعنة</div>
          <p className={styles.logoTagline}>نبني مستقبلك في أسوان الجديدة</p>
        </div>
        <div className={styles.footerGrid}>
          <div>
            <h3 className={styles.footerTitle}>تواصل معنا</h3>
            <p>أسوان الجديدة - مصر</p>
            <p>هاتف: 123-456-789</p>
            <p>البريد الإلكتروني: info@pharaohs.com</p>
          </div>
          <div>
            <h3 className={styles.footerTitle}>روابط سريعة</h3>
            <ul className={styles.footerLinks}>
              <li><a href="/projects">مشاريعنا</a></li>
              <li><a href="/investment">فرص الاستثمار</a></li>
              <li><a href="/careers">الوظائف</a></li>
            </ul>
          </div>
          <div>
            <h3 className={styles.footerTitle}>تابعنا</h3>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className={styles.socialLink}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className={styles.socialLink}>
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="#" className={styles.socialLink}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className={styles.socialLink}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            جميع الحقوق محفوظة © {new Date().getFullYear()} الفراعنة للتطوير العقاري
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;