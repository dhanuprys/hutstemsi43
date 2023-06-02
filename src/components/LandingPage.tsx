'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from './LandingPage.module.css';
import { useEffect, useState } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Link from 'next/link';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Sponsorship = dynamic(() => import('./Sponsorship'));

export default function LandingPage() {
  const [ pamhpletLoading, setPamhpletLoading ] = useState(true);
  const [ pamhpletDatabase, setPamphletDatabase ] = useState<any>([]);
  const [ pamphletCount, setPamphletCount ] = useState(0);
  const [ pamphletIndex, setPamphletIndex ] = useState(0);
  const [ showArrow, setShowArrow ] = useState(true);

  const slideBack = () => {
    if (pamphletIndex <= 0) {
      return setPamphletIndex(pamphletCount-1);
    }

    setPamphletIndex(pamphletIndex-1);
  };

  const slideForward = () => {
    if (pamphletIndex >= pamphletCount-1) {
      return setPamphletIndex(0);
    }

    setPamphletIndex(pamphletIndex+1);
  };

  useEffect(() => {
    function scrolly() {
      if (window.scrollY > 10) {
        if (showArrow) setShowArrow(false);
      } else {
        if (!showArrow) setShowArrow(true);
      }
    }

    window.addEventListener('scroll', scrolly);

    return () => {
      window.removeEventListener('scroll', scrolly);
    };
  });

  useEffect(() => {
    setPamhpletLoading(true);

    fetch('https://raw.githubusercontent.com/dhanuprys/hutstemsi43-metadata/main/pamhplets.json').then(response => {
      if (response.status === 200) {
        return response.json();
      }

      throw new Error('Error');
    }).then(pamhplets => {
      setPamphletDatabase(pamhplets);
      setPamphletCount(pamhplets.length);

      setPamhpletLoading(false);
    }).catch(() => {
      
    }).finally(() => {
      // setLoading(false);
    });
  }, []);

  // useEffect(() => {
  //   // console.log('register');

  //   const intervalId = setTimeout(() => {
  //     slideForward();
  //   }, 10000);

  //   return () => {
  //     clearTimeout(intervalId);
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [pamhpletDatabase, pamphletIndex]);

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
              <Link href="/kontak-panitia" className={styles.contactButton}><Image src="/whatsapp.png" width="25" height="25" alt="icon" />HUBUNGI PANITIA</Link>
            </div>
          </div>
        </section>
        <div className={styles.pamfletText}>
          <h4>PAMFLET</h4>
        </div>
        <section className={styles.banner}>
          <div className={styles.bannerCardContainer}>
            <div className={styles.bannerSlider}>
              <div className={styles.slideButton} onClick={slideBack}><KeyboardArrowLeftIcon /></div>
              <div className={styles.slideButton} onClick={slideForward}><KeyboardArrowRightIcon /></div>
            </div>
            <div className={styles.bannerCounter}>
              {
                pamhpletDatabase.map((_: any, index: number) => {
                  return <span key={index} className={`${styles.counterPoint} ${index === pamphletIndex ? styles.counterActive : ''}`}></span>
                })
              }
            </div>
            {
              pamhpletLoading ? 'Loading...'
                /* eslint-disable-next-line @next/next/no-img-element */
                : <img src={`https://raw.githubusercontent.com/dhanuprys/hutstemsi43-metadata/main/assets${pamhpletDatabase[pamphletIndex].banner}`} style={{ width: '100%', height: '100%' }} alt={pamhpletDatabase[pamphletIndex].name} />
            }
          </div>
        </section>
      </article>
      <Sponsorship />
    </main>
  );
}