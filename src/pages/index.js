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

export function Mark(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return <div className={`
            ${styles.mark}
            ${isChecked && styles.mark_checked}
            ${(props.type==='offTheMap') && styles.mark_offTheMap}
          `}
          style={{ top: props.top, left: props.left }}
          onClick={handleClick}></div>
}

export function Rubricator(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [options, setOptions] = useState([
    { name: "кафе", isChecked: false },
    { name: "пространства", isChecked: false },
    { name: "клубы", isChecked: false },
    { name: "бары", isChecked: false },
    { name: "магазины", isChecked: false },
    { name: "театры и музеи", isChecked: false },
    { name: "киноклубы", isChecked: false },
    { name: "точки музыкантов", isChecked: false },
  ]);
  
  const handleOptionClick = (index) => {
    const newOptions = [...options];
    newOptions[index].isChecked = !newOptions[index].isChecked;
    setOptions(newOptions);
  };
  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };

  return <div className={styles.rubricator}>
            <div className={styles.rubricator__button} 
              onClick={handleButtonClick}></div>
            <div className={`
              ${styles.rubricator__filter} 
              ${isClicked && styles.rubricator__filter_clicked}`}>
              <div className={styles.filter__content}>
                {options.map((option, index) => (
                  <div 
                    key={option.name}
                    className={`
                      ${styles.content__option}
                      ${option.isChecked && styles.content__option_checked}`}
                    onClick={() => handleOptionClick(index)}
                  >
                    {option.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
}


export default function Home() {
  return (
    <><div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Sedgwick+Ave+Display&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500&display=swap" rel="stylesheet"></link>
        <title>Underground Map</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <main>
        <Mark id="Шувакиш" top='17%' left="56%"></Mark>
        <Mark id="Ельцин Центр" top='18%' left="57%"></Mark>
        <Mark id="Шалом Шанхай" top='35%' left="61%"></Mark>
        <Mark id="Шурум Бурум" top='38.8%' left="60.2%"></Mark>
        <Mark id="Gogo Studio" top='45.7%' left="59.3%"></Mark>
        <Mark id="Самоцвет" top='53.4%' left="58.5%"></Mark>
        <Mark id="Фабрика" top='63.7%' left="52.7%"></Mark>
        <Mark id="Юнион" top='55.8%' left="62%"></Mark>
        <Mark id="Музей ИЗО" top='59%' left="60%"></Mark>
        <Mark id="Jackie" top='67%' left="63%"></Mark>
        <Mark id="Urals" top='73.5%' left="64%"></Mark>
        <Mark id="Сияние" top='80%' left="66%"></Mark>
        <Mark id="Белая Галерея" top='85.5%' left="65.8%"></Mark>
        <Mark id="Географ" top='71.5%' left="70.5%"></Mark>
        <Mark id="Киноклубы" top='59%' left="74.5%"></Mark>
        <Mark id="Мы тут" top='59%' left="75.2%"></Mark>
        <Mark id="Ставников" top='53%' left="72.8%"></Mark>
        <Mark id="New Bar" top='48.5%' left="62.5%"></Mark>
        <Mark id="Syndrome Bar" top='44.7%' left="64%"></Mark>
        <Mark id="Мизантроп" top='51%' left="65.1%"></Mark>
        <Mark id="Музыкант 1" top='43%' left="67.3%"></Mark>
        <Mark id="Музыкант 2" top='38.5%' left="68.5%"></Mark>
        <Mark id="Музыкант 3" top='34.5%' left="67.7%"></Mark>
        <Mark id="Провинциальные танцы" top='33.5%' left="71.8%"></Mark>
        <Mark id="NEORASUM" top='32.2%' left="76.8%"></Mark>
        <Mark id="Мелодия" top='26.5%' left="79.3%"></Mark>
        <Mark id="Диалог" top='23.5%' left="76%"></Mark>
        <Mark id="Музыкант 4" top='16%' left="71.3%"></Mark>
        <Mark id="Креативный Кластер" top='34.8%' left="83.5%"></Mark>
        <Mark id="Галерея ПоЛе" top='37.8%' left="83%"></Mark>
        <Mark id="Титры" top='40%' left="81.6%"></Mark>
        <Mark id="Театр Игра" top='8%' left="81.7%" type='offTheMap'></Mark>
        <Mark id="Касабланка" top='16%' left="93.1%" type='offTheMap'></Mark>
        <Mark id="ЦСД Саманта" top='39.5%' left="92.4%" type='offTheMap'></Mark>
        <Mark id="Подмостки" top='92.5%' left="80%" type='offTheMap'></Mark>
        <div className={styles.fullLeftbar}>
          <div className={styles.leftbar}>
          <Link href="./offerForm">
            <button className={styles.addButton}>+</button>
          </Link>
            <Rubricator>
              {/* <div className={styles.filter__content}>
                <div className={styles.content__option} onClick={handleOptionClick}>кафе</div>
                <div className={styles.content__option} onClick={handleOptionClick}>пространства</div>
                <div className={styles.content__option} onClick={handleOptionClick}>клубы</div>
                <div className={styles.content__option} onClick={handleOptionClick}>бары</div>
                <div className={styles.content__option} onClick={handleOptionClick}>магазины</div>
                <div className={styles.content__option} onClick={handleOptionClick}>театры и музеи</div>
                <div className={styles.content__option} onClick={handleOptionClick}>киноклубы</div>
                <div className={styles.content__option} onClick={handleOptionClick}>точки музыкантов</div>
              </div> */}
            </Rubricator>
            <div className={styles.leftbar__statusButton}>
              <StatusButton></StatusButton>
            </div>
            <div className={styles.leftbar__content}>
              <div className={styles.content__mapButton}></div>
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
          <div className={styles.upperbar__logo}>
            Underground map
          </div>
        </div>
      </main>
    </div></>
  )
}
