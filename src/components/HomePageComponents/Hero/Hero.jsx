import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import ClipLoader from 'react-spinners/ClipLoader';

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
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'heroSlides'));
        const slidesData = [];
        querySnapshot.forEach((doc) => {
          slidesData.push({ id: doc.id, ...doc.data() });
        });
        setSlides(slidesData);
      } catch (error) {
        console.error('Error fetching slides:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  if (loading) return <div className='loading'><ClipLoader color="#bfa13a" size={48} /></div>;
  if (slides.length === 0) return <div className={styles.notFound}>لا توجد شرائح متاحة</div>;

  return (
    <Swiper
      className={styles.swiper}
      modules={[Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
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
              <h1 className={`dmBlack ${styles.title}`}>{slide.title}</h1>
              <p className={`dmBlack ${styles.description}`}>{slide.description}</p>
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