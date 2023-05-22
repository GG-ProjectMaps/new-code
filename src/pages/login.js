import Head from 'next/head'
import styles from './login.module.scss'
import Link from 'next/link'

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
          <div className={styles.loginPage}>
            <Link href="./registration">
              <div className={styles.button__registration}>
                <Button caption='Регистрация'></Button>
              </div>
            </Link>
            <div className={styles.loginPage__title}>
              Underground
            </div>
            <form action="process_login.php" method="post">
              <div className={styles.form}>
                <div className={styles.form__title}>Вход</div>
                <label for="email">Почта</label>
                <input type="email" id="email" name="email" required></input>
                <label for="password">Пароль</label>
                <input type="password" id="password" name="password" required></input>
                <Button type="submit" caption='Войти'></Button>
              </div>
            </form>
          </div>  
        </main>
      </div>
    )
  }