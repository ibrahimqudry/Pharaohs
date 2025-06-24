import React from 'react';
import styles from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - الصفحة غير موجودة</h1>
      <p className={styles.message}>عذرًا، الصفحة التي تبحث عنها غير موجودة.</p>
      <a href="/" className={styles.homeLink}>العودة إلى الصفحة الرئيسية</a>
    </div>
  );
}