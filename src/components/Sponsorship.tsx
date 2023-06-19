import { useState, useEffect } from 'react';
import styles from './Sponsorship.module.css';

type Sponsor = {
  banner: string,
  name: string
}

function SponsorItem({ sponsor: { banner, name }, premium }: { premium?: boolean, sponsor: Sponsor }) {
  return (
    <div className={styles.sponsorItem}>
      <div style={{ height: premium ? '220%' : '120%', width: '100%' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`https://raw.githubusercontent.com/dhanuprys/hutstemsi43-metadata/main/assets/${banner}`} style={{ height: '100%', width: '100%', objectFit: 'contain' }} alt={name} />
      </div>
    </div>
  );
}

export default function Sponsorship({ media = false }: { media?: boolean }) {
  const [sponsors, setSponsors] = useState<any>([]);
  const [sponsors_p, setSponsors_p] = useState<any>([]);
  const [gridColumn, setGridColumn] = useState(0);
  const [gridColumn_p, setGridColumn_p] = useState(0);
  const API_URL = media
    ? 'https://raw.githubusercontent.com/dhanuprys/hutstemsi43-metadata/main/partners.json'
    : 'https://raw.githubusercontent.com/dhanuprys/hutstemsi43-metadata/main/sponsors.json'

  useEffect(() => {
    // setLoading(true);

    fetch(API_URL).then(response => {
      if (response.status === 200) {
        return response.json();
      }

      throw new Error('Error');
    }).then(sponsorResponse => {
      setSponsors(sponsorResponse.filter((sponsor: any) => !sponsor.premium));
      setSponsors_p(sponsorResponse.filter((sponsor: any) => sponsor.premium));

      if (sponsors.length >= 5) {
        setGridColumn(5);
      } else {
        setGridColumn(sponsors.length);
      }

      if (sponsors_p.length >= 5) {
        setGridColumn_p(5);
      } else {
        setGridColumn_p(sponsors_p.length);
      }
    }).catch(() => {

    }).finally(() => {
      // setLoading(false);
    });
  }, []);


  return (
    <article className={styles.sponsors}>
      <h4>{media ? 'MEDIA PARTNER' : 'SPONSOR'}</h4>
      {
        !media
          ? <div className={styles.sponsorsContainer_P}  style={{ gridTemplateColumns: 'auto '.repeat(gridColumn_p) }}>
            {
              sponsors_p.map((sponsor: Sponsor) => {
                return <SponsorItem key={sponsor.name} sponsor={sponsor} premium={true} />
              })
            }
          </div>
          : null
      }
      <div className={styles.sponsorsContainer} style={{ gridTemplateColumns: 'auto '.repeat(gridColumn) }}>
        {
          sponsors.map((sponsor: Sponsor) => {
            return <SponsorItem key={sponsor.name} sponsor={sponsor} />
          })
        }
      </div>
    </article>
  );
}