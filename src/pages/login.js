import Head from 'next/head'
import styles from './login.module.scss'
import Link from 'next/link'
import { db } from "../../firebaseConfig";

export function Button(props) {
  return <button className={`${styles.button}
  `}>{props.caption}</button>
}

export default function Home() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const collectionRef = db.collection('users');
      const userRef = collectionRef.where('email', '==', email).where('password', '==', password);
      const snapshot = await userRef.get();
      if (snapshot.empty) {
        alert('Неверный email или пароль');
      } else {
        form.reset();
        const user = snapshot.docs[0].data();
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('userDocId', snapshot.docs[0].id); 
        alert('Вход успешно выполнен!');
        window.location.href = './';
      }
    } catch (error) {
      alert(`Ошибка: ${error.message}`);
    }
  };
    return (
      <div className={styles.container}>
        <Head>
    
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Sedgwick+Ave+Display&display=swap" rel="stylesheet"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500&display=swap" rel="stylesheet"></link>
            <title>Вход</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <main>
          <div className={styles.loginPage}>
            <Link href="./index">
              <div className={styles.button__back}>
                <Button caption='Назад'></Button>
              </div>
            </Link>
            <div className={styles.loginPage__title}>
              Underground
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.form}>
                <div className={styles.form__title}>Вход</div>
                <label htmlFor="email">Почта</label>
                <input type="email" id="email" name="email" required></input>
                <label htmlFor="password">Пароль</label>
                <input type="password" id="password" name="password" required></input>
                <Button type="submit" caption='Войти'></Button>
              </div>
            </form>
            <Link href="./registration">
              <div className={styles.button__registration}>
                Регистрация
              </div>            
            </Link>
          </div>  
        </main>
      </div>
    )
  }