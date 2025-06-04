import React, { useState } from 'react';
import styles from './EventsPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt, faFilter, faBuilding, faUsers, faCertificate, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function EventsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const events = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
      title: "معرض العقارات السنوي",
      date: "15 أكتوبر 2023",
      location: "فندق كتراكت - أسوان",
      type: "معرض",
      description: "معرض لأحدث المشاريع العقارية في أسوان الجديدة مع عروض حصرية للزوار. فرصة مميزة للتعرف على أفضل الفرص الاستثمارية المتاحة والحصول على خصومات خاصة.",
      highlights: [
        "عروض حصرية على الوحدات السكنية",
        "لقاءات مباشرة مع مطوري المشاريع",
        "استشارات عقارية مجانية",
        "جوائز وهدايا للزوار"
      ],
      time: "10:00 صباحاً - 10:00 مساءً",
      registration: "مجاني"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
      title: "ندوة الاستثمار العقاري",
      date: "22 نوفمبر 2023",
      location: "مركز المؤتمرات - أسوان الجديدة",
      type: "ندوة",
      description: "ندوة متخصصة حول فرص الاستثمار العقاري وكيفية تحقيق أعلى عائد استثماري. يقدمها نخبة من الخبراء والمتخصصين في مجال التطوير العقاري والاستثمار.",
      highlights: [
        "تحليل سوق العقارات في صعيد مصر",
        "استراتيجيات الاستثمار العقاري الناجح",
        "دراسات جدوى للمشاريع العقارية",
        "شهادات حضور معتمدة"
      ],
      time: "5:00 مساءً - 8:00 مساءً",
      registration: "200 جنيه"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg",
      title: "جولة في مشاريع الفراعنة",
      date: "5 ديسمبر 2023",
      location: "مشاريع شركة الفراعنة - أسوان الجديدة",
      type: "جولة",
      description: "جولة ميدانية في مشاريع شركة الفراعنة للتعرف على التصاميم والمواصفات عن قرب. فرصة للمستثمرين والعملاء المحتملين لرؤية جودة التنفيذ والتشطيبات.",
      highlights: [
        "زيارة للوحدات النموذجية",
        "شرح تفصيلي للمواصفات والتشطيبات",
        "لقاء مع مهندسي الشركة",
        "وجبة غداء مجانية للمشاركين"
      ],
      time: "9:00 صباحاً - 3:00 مساءً",
      registration: "مجاني (التسجيل المسبق مطلوب)"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg",
      title: "مؤتمر التطوير العقاري في صعيد مصر",
      date: "18 يناير 2024",
      location: "فندق موفنبيك - أسوان",
      type: "مؤتمر",
      description: "مؤتمر سنوي يجمع كبار المطورين العقاريين والمستثمرين لمناقشة مستقبل التطوير العقاري في صعيد مصر والفرص المتاحة في المدن الجديدة.",
      highlights: [
        "كلمات لوزراء ومسؤولين حكوميين",
        "عرض للخطط المستقبلية للتنمية العمرانية",
        "فرص للتواصل مع المستثمرين والمطورين",
        "توقيع اتفاقيات وشراكات"
      ],
      time: "9:00 صباحاً - 6:00 مساءً",
      registration: "500 جنيه"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg",
      title: "ورشة عمل: التمويل العقاري",
      date: "10 فبراير 2024",
      location: "مقر شركة الفراعنة - أسوان الجديدة",
      type: "ورشة",
      description: "ورشة عمل متخصصة حول برامج التمويل العقاري المتاحة وكيفية الاستفادة منها. بمشاركة ممثلين عن البنوك وشركات التمويل العقاري.",
      highlights: [
        "شرح لمبادرات البنك المركزي للتمويل العقاري",
        "خطوات الحصول على قرض عقاري",
        "مقارنة بين برامج التمويل المختلفة",
        "استشارات فردية للمشاركين"
      ],
      time: "4:00 مساءً - 7:00 مساءً",
      registration: "مجاني (الأماكن محدودة)"
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg",
      title: "يوم مفتوح: مشروع النيل",
      date: "25 مارس 2024",
      location: "موقع مشروع النيل - أسوان الجديدة",
      type: "يوم مفتوح",
      description: "يوم مفتوح للتعرف على مشروع النيل السكني وزيارة الوحدات النموذجية. فرصة للحصول على خصومات خاصة والتعرف على تفاصيل المشروع.",
      highlights: [
        "خصم 5% على الحجز خلال اليوم المفتوح",
        "هدايا قيمة للحاجزين",
        "تسهيلات في السداد",
        "ضيافة فاخرة للزوار"
      ],
      time: "10:00 صباحاً - 8:00 مساءً",
      registration: "مجاني"
    }
  ];

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.type === activeFilter);

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>فعاليات الفراعنة</h1>
          <p className={styles.pageDescription}>تعرف على أحدث الفعاليات والمناسبات التي تنظمها شركة الفراعنة للتطوير العقاري</p>
        </div>

        {/* Filters */}
        <div className={styles.filtersContainer}>
          <div className={styles.filtersTitle}>
            <FontAwesomeIcon icon={faFilter} className={styles.filterIcon} />
            <span>تصفية الفعاليات</span>
          </div>
          <div className={styles.filterButtons}>
            <button 
              className={`${styles.filterButton} ${activeFilter === 'all' ? styles.active : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              الكل
            </button>
            <button 
              className={`${styles.filterButton} ${activeFilter === 'معرض' ? styles.active : ''}`}
              onClick={() => setActiveFilter('معرض')}
            >
              <FontAwesomeIcon icon={faBuilding} className={styles.buttonIcon} />
              معارض
            </button>
            <button 
              className={`${styles.filterButton} ${activeFilter === 'ندوة' ? styles.active : ''}`}
              onClick={() => setActiveFilter('ندوة')}
            >
              <FontAwesomeIcon icon={faUsers} className={styles.buttonIcon} />
              ندوات
            </button>
            <button 
              className={`${styles.filterButton} ${activeFilter === 'مؤتمر' ? styles.active : ''}`}
              onClick={() => setActiveFilter('مؤتمر')}
            >
              <FontAwesomeIcon icon={faCertificate} className={styles.buttonIcon} />
              مؤتمرات
            </button>
            <button 
              className={`${styles.filterButton} ${activeFilter === 'جولة' ? styles.active : ''}`}
              onClick={() => setActiveFilter('جولة')}
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.buttonIcon} />
              جولات
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className={styles.eventsGrid}>
          {filteredEvents.map(event => (
            <div key={event.id} className={styles.eventCard}>
              <div className={styles.eventImage}>
                <img src={event.image} alt={event.title} />
                <div className={styles.eventType}>{event.type}</div>
              </div>
              <div className={styles.eventContent}>
                <div className={styles.eventDate}>
                  <FontAwesomeIcon icon={faCalendarAlt} className={styles.dateIcon} />
                  {event.date}
                </div>
                <h2 className={styles.eventTitle}>{event.title}</h2>
                <div className={styles.eventLocation}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.locationIcon} />
                  <span>{event.location}</span>
                </div>
                <p className={styles.eventDescription}>{event.description}</p>
                
                <div className={styles.eventHighlights}>
                  <h4 className={styles.highlightsTitle}>مميزات الفعالية:</h4>
                  <ul className={styles.highlightsList}>
                    {event.highlights.map((highlight, index) => (
                      <li key={index} className={styles.highlightItem}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.eventMeta}>
                  <div className={styles.eventTime}>
                    <span className={styles.metaLabel}>الموعد:</span>
                    <span className={styles.metaValue}>{event.time}</span>
                  </div>
                  <div className={styles.eventRegistration}>
                    <span className={styles.metaLabel}>رسوم التسجيل:</span>
                    <span className={styles.metaValue}>{event.registration}</span>
                  </div>
                </div>
                
                <div className={styles.eventActions}>
                  <a href={`/events/${event.id}`} className={styles.detailsButton}>
                    <FontAwesomeIcon icon={faInfoCircle} className={styles.actionIcon} />
                    التفاصيل
                  </a>
                  <a href="/contact" className="gold-button">التسجيل</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className={styles.noResults}>
            <p>لا توجد فعاليات متاحة بهذا التصنيف حالياً</p>
          </div>
        )}
        
        <div className={styles.upcomingEvents}>
          <h2 className={styles.upcomingTitle}>ترقبوا فعالياتنا القادمة</h2>
          <p className={styles.upcomingDescription}>نعمل دائماً على تنظيم فعاليات متنوعة لعملائنا ومتابعينا. تابعونا لمعرفة أحدث الفعاليات.</p>
          <div className={styles.subscribeForm}>
            <h3 className={styles.subscribeTitle}>اشترك في النشرة البريدية</h3>
            <p className={styles.subscribeText}>ليصلك كل جديد عن فعاليات وعروض شركة الفراعنة</p>
            <form className={styles.form}>
              <input type="email" placeholder="البريد الإلكتروني" className={styles.emailInput} required />
              <button type="submit" className="gold-button">اشتراك</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default EventsPage;