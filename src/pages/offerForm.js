import Head from 'next/head'
import styles from './offerForm.module.scss'

export function Button(props) {
  return <button className={`${styles.button}
  `}>{props.caption}</button>
}

export default function Home() {
    return (
      <div className={styles.container}>
        <Head>
            <meta charset="UTF-8"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Sedgwick+Ave+Display&display=swap" rel="stylesheet"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500&display=swap" rel="stylesheet"></link>
            <title>Регистрация</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <main>
          <div className={styles.offerFormPage}>
            <form action='http://localhost:3000/' className={styles.button__back}>
              <Button caption='Назад'></Button>
            </form>
            <div className={styles.offerFormPage__title}>
              Underground
            </div>
            <form action="process_offer.php" method="post">
              <div className={styles.form}>
                <div className={styles.form__title}>Форма для предложения нового места</div>
                <label for="category">Категория места</label>
                <input type="text" id="category" name="category" required></input>
                <label for="name">Название</label>
                <input type="text" id="name" name="name" required></input>
                <label for="adress">Адрес</label>
                <input type="text" id="adress" name="adress" required></input>
                <label for="comment">Ваш комментарий (не обязательно)</label>
                <input type="text" id="comment" name="comment"></input>
                <Button type="submit" caption='Отправить'></Button>
              </div>
            </form>
          </div>  
        </main>
      </div>
    )
  }