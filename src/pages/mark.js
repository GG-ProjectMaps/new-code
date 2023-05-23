import Head from 'next/head'
import styles from './mark.module.scss'
import React, { useState } from 'react'; 

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
            onClick={handleClick}></div>
  }

export default function Home() {
    return (
      <><div className={styles.container}>
        <Head>
          <title>Underground Map</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <main>
            <div className={styles.markButton}>
                <Mark></Mark>
                
            </div>
            <div className={styles.markButton2}>
                <Mark type='offTheMap'></Mark>
            </div>
        </main>
      </div></>
    )
  }
  