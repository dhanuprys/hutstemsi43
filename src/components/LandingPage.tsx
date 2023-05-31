'use client';

import Image from 'next/image';
import styles from './LandingPage.module.css';
import { useEffect, useState } from 'react';
import Sponsorship from './Sponsorship';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function LandingPage() {
  const pamphletCount = 2;
  const [pamphletIndex, setPamphletIndex] = useState(0);
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    function scrolly() {
      if (window.scrollY > 30) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    }

    window.addEventListener('scroll', scrolly);

    return () => {
      window.removeEventListener('scroll', scrolly);
    };
  });

  useEffect(() => {
    let counter = setInterval(() => {
      // console.log('INT');
      // if (pamphletIndex >= pamphletCount-1) {
      //   setPamphletIndex(0);
      //   return;
      // }

      // setPamphletIndex(pamphletIndex+1);

      // return () => {
      //   clearInterval(counter);
      // };  
    }, 4000);

    // return () => {
    //   clearInterval(counter);
    // }
  });


  return (
    <main className={styles.main}>
      <article className={styles.landing}>
        {
          showArrow ? <>
            <div className={styles.goDown}>
              <div className={styles.circle}>
                <ArrowDownwardIcon />
              </div>
            </div>
          </> : null
        }
        <section className={styles.information}>
          <div>
            <h2 className={styles.title}>Meriahkan HUT STEMSI yang ke-43</h2>
            <strong>EUFORIA 43</strong>
            <ul className={styles.highlight}>
              <li style={{ background: 'rgba(229, 152, 155, 1)'}}>Profil Pelajar Pancasila</li>
              <li style={{ background: 'rgba(252, 191, 73, 1)' }}>Based Activity</li>
              <li style={{ background: 'rgba(0, 180, 216, 1)' }}>Enjoy For A New Life</li>
            </ul>
            <p className={styles.description}>
              Mari meriahkan HUT STEMSI Ke-43 dengan ikut berpartisipasi dalam setiap rangkaian acaranya. 
              Jadikan HUT-43 menjadi euforia bagi kita bersama
            </p>
            <div className={styles.buttonContainer}>
              <button className={styles.contactButton}><Image src="/whatsapp.png" width="25" height="25" alt="icon" />HUBUNGI PANITIA</button>
            </div>
          </div>
        </section>
        <div className={styles.pamfletText}>
          <h4>PAMFLET</h4>
        </div>
        <section className={styles.banner}>
          <div className={styles.bannerCardContainer}>
            <Image src={`/pamphlet/${String(pamphletIndex)}.jpg`} fill={true} alt="" />
          </div>
        </section>
      </article>
      <Sponsorship />
    </main>
  );
}