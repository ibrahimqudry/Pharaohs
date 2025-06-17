import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import styles from './AdminDashboard.module.css';

// Import editor components
import ProjectsEditor from '../components/AdminEditors/ProjectsEditor';
import AboutEditor from '../components/AdminEditors/AboutEditor';
import EventsEditor from '../components/AdminEditors/EventsEditor';
import CareersEditor from '../components/AdminEditors/CareersEditor';
import HomeEditor from '../components/AdminEditors/HomeEditor';
// import InvestmentEditor from '../components/AdminEditors/InvestmentEditor';
// import VipReviewsEditor from '../components/AdminEditors/VipReviewsEditor';
// import MilestonesEditor from '../components/AdminEditors/MilestonesEditor';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('projects');
  const { logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/admin');
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2>لوحة التحكم</h2>
        </div>
        <nav className={styles.sidebarNav}>
          <button 
            className={`${styles.navButton} ${activeTab === 'home' ? styles.active : ''}`}
            onClick={() => setActiveTab('home')}
          >
            الصفحة الرئيسية
          </button>
          <button 
            className={`${styles.navButton} ${activeTab === 'about' ? styles.active : ''}`}
            onClick={() => setActiveTab('about')}
          >
            من نحن
          </button>
          <button 
            className={`${styles.navButton} ${activeTab === 'projects' ? styles.active : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            المشاريع
          </button>
          <button 
            className={`${styles.navButton} ${activeTab === 'events' ? styles.active : ''}`}
            onClick={() => setActiveTab('events')}
          >
            الفعاليات
          </button>
          <button 
            className={`${styles.navButton} ${activeTab === 'careers' ? styles.active : ''}`}
            onClick={() => setActiveTab('careers')}
          >
            الوظائف
          </button>
          <button 
            className={`${styles.navButton} ${activeTab === 'investment' ? styles.active : ''}`}
            onClick={() => setActiveTab('investment')}
          >
            الاستثمار
          </button>
          <button 
            className={`${styles.navButton} ${activeTab === 'vip-reviews' ? styles.active : ''}`}
            onClick={() => setActiveTab('vip-reviews')}
          >
            آراء العملاء
          </button>
          <button 
            className={`${styles.navButton} ${activeTab === 'milestones' ? styles.active : ''}`}
            onClick={() => setActiveTab('milestones')}
          >
            مراحل المشاريع
          </button>
        </nav>
        <div className={styles.sidebarFooter}>
          <button onClick={handleLogout} className={styles.logoutButton}>
            تسجيل الخروج
          </button>
        </div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <h1 className={styles.contentTitle}>
            {activeTab === 'home' && 'تحرير الصفحة الرئيسية'}
            {activeTab === 'about' && 'تحرير صفحة من نحن'}
            {activeTab === 'projects' && 'تحرير صفحة المشاريع'}
            {activeTab === 'events' && 'تحرير صفحة الفعاليات'}
            {activeTab === 'careers' && 'تحرير صفحة الوظائف'}
            {activeTab === 'investment' && 'تحرير صفحة الاستثمار'}
            {activeTab === 'vip-reviews' && 'تحرير صفحة آراء العملاء'}
            {activeTab === 'milestones' && 'تحرير صفحة مراحل المشاريع'}
          </h1>
        </div>
        
        <div className={styles.editorContainer}>
          {activeTab === 'home' && <HomeEditor />}
          {activeTab === 'about' && <AboutEditor />}
          {activeTab === 'projects' && <ProjectsEditor />}
          {activeTab === 'events' && <EventsEditor />}
          {activeTab === 'careers' && <CareersEditor />}
          {activeTab === 'investment' && <InvestmentEditor />}
          {activeTab === 'vip-reviews' && <VipReviewsEditor />}
          {activeTab === 'milestones' && <MilestonesEditor />}
        </div>
      </div>
    </div>
  );
}