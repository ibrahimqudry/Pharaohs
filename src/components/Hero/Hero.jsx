import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Hero.module.css';


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

function Hero() {

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true
            }
        }
    ]
};


  const slides = [
    {
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',
      title: 'الفراعنة للتطوير العقاري',
      description: 'نبني مستقبلك في أسوان الجديدة'
    },
    {
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      title: 'مشروع النيل',
      description: 'إطلالة مباشرة على النيل'
    },
    {
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      title: 'مشروع الفردوس',
      description: 'فلل مستقلة بتصميم عصري'
    }
  ];

  return (
    <section className={`swiper ${styles.heroSwiper}`}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`swiper-slide ${styles.heroSlide}`}
            data-currentslide={index} 
            style={{
              backgroundImage: `url('${slide.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>{slide.title}</h1>
              <p className={styles.heroDescription}>{slide.description}</p>
              <a href="/projects" className="gold-button">اعرف أكتر</a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
export default Hero;