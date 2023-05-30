import Head from 'next/head'
import styles from './index.module.scss'
import React, { useState, useEffect } from 'react'; 
import Link from 'next/link';

const leftbars = [
  { id: '1', name: 'Шувакиш', price: '100р.', description: 'Описание Шувакиш', address: 'ул. Шувакиша, 1', isOpened: false},
  { id: '2', name: 'Ельцин Центр', price: '200р.', description: 'Описание Ельцин Центр', address: 'ул. Ельцина, 2', isOpened: false }
];//

const data = [
  { id: '6', name: 'Ельцин Центр', top: '18%', left: '57%', rubricId: '6', price: '100р.', description: 'Описание Шувакиш', address: 'ул. Шувакиша, 1', isOpened: false },
  { id: '4', name: 'Шалом Шанхай', top: '35%', left: '61%', rubricId: '4' },
  { id: '5', name: 'Шурум Бурум', top: '38.8%', left: '60.2%', rubricId: '5' },
  { id: '5', name: 'Gogo Studio', top: '45.7%', left: '59.3%', rubricId: '5' },
  { id: '4', name: 'Самоцвет', top: '53.4%', left: '58.5%', rubricId: '4' },
  { id: '2', name: 'Фабрика', top: '63.7%', left: '52.7%', rubricId: '2' },
  { id: '3', name: 'Юнион', top: '55.8%', left: '62%', rubricId: '3' },
  { id: '6', name: 'Музей ИЗО', top: '59%', left: '60%', rubricId: '6' },
  { id: '1', name: 'Jackie', top: '67%', left: '63%', rubricId: '1' },
  { id: '5', name: 'Urals', top: '73.5%', left: '64%', rubricId: '5' },
  { id: '7', name: 'Сияние', top: '80%', left: '66%', rubricId: '7' },
  { id: '6', name: 'Белая Галерея', top: '85.5%', left: '65.8%', rubricId: '6' },
  { id: '4', name: 'Географ', top: '71.5%', left: '70.5%', rubricId: '4' },
  { id: '7', name: 'Киноклубы', top: '59%', left: '74.5%', rubricId: '7' },
  { id: '8', name: 'Мы тут', top: '59%', left: '75.2%', rubricId: '8' },
  { id: '4', name: 'Ставников', top: '53%', left: '72.8%', rubricId: '4' },
  { id: '4', name: 'New Bar', top: '48.5%', left: '62.5%', rubricId: '4' },
  { id: '4', name: 'Syndrome Bar', top: '44.7%', left: '64%', rubricId: '4' },
  { id: '4', name: 'Мизантроп', top: '51%', left: '65.1%', rubricId: '4' },
  { id: '8', name: 'Музыкант 1', top: '43%', left: '67.3%', rubricId: '8' },
  { id: '8', name: 'Музыкант 2', top: '38.5%', left: '68.5%', rubricId: '8' },
  { id: '8', name: 'Музыкант 3', top: '34.5%', left: '67.7%', rubricId: '8' },
  { id: '6', name: 'Провинциальные танцы', top: '33.5%', left: '71.8%', rubricId: '6' },
  { id: '7', name: 'NEORASUM', top: '32.2%', left: '76.8%', rubricId: '7' },
  { id: '4', name: 'Мелодия', top: '26.5%', left: '79.3%', rubricId: '4' },
  { id: '7', name: 'Диалог', top: '23.5%', left: '76%', rubricId: '7' },
  { id: '8', name: 'Музыкант 4', top: '16%', left: '71.3%', rubricId: '8' },
  { id: '2', name: 'Креативный Кластер', top: '34.8%', left: '83.5%', rubricId: '2' },
  { id: '6', name: 'Галерея ПоЛе', top: '37.8%', left: '83%', rubricId: '6'},
  { id: '6', name: 'Титры', top: '40%', left: '81.6%', rubricId: '6'},
  { id: '6', name: 'Театр Игра', top: '8%', left: '81.7%', type: 'offTheMap', rubricId: '6'},
  { id: '7', name: 'Касабланка', top: '16%', left: '93.1%', type: 'offTheMap', rubricId: '7'},
  { id: '6', name: 'ЦСД Саманта', top: '39.5%', left: '92.4%', type: 'offTheMap', rubricId: '6'},
  { id: '6', name: 'Подмостки', top: '92.5%', left: '80%', type: 'offTheMap', rubricId: '6'},
  { id: '5', name: 'Шувакиш', top: '17%', left: '56%', rubricId: '5', price: '100р.', description: 'Описание Шувакиш', address: 'ул. Шувакиша, 1', isOpened: false }
]

export function LeftBar(props) {
  const { price, description, address, name, isOpened } = props;
  //const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={`${styles.fullLeftbar} ${isOpened && styles.fullLeftbar_isOpened}`}>
      <div className={`${styles.leftbar} ${isOpened && styles.leftbar_isOpened}`}>
        <Link href="./offerForm">
          <button className={styles.addButton}>+</button>
        </Link>
        <div className={styles.leftbar__statusButton}>
          <StatusButton></StatusButton>
        </div>
        <div className={`${styles.leftbar__content} ${isOpened && styles.leftbar__content_isOpened}`}>
          <div className={`${styles.content__mapButton} ${isOpened && styles.content__mapButton_isOpened}`} ></div>
          <div className={`${styles.content__title} ${isOpened && styles.content__title_isOpened}`}>{name}</div>
          <div className={`${styles.content__photos} ${isOpened && styles.content__photos_isOpened}`}></div>
          <div className={`${styles.content__description} ${isOpened && styles.content__description_isOpened}`}>
            <div className={styles.price}>{price}</div>
            <div className={styles.description}>
              <div className={styles.title}>Описание</div>
              <div className={styles.text}>{description}</div>
              <div className={styles.adress}>
                <span>Адрес:</span> {address}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.progressBar}></div>
      </div>
    </div>
  );
}

// export function MakeLeftbar(props) {  
//   return (
//     <div>
//       {leftbars.map(leftbar => (
//         <LeftBar
//           key={leftbar.id}
//           name={leftbar.name}
//           price={leftbar.price}
//           description={leftbar.description}
//           address={leftbar.address}
//         ></LeftBar>
//       ))}
//     </div>
//   );
// }
export function MakeLeftbar(props) {
  const { isOpened } = props; 
  const leftBars = data.map((mark) => (
    <LeftBar
      key={mark.id}
      name={mark.name}
      description={mark.description}
      address={mark.address}
      price={mark.price}
      isOpened={isOpened[mark.name]}
    />
  ));
  return <>{leftBars}</>;
}

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
  const rubricIdNumber = props.rubricId ? parseInt(props.rubricId) : undefined;

  
  const handleClick = () => {
    setIsChecked(!isChecked);
    props.onMarkClick(props.name); 
  };

  return props.selectedRubrics.includes(rubricIdNumber) || props.selectedRubrics.length === 0 ? (
    <div
      className={`${styles.mark} ${isChecked && styles.mark_checked} ${
        props.type === "offTheMap" && styles.mark_offTheMap
      }`}
      style={{ top: props.top, left: props.left }}
      onClick={handleClick}
    ></div>
  ) : null;
}

export function Rubricator(props) {
  const [isOpened, setIsOpened] = useState({});
  const [isClicked, setIsClicked] = useState(false);
  const [selectedRubrics, setSelectedRubrics] = useState([]);
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
  
    const newSelectedRubrics = [...selectedRubrics];
    if (newOptions[index].isChecked) {
      newSelectedRubrics.push(index + 1);
    } else {
      const indexToRemove = newSelectedRubrics.indexOf(index + 1);
      newSelectedRubrics.splice(indexToRemove, 1);
    }
    setSelectedRubrics(newSelectedRubrics);
  };
  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };

  const handleMarkClick = (name) => {
    setIsOpened((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
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
            <MakeLeftbar data={data} isOpened={isOpened}></MakeLeftbar>
            {props.data.map((item) => (
              <Mark
                key={item.id}
                id={item.id}
                name={item.name}
                top={item.top}
                left={item.left}
                type={item.type}
                rubricId={item.rubricId}
                selectedRubrics={selectedRubrics}
                isOpened={isOpened[item.name]}
                onMarkClick={handleMarkClick}
              ></Mark>
            ))}
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
        <Rubricator data={data}></Rubricator>
        {/* <MakeLeftbar data={data}></MakeLeftbar> */}
        {/* <LeftBar></LeftBar> */}
        {/* <div className={styles.fullLeftbar}>
          <div className={styles.leftbar}>
            <Link href="./offerForm">
              <button className={styles.addButton}>+</button>
            </Link>
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
        </div> */}
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
