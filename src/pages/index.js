import Head from 'next/head'
import styles from './index.module.scss'
import React, { useState, useEffect } from 'react'; 
import Link from 'next/link';

const data = [
  { id: '6', name: 'Ельцин Центр', top: '18%', left: '57%', rubricId: '6', price: '100р.', description: 'Описание Шувакиш', address: 'ул. Шувакиша, 1', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor:bb23d1b482a0a14541a4df3f45563ab0e05a8c0dace906451c43bbb2f392797a&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>},
  { id: '4', name: 'Шалом Шанхай', top: '35%', left: '61%', rubricId: '4', price: 'Средний счет 600-900 руб.', description: 'Бар с приятным интерьером и большим выбором необычных напитков на основе джина. Приглашенные диджеи, джазовые дуэты, стендап-комики — и это далеко не все, кого можно услышать и увидеть в «Шалом Шанхай»', address: '8 Марта, 4', link: 'https://vk.com/shalomshanghai', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aac17410bb893438efb0e6b662d0935cec1151b05cdec2006df0adf8823c38ad9&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>},
  { id: '5', name: 'Шурум Бурум', top: '38.8%', left: '60.2%', rubricId: '5', price: '', description: 'Интеллигентная барахолка, экологический и эстетический проект, дающий вещам вторую жизнь. Магазин принимает одежду, книги, посуду, игрушки, любые бытовые мелочи, всё что ещё можно использовать по назначению', address: 'Володарского, 2', link: 'https://vk.com/shurum_ekb', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A425953d98298dce3678c26ed0dd09ee92467bbae9a789ad64214bf210650c5fa&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe> },
  { id: '5', name: 'Gogo Studio', top: '45.7%', left: '59.3%', rubricId: '5', price: '', description: 'Магазин одежды азиатских брендов по доступным ценам. Главные молодежные тренды прямиком из Южной Кореи', address: 'Вайнера, 10 (помещение 4, этаж 4)', link: 'https://vk.com/gogostudioo', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A2b985286f1cc5169516a29e13a9909892099125c5cf8af9ec58a646ecb52fd91&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>  },
  { id: '4', name: 'Самоцвет', top: '53.4%', left: '58.5%', rubricId: '4', price: 'Средний счет 400-700 руб.', description: 'Бар на каждый день в центре Екатеринбурга с большим выбором напитков: от пива и вина до коктейлей и дистиллятов. В течение недели в баре проходят вечеринки, концерты и другие развлекательные события', address: 'Малышева, 29А', link: 'https://vk.com/samocvetbar', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae5f4bda13903ba9c2fdfb8676cbedc33ad491d1110bd26f34876bf596a0eaae8&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe> },
  { id: '3', name: 'Фабрика', top: '63.7%', left: '52.7%', rubricId: '3', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9444b8e3afdc4a7c92fc4d8807d9899f07543e0921ca1bbe76878aca67fc1d33&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe> },
  { id: '3', name: 'Юнион', top: '55.8%', left: '62%', rubricId: '3', price: '', description: 'Площадка, где переплетаются различные формы современного искусства, которые гармонично вписываются в ночную жизнь', address: '8 Марта, 12А', link: 'https://linktr.ee/union.place', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A447a88ee9a843b16d799fb78d9e9f5455a9a08c72544b6286bf0c52aad7d8900&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe> },
  { id: '6', name: 'Музей ИЗО', top: '59%', left: '60%', rubricId: '6', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab7acf1c823a90ae559bc4d70da3b08ac5f5b0418f101bd82849182487d6552de&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe> },
  { id: '1', name: 'Jackie', top: '67%', left: '63%', rubricId: '1', price: 'Средний счет: 650 руб.', description: 'Самые популярные блюда китайской кухни: несколько видов лапши и риса, традиционные закуски, огромные порции острого и ароматного супа, а также яркие азиатские лимонады и холодные чаи', link: 'https://jackiebistro.ru', address: 'ТЦ “Гринвич”, Estory, 8 Марта, 46/ Малышева 24', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A2459cceb374027dc7f90e7f7c79b5f97dd2f39bcac37d26b58771d0508b6d9df&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe> },
  { id: '5', name: 'Urals', top: '91%', left: '54%', type: 'offTheMap', rubricId: '5', price: '', description: 'Бренд одежды родом из Екатеринбурга, вдохновленный местом, людьми и событиями', address: 'Куйбышева, 55', link: 'https://weareurals.ru/', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae022967fa7642c85bff859b186fb9a522df8faa81a5215bc84984e7821e98e51&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe> },
  { id: '4', name: 'Географ', top: '71.5%', left: '70.5%', rubricId: '4', price: 'Цена бокала пива 250 - 500 руб.', description: 'Бар для настоящих исследователей крафта в самом центре города. Еженедельное изменение ассортимента не оставит равнодушным истинных любителей пивных экспериментов', address: 'Куйбышева, 61', link: 'http://geograph.one', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor:6ab44197acf13f51a881fc33c9f3b25fd1c6f0665dbbdc63e6b28debb0f063bc&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe> },
  { id: '7', name: 'Киноклубы', top: '59%', left: '74.5%', rubricId: '7', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa53215272da79272154bb44d213e103e1130e36b6b9ebb85aa4afc0e5a1862cf&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe> },
  { id: '2', name: 'Мы тут', top: '59%', left: '75.2%', rubricId: '2', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Afefb82046d043d8c5605c0591eb2048e01a0a17defaf176ecc265f61dfcc44fe&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe> },
  { id: '4', name: 'Ставников', top: '53%', left: '72.8%', rubricId: '4', price: 'Средний счет 500-800 руб.', description: 'Рюмочная с необычной атмосферой и уютным интерьером. Есть летняя веранда, танцпол, DJ и живая музыка', address: 'Розы Люксембург, 14', link: 'https://vk.com/bar.stavnikov', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A7078037ce157a938567dbf98532a32591e6c54d97508d5230780591b1c7e36d7&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe> },
  { id: '4', name: 'New Bar', top: '48.5%', left: '62.5%', rubricId: '4', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9fea993d14e3009c291f7b8761005162a4eb1561d3f1e86bfb3d741781a07452&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe> },
  { id: '4', name: 'Syndrome Bar', top: '44.7%', left: '64%', rubricId: '4', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A1a792856df136564ff5058a4f1d1aaa34b379753cabb8f7527bba1328e5208e3&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe> },
  { id: '4', name: 'Мизантроп', top: '51%', left: '65.1%', rubricId: '4', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A3d6a95f663e28dbe47faefc185748ab05f5f8279991144aca85004845a0b8c44&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe> },
  { id: '8', name: 'Музыкант 2', top: '43%', left: '67.3%', rubricId: '8', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A7e9bbeb7e131530fa88b3e16b876046887eceb6a1c7b917dd95ed85a0d406c5a&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe> },
  { id: '8', name: 'Переход Цоя', top: '38.5%', left: '68.5%', rubricId: '8', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A5ef158354133e2bd912f3b0d7feba622b60898188543a36bf11dc3ba73f12d66&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe> },
  { id: '8', name: 'Музыкант 1', top: '34.5%', left: '67.7%', rubricId: '8', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa2deb43d58b9cd534f1d03388cad072ee695720e9b3f4bcfcbc6f7b5843c28fd&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe> },
  { id: '6', name: 'Провинциальные танцы', top: '33.5%', left: '71.8%', rubricId: '6', price: 'Билеты от 600 руб.', description: 'Екатеринбургский театр современной хореографии в Колизее', address: 'проспект Ленина, 43', link: 'https://provincialdances.ru', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A6f0df919787ee80f25f4ede1a8692414dd9d30e9997245e58f94e9644f20bec5&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe> },
  { id: '7', name: 'NEORASUM', top: '32.2%', left: '76.8%', rubricId: '7', isOpened: false, price: 'Вход свободный', description: 'NEORASUM начался как киноклуб, в котором показывают фильмы, соответствующее высоким запросам основателя и его окружения. Сейчас проводятся регулярные кинопоказы на факультете искусствоведения и культурологии УрГУ', address: 'Аудитория 418, Ленина, 51', link: 'https://vk.com/neorasum', map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aaf077987ad72ceac1392cec0aeac5e56c737b81faa9ee2fedacbebe5139c67d1&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe> },
  { id: '4', name: 'Мелодия', top: '26.5%', left: '79.3%', rubricId: '4', price: 'Средний счет 200-400 руб.', description: 'Небольшой бар музыкальный бар с наливками и настойками. Есть уютный летник, гудящий до утра в теплое время года, а меню обновляется каждый сезон и содержит около трех десятков наливок', address: 'Первомайская, 36', link: 'https://vk.com/melody_ekb', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab194c8adf96ba67e6aa63f6ca5e7852868df659ce425621d185d27f4b4cdbd8c&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe> },
  { id: '7', name: 'Диалог', top: '23.5%', left: '76%', rubricId: '7', isOpened: false, price: 'Вход свободный', description: 'Уральский Киноклуб «Диалог» — это оффлайн собрания, где смотрят и обсуждают кино. Полноценное обсуждение, психологические разборы и жаркие дискуссии', address: 'Тургенева, 22 (Антикафе «Коммуникатор»)', link: 'https://vk.com/cinemaclubektb', map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9100486f8f50ad95a44c54e8e1ce59dbf965f90c8b4c3866305d52ac431eb04c&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe> },
  { id: '8', name: 'Музыкант 3', top: '16%', left: '71.3%', rubricId: '8', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A3502878fe5588a00aee91e97ff8059f707e9bb247a5ff6be79f43ee41f6f225f&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe> },
  { id: '2', name: 'Л52', top: '34.8%', left: '83.5%', rubricId: '2', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A178cd636ed53185849cc4ec22f04e7b65eff4114fcbf3940d1cb22e7cecddc6b&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe> },
  { id: '2', name: 'Титры', top: '40%', left: '81.6%', rubricId: '2', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A0bc5c61c9966d43ff6c66a9f6f25d7491851cfd5b5063ec3cd800e04ce2441ee&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>},
  { id: '6', name: 'Театр Игра', top: '8%', left: '81.7%', type: 'offTheMap', rubricId: '6', price: '', description: 'Молодые люди с Уралмаша. Современная и авторская драматургия. В театре смешанный актерский состав 5 педагогов и 100 подростков окраин Екатеринбурга', address: 'Центр культуры "Эльмаш", Старых Большевиков, 22, Школа №22, Красных Партизан, 4', link: 'https://teatrigra.com/', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af6e2dbd0ca5b40ca4f4a663e8869fd89102d546325ab6185edad33589cd5b062&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>},
  { id: '7', name: 'Касабланка', top: '16%', left: '93.1%', type: 'offTheMap', rubricId: '7', price: 'Вход свободный', description: 'Открытое культурное пространство, созданное для людей, которым интересно старое доброе кино, собираться вместе, смотреть фильмы, практически не демонстрируемые по телевизору и в кинотеатрах', address: 'Студенческая, 3', link: 'http://цкурал.екатеринбург.рф', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A082703349c38555c937d6ec223304ab8038acc6d04669fa2162554757b719e31&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>},
  { id: '6', name: 'ЦСД', top: '39.5%', left: '92.4%', type: 'offTheMap', rubricId: '6', price: 'Билеты от 600 руб. + бесплатные показы', description: 'Центр Современной Драматургии — это новый формат театра. ЦСД — площадка для экспериментов, где нет правил и цензуры. Это театр, который создают молодые уральские режиссеры, драматурги, актеры, музыканты и художники', address: 'Малышева 145Аб лит. Ф', link: 'https://uralcsd.ru', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Abb73b470a334866b91c154c1780c77a77f16ffa24add32d70173e8f71c0f00a0&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>},
  { id: '6', name: 'Подмостки', top: '92.5%', left: '80%', type: 'offTheMap', rubricId: '6', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A13ee8b4dd1396c12e46835b8b11904a2d39d0f8e7a8cf8335d76bb8f8cd425bd&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>},
  { id: '5', name: 'Шувакиш', top: '17%', left: '56%', rubricId: '5', price: '', description: 'Винтажный секонд-хенд с одеждой в стиле 80 – 90х годов. В «Шувакише» можно найти как вещи, привезенные из Европы, так и те, которые екатеринбуржцы нашли на бабушкиных антресолях', address: 'Бориса Ельцина, 3 (этаж 2)', link: 'https://vk.com/shoovashoova', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A031e3c8f19d798a6c7fcfeaddb405412cef712e00c346e62373c5d2dd4ce3994&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe> },
  { id: '2', name: 'Laboratory', top: '33.3%', left: '75.4%', rubricId: '2', isOpened: false },
  { id: '7', name: 'Свердловский фильмофонд', top: '18.7%', left: '91%', type: 'offTheMap', rubricId: '7', price: 'Стандартный билет 80 руб.', description: 'Прокат нетривиального кино, которое не мелькает на каждом экране города. Огромная коллекция лент, в том числе редких и плёночных, с возможностью их просмотра в уютном зале. Киноклубы и творческие встречи', address: 'Блюхера, 4', link: 'https://filmofond.ru', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9a71f6d591c1be248cc7b93f5716e144078edc5d3a3bf3517a6fde1d988c0c68&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe> },
  { id: '6', name: 'Ural Vision Gallery', top: '36.5%', left: '50.5%', rubricId: '6', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A2ffc36ec6976c70402149bac1ea6647cd951f0017e91cb974f039ce6b18003ff&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>},
  { id: '6', name: 'Музей андеграунда', top: '56.5%', left: '66.5%', rubricId: '6', price: 'Входной билет 300 руб., льготный 150 руб.', description: 'Музей Андеграунда — это единственный на Урале Музей с уникальной коллекцией андеграундного искусства! В музейной экспозиции представлено более 1000 произведений мастеров советского художественного андеграунда', address: 'Добролюбова, 4', link: 'https://ugmuseum-ekb.ru', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab67448e7c92a3b05490aef65b8dd0c2995d23110613c960eff393b04f6951779&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>},
  { id: '6', name: 'Свободный театр им. Саманты Смит', top: '57%', left: '94.5%', type: 'offTheMap', rubricId: '6', isOpened: false, map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A771742340945bfce19302c6095b35b7d186523dab9e72f681676efc08519a0e4&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>}
]

