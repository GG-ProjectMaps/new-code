import Head from 'next/head'
import styles from './index.module.scss'
import React, { useState } from 'react'; 
import Link from 'next/link';

export function StatusButton(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return <div className={`
            ${styles.statusButton}
            ${isChecked && styles.statusButton_checked}
          `}
          onClick={handleClick}></div>
}

export function Rubricator(props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };

  return <div className={styles.rubricator}>
            <div className={styles.rubricator__button} 
              onClick={handleButtonClick}></div>
            <div className={`
              ${styles.rubricator__filter} 
              ${isClicked && styles.rubricator__filter_clicked}`}>
              {props.children}
            </div>
          </div>
}


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charset="UTF-8"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500&display=swap" rel="stylesheet"></link>
        <title>Underground Map</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <main>
        <div className={styles.fullLeftbar}>
          <div className={styles.leftbar}>
          <Link href="./offerForm">
            <button className={styles.addButton}>+</button>
          </Link>
            <Rubricator>
              <div className={styles.filter__content}>
                <div className={styles.content__option}>кафе</div>
                <div className={styles.content__option}>пространства</div>
                <div className={styles.content__option}>клубы</div>
                <div className={styles.content__option}>бары</div>
                <div className={styles.content__option}>магазины</div>
                <div className={styles.content__option}>театры и музеи</div>
                <div className={styles.content__option}>киноклубы</div>
                <div className={styles.content__option}>точки музыкантов</div>
              </div>
            </Rubricator>
            <div className={styles.leftbar__statusButton}>
              <StatusButton></StatusButton>
            </div>
            <div className={styles.leftbar__content}>
              <div className={styles.content__title}>
                Бар "Самоцвет"
              </div>
              <div className={styles.content__photos}>
                
              </div>
              <div className={styles.content__description}>
                <div className={styles.price}>
                  Цены от 500 рублей
                </div>
                <div className={styles.description}>
                  <div className={styles.title}>
                    Описание
                  </div>
                  <div className={styles.text}>
                    Бар на каждый день в двухэтажном особняке XIX века в центре Екатеринбурга с большим выбором напитков: от пива и вина до коктейлей и дистиллятов.
                  </div>
                  <div className={styles.adress}>
                    <span>Адрес:</span> ул. Мира, 32
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.progressBar}></div>
          </div>
        </div>
        <div className={styles.upperbar}>
          <Link href="./registration">
            <button className={styles.upperbar__button}>регистрация</button>
          </Link>
          <Link href="./login">
            <button className={styles.upperbar__button}>вход</button>
          </Link>
          <div className={styles.upperbar__button}>о нас</div>
        </div>
      </main>
    </div>
  )
}
