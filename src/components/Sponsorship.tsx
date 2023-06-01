import { useState, useEffect } from 'react';
import styles from './Sponsorship.module.css';

type Sponsor = {
  banner: string,
  name: string
}

function SponsorItem({ banner, name }: Sponsor) {
  return (
    <div className={styles.sponsorItem}>
      {/* eslint-disable-next-line @next/next/no-img-element */ }
      <img src={`https://raw.githubusercontent.com/dhanuprys/hutstemsi43-metadata/main/assets/${banner}`} style={{ height: '100%', width: '100%' }} alt={name} />
    </div>
  );
}

export default function Sponsorship() {
  const [ sponsors, setSponsors ] = useState([]);

  useEffect(() => {
    // setLoading(true);

    fetch('https://raw.githubusercontent.com/dhanuprys/hutstemsi43-metadata/main/sponsors.json').then(response => {
      if (response.status === 200) {
        return response.json();
      }

      throw new Error('Error');
    }).then(sponsorResponse => {
      setSponsors(sponsorResponse)
    }).catch(() => {
      
    }).finally(() => {
      // setLoading(false);
    });
  }, []);
  

  return (
    <article className={styles.sponsors}>
        <h4>SPONSOR</h4>
        <div className={styles.sponsorsContainer}>
          {
            sponsors.map((sponsor: Sponsor) => {
              return <SponsorItem key={sponsor.name} {...sponsor} />
            })
          }
        </div>
    </article>
  );
}