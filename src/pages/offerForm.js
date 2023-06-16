import Head from 'next/head'
import styles from './offerForm.module.scss'
import Link from 'next/link'
import { db } from "../../firebaseConfig";
import "firebase/compat/firestore";

export function Button(props) {
  return <button className={`${styles.button}
  `}>{props.caption}</button>
}

export default function Home() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const category = form.category.value;
    const name = form.name.value;
    const adress = form.adress.value;
    const comment = form.comment.value;
    try {
      const collectionRef = db.collection('offers');
      await collectionRef.add({
        category,
        name,
        adress,
        comment
      });
      form.reset();
      alert('Форма успешно отправлена!');
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
            <title>Форма для предложений</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <main>
          <div className={styles.offerFormPage}>
            <Link href="./">
              <div className={styles.button__back}>
                <Button caption='Назад'></Button>
              </div>             
            </Link>
            <div className={styles.offerFormPage__title}>
              Underground
            </div>
            <form onSubmit={handleSubmit}>
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