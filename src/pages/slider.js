import Head from 'next/head'
import styles from './slider.module.scss'
import React, { useState } from 'react';


export function Slider() {
  
  const [activeSlide, setActiveSlide] = useState(0);
  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slider__slides}>
        <img src="https://webpulse.imgsmail.ru/imgpreview?key=pulse_cabinet-file-f6214867-540f-4c24-8ab0-ad327f92e982&mb=webpulse" alt="Slide 1" className={activeSlide === 0 ? styles.active : ''}></img>
        <img src="https://wp-s.ru/wallpapers/1/42/515629262768626/seryj-britanskij-kot-otdyxaet.jpg" alt="Slide 2" className={activeSlide === 1 ? styles.active : ''}></img>
        <img src="https://mobimg.b-cdn.net/v3/fetch/98/98a9415b30f3f7cf83f6b2ce6b8e8638.jpeg" alt="Slide 3" className={activeSlide === 2 ? styles.active : ''}></img>
      </div>
      <div className={styles.slider__dots}>
        <div className={`${styles.slider__dot} ${activeSlide === 0 ? styles.active : ''}`} onClick={() => handleDotClick(0)}></div>
        <div className={`${styles.slider__dot} ${activeSlide === 1 ? styles.active : ''}`} onClick={() => handleDotClick(1)}></div>
        <div className={`${styles.slider__dot} ${activeSlide === 2 ? styles.active : ''}`} onClick={() => handleDotClick(2)}></div>
      </div>
    </div>
  );
};


export default function Home() {
    return (
      <div className={styles.container}>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <main>
          <Slider></Slider>
        </main>
      </div>
    )
  }