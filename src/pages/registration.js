import Head from 'next/head'
import styles from './registration.module.scss'

export{};

export default function Home() {
    return (
      <>
      <div className={styles.container}>
        <Head>
            <meta charset="UTF-8"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500&display=swap" rel="stylesheet"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500&display=swap" rel="stylesheet"></link>
            <title>Регистрация</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <main>
            <div className={styles.registrationPage}>Привет</div>
        </main>
      </div>
      </>
    )
  }
  