import React from 'react';
import styles from './Hero.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';

export function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '10px' }}
      onClick={onClick}
    />
  );
}

export function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
      onClick={onClick}
    />
  );
}

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',
      title: 'الفراعنة للتطوير العقاري',
      description: 'نبني مستقبلك في أسوان الجديدة',
      link: '/projects'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      title: 'مشروع النيل',
      description: 'إطلالة مباشرة على النيل',
      link: '/projects'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      title: 'مشروع الفردوس',
      description: 'فلل مستقلة بتصميم عصري',
      link: '/projects'
    }
  ];

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000, 
        disableOnInteraction: false
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      loop={true}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div 
            className={styles.heroSlide}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={styles.heroContent}>
              <h1 className={styles.title}>{slide.title}</h1>
              <p className={styles.description}>{slide.description}</p>
              <a href={slide.link} className={`gold-button`}>اعرف أكتر</a>
            </div>
          </div>
        </SwiperSlide>
      ))}
      
      {/* Navigation buttons */}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
  );
};

export default Hero;