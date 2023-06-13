import Head from 'next/head'
import styles from './registration.module.scss'
import Link from 'next/link'
import { useState } from "react";
import { db } from "./firebaseConfig";
import "firebase/compat/firestore";

export function Button(props) {
  return <button className={`${styles.button}
  `}>{props.caption}</button>
}

export default function Home() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const nickname = form.fullname.value;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const collectionRef = db.collection('users');
      await collectionRef.add({
        nickname,
        email,
        password,
      });
      form.reset();
      alert('Регистрация успешно завершена!');
    } catch (error) {
      alert(`Ошибка: ${error.message}`);
    }
  };
    return (
      <div className={styles.container}>
        <Head>
            <meta charset="UTF-8"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Sedgwick+Ave+Display&display=swap" rel="stylesheet"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500&display=swap" rel="stylesheet"></link>
            <title>Регистрация</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <script src="https://www.gstatic.com/firebasejs/4.3.0/firebase.js"></script>
            <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>
        </Head>
        <main>
          <div className={styles.registrationPage}>
            <Link href="./">
              <div className={styles.button__back}>
                <Button caption='Назад'></Button>
              </div>            
            </Link>
            <div className={styles.registrationPage__title}>
              Underground
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.form}>
                <div className={styles.form__title}>Регистрация</div>
                <label for="fullname">Никнейм</label>
                <input type="text" id="fullname" name="fullname" required></input>
                <label for="email">Почта</label>
                <input type="email" id="email" name="email" required></input>
                <label for="password">Пароль</label>
                <input type="password" id="password" name="password" required></input>
                <Button type="submit" caption='Отправить'></Button>
              </div>
            </form>
            <Link href="./login">
              <div className={styles.button__login}>
                Вход
              </div>            
            </Link>
          </div>  
        </main>
      </div>
    )
  }
  