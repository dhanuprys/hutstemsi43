import { useState, useEffect } from 'react';
import styles from './Sponsorship.module.css';

type Sponsor = {
  banner: string,
  name: string
}

function SponsorItem({ banner, name }: Sponsor) {
  return (
    <div className={styles.sponsorItem}>
      <div style={{ height: '120%', width: '100%' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`https://raw.githubusercontent.com/dhanuprys/hutstemsi43-metadata/main/assets/${banner}`} style={{ height: '100%', width: '100%', objectFit: 'contain' }} alt={name} />
      </div>
    </div>
  );
}

export default function Sponsorship() {
  const [sponsors, setSponsors] = useState([]);
  const [gridColumn, setGridColumn] = useState(0);

  useEffect(() => {
    // setLoading(true);

    fetch('https://raw.githubusercontent.com/dhanuprys/hutstemsi43-metadata/main/sponsors.json').then(response => {
      if (response.status === 200) {
        return response.json();
      }

      throw new Error('Error');
    }).then(sponsorResponse => {
      setSponsors(sponsorResponse);

      if (sponsorResponse.length >= 5) {
        setGridColumn(5);
      } else {
        setGridColumn(sponsorResponse.length);
      }
    }).catch(() => {

    }).finally(() => {
      // setLoading(false);
    });
  }, []);


  return (
    <article className={styles.sponsors}>
      <h4>SPONSOR</h4>
      <div>
        <div className={styles.sponsorsContainer} style={{ gridTemplateColumns: 'auto '.repeat(gridColumn) }}>
          {
            sponsors.map((sponsor: Sponsor) => {
              return <SponsorItem key={sponsor.name} {...sponsor} />
            })
          }
        </div>
        <div className={styles.sponsorsContainer} style={{ gridTemplateColumns: 'auto '.repeat(gridColumn) }}>
          {
            sponsors.map((sponsor: Sponsor) => {
              return <SponsorItem key={sponsor.name} {...sponsor} />
            })
          }
        </div>
      </div>
    </article>
  );
}