export function LeftBar(props) {
  const { price, description, link, address, name, isOpened, map, setVisitedMarks} = props;
  const [isMapOpened, setIsMapOpened] = useState(false);
  const [isVisited, setIsVisited] = useState(false);
  const handleClick = () => {
    setIsVisited(!isVisited);
    setVisitedMarks(prevVisitedMarks => {
      if (isVisited) {
        return prevVisitedMarks.filter(markName => markName !== name);
      } else {
        return [...prevVisitedMarks, name];
      }
    });
  };

  const handleClickMapButton = () => {
    setIsMapOpened(!isMapOpened);
  };

  return (
    <div className={`${styles.fullLeftbar} ${isOpened && styles.fullLeftbar_isOpened}`}>
      <div className={`${styles.leftbar} ${isOpened && styles.leftbar_isOpened}`}>
        <Link href="./offerForm">
          <button className={styles.addButton}>+</button>
        </Link>
        <div className={`${styles.leftbar__statusButton} ${isOpened && styles.leftbar__statusButton_isOpened}`}>
          <StatusButton isVisited={isVisited}
      onClick={handleClick}></StatusButton>
        </div>
        <div className={`${styles.leftbar__content} ${isOpened && styles.leftbar__content_isOpened}`}>
          <div className={`${styles.content__mapButton} ${isOpened && styles.content__mapButton_isOpened}`} onClick={handleClickMapButton}></div>
          <div className={`${styles.content__title} ${isOpened && styles.content__title_isOpened}`}>{name}</div>
          <div className={`${styles.content__photos} ${isOpened && styles.content__photos_isOpened}`}>
            {isMapOpened ? (
                <div className={styles.content__map}>
                  {map}
                </div>
              ) : (
                <Slider></Slider>
              )}
          </div>
          <div className={`${styles.content__description} ${isOpened && styles.content__description_isOpened}`}>
            <div className={styles.price}>{price}</div>
            <div className={styles.description}>
              <div className={styles.title}>Описание</div>
              <div className={styles.text}>{description}</div>
              <div className={styles.link}><a href={link}>{link}</a></div>
              <div className={styles.address}>
                <span>Адрес:</span> {address}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MakeLeftbar(props) {
  const { isOpened, setVisitedMarks } = props; 

  const leftBars = data.map((mark) => (
    <LeftBar
      key={mark.id}
      name={mark.name}
      description={mark.description}
      link={mark.link}
      address={mark.address}
      price={mark.price}
      isOpened={isOpened[mark.name]}
      map={mark.map}
      setVisitedMarks={setVisitedMarks}
    />
  ));
  return <>{leftBars}</>;
}

export function StatusButton(props) {
  const { isVisited, onClick } = props;

  return <div className={`
            ${styles.statusButton}
            ${isVisited && styles.statusButton_checked}
          `}
          onClick={onClick}></div>
}

export function ProgressBar(props) {
  const { visitedMarks, totalMarks } = props;
  const percentComplete = (visitedMarks.length / totalMarks) * 100;

  return (
    <div className={styles.progressBar}>
      <div className={styles.progressBar__progress}
          style={{ width: percentComplete + "%" }}>
      </div>
    </div>
  );
}

export function Mark(props) {
  const [isChecked, setIsChecked] = useState(false);
  const rubricIdNumber = props.rubricId ? parseInt(props.rubricId) : undefined;
  const handleClick = () => {
    setIsChecked(!isChecked);
    props.onMarkClick(props.name); 
  };

  useEffect(() => {
    if (props.lastSelectedMark && props.lastSelectedMark !== props.name) {
      setIsChecked(false);
    }
  }, [props.lastSelectedMark, props.name]);

  const visited = props.visitedMarks.includes(props.name);

  return props.selectedRubrics.includes(rubricIdNumber) || props.selectedRubrics.length === 0 ? (
    <div
    className={`${styles.mark} ${
      isChecked && styles.mark_checked
    } ${!isChecked && visited && styles.mark_visited} ${
      props.type === "offTheMap" && styles.mark_offTheMap
    }`}
      style={{ top: props.top, left: props.left }}
      onClick={handleClick}
    ></div>
  ) : null;
}

export function Rubricator(props) {
  const [visitedMarks, setVisitedMarks] = useState([]);
  const [isOpened, setIsOpened] = useState({});
  const [isClicked, setIsClicked] = useState(false);
  const [selectedRubrics, setSelectedRubrics] = useState([]);
  const [options, setOptions] = useState([
    { name: "Кафе", isChecked: false },
    { name: "Пространства", isChecked: false },
    { name: "Клубы", isChecked: false },
    { name: "Бары", isChecked: false },
    { name: "Магазины", isChecked: false },
    { name: "Театры и музеи", isChecked: false },
    { name: "Киноклубы", isChecked: false },
    { name: "Точки музыкантов", isChecked: false },
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

  const [lastSelectedMark, setLastSelectedMark] = useState(null);

  const handleMarkClick = (name) => {
    setIsOpened((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));

    if (lastSelectedMark && lastSelectedMark !== name) {
      setIsOpened((prevState) => ({
        ...prevState,
        [lastSelectedMark]: false,
      }));
    }

    setLastSelectedMark(name);
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
            <MakeLeftbar data={data} isOpened={isOpened} setVisitedMarks={setVisitedMarks}></MakeLeftbar>
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
                map={item.map}
                onMarkClick={handleMarkClick}
                isChecked={item.isChecked}
                setIsChecked={item.setIsChecked}
                lastSelectedMark={lastSelectedMark}

                visitedMarks={visitedMarks}
              ></Mark>
            ))}
            <ProgressBar
              visitedMarks={visitedMarks}
              totalMarks={props.data.length}
            ></ProgressBar>
          </div>
}

export function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  const handleNextSlide = () => {
    setActiveSlide((activeSlide + 1) % 3);
  };

  useEffect(() => {
    const intervalId = setInterval(handleNextSlide, 5000);
    return () => clearInterval(intervalId);
  }, [activeSlide]);

  return (
    <div className={styles.slider}>
      <div className={styles.slider__slides}>
        <img
          src="https://webpulse.imgsmail.ru/imgpreview?key=pulse_cabinet-file-f6214867-540f-4c24-8ab0-ad327f92e982&mb=webpulse"
          alt="Slide 1"
          className={activeSlide === 0 ? styles.active : ""}
        ></img>
        <img
          src="https://wp-s.ru/wallpapers/1/42/515629262768626/seryj-britanskij-kot-otdyxaet.jpg"
          alt="Slide 2"
          className={activeSlide === 1 ? styles.active : ""}
        ></img>
        <img
          src="https://mobimg.b-cdn.net/v3/fetch/98/98a9415b30f3f7cf83f6b2ce6b8e8638.jpeg"
          alt="Slide 3"
          className={activeSlide === 2 ? styles.active : ""}
        ></img>
      </div>
      <div className={styles.slider__dots}>
        <div
          className={`${styles.slider__dot} ${
            activeSlide === 0 ? styles.active : ""
          }`}
          onClick={() => handleDotClick(0)}
        ></div>
        <div
          className={`${styles.slider__dot} ${
            activeSlide === 1 ? styles.active : ""
          }`}
          onClick={() => handleDotClick(1)}
        ></div>
        <div
          className={`${styles.slider__dot} ${
            activeSlide === 2 ? styles.active : ""
          }`}
          onClick={() => handleDotClick(2)}
        ></div>
      </div>
    </div>
  );
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
