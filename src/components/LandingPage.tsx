'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from './LandingPage.module.css';
import { useEffect, useRef, useState } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Link from 'next/link';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Sponsorship = dynamic(() => import('./Sponsorship'));

export default function LandingPage() {
  const [pamhpletLoading, setPamhpletLoading] = useState(true);
  const [pamhpletDatabase, setPamphletDatabase] = useState<any>([]);
  const [showArrow, setShowArrow] = useState(true);
  const [cardHeight, setCardHeight] = useState(550);

  const bannerRef = useRef();

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

      setPamhpletLoading(false);
    }).catch(() => {

    }).finally(() => {
      // setLoading(false);
    });
  }, []);

  useEffect(() => {
    setCardHeight(bannerRef?.current!.clientHeight);
    
    const resizeEvent = () => {
      setCardHeight(bannerRef?.current!.clientHeight);
    }

    window.addEventListener('resize', resizeEvent);

    return () => {
      window.removeEventListener('resize', resizeEvent);
    };
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
              <li style={{ background: 'rgba(229, 152, 155, 1)' }}>Profil Pelajar Pancasila</li>
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
          <div className={styles.bannerCardContainer} ref={bannerRef}>
            {/* <div style={{ width: '100%', height: '100%', background: 'blue' }}></div> */}

            {
              pamhpletLoading
                ? 'Loading...'
                : <Slide prevArrow={<></>} nextArrow={<></>} duration={5000} canSwipe={false}>
                  {
                    pamhpletDatabase.map((pamphlet: any) => {
                      return (
                        <div key={pamphlet.name} className={styles.slideItem}>
                          {/* <div style={{ 'backgroundImage': `url(https://raw.githubusercontent.com/dhanuprys/hutstemsi43-metadata/main/assets${pamphlet.banner})`, 'backgroundSize': 'contain', backgroundPosition: 'center' }}></div> */}
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={`https://raw.githubusercontent.com/dhanuprys/hutstemsi43-metadata/main/assets${pamphlet.banner}`} alt="hello" style={{ maxHeight: cardHeight + 'px' }} />
                        </div>
                      );
                    })
                  }
                </Slide>
            }
          </div>
        </section>
      </article>
      <Sponsorship />
    </main>
  );
}