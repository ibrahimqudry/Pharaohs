import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faInstagram, 
  faYoutube,
  faTiktok,
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="footerContainer">
        <div className={styles.footerLogo}>
          <div className={styles.logoText}>الفراعنة</div>
          <p className={styles.logoTagline}>تاريخ يشهد .. مستقبل مبهر</p>
        </div>
        <div className={styles.footerGrid}>
          <div>
            <h3 className={styles.footerTitle}>تواصل معنا</h3>
            <p>أسوان الجديدة - مصر</p>
            <p>هاتف: +201080071544</p>
            <p>البريد الإلكتروني: pharaohsdevelopment1@gmail.com</p>
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
              <a href="https://www.facebook.com/alfranaa.realestate" className={styles.socialLink}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://www.instagram.com/alfranaa_for_realestate?igsh=MXJwN2dxdnRsZjF3cQ==" className={styles.socialLink}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://youtube.com/@pharaohsdevelopment?feature=shared" className={styles.socialLink}>
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://www.tiktok.com/@pharaohsdevelopment1?_t=ZS-8wD7sDC7Oqr&_r=1" className={styles.socialLink}>
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a href="https://www.linkedin.com/company/pharaohs-developments-group/" className={styles.socialLink}>
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