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
  const [sponsors, setSponsors] = useState<any>({
    regular: {
      column: 0,
      data: []
    },
    premium: {
      column: 0,
      data: []
    }
  });

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
      if (media) return;
      const _sponsors = sponsorResponse.filter((sponsor: any) => !sponsor.premium);
      const _sponsors_p = sponsorResponse.filter((sponsor: any) => sponsor.premium);

      setSponsors({
        regular: {
          column: _sponsors.length >= 5 ? 5 : _sponsors.length,
          data: _sponsors,
        },
        premium: {
          column: _sponsors_p.length >= 5 ? 5 : _sponsors_p.length,
          data: _sponsors_p
        }
      });
    }).catch(() => {

    }).finally(() => {
      // setLoading(false);
    });
  }, []);

  useEffect(() => {
    console.log(sponsors);
  }, [sponsors]);


  return (
    <article className={styles.sponsors}>
      <h4>{media ? 'MEDIA PARTNER' : 'SPONSOR'}</h4>
      {
        !media
          ? <div className={styles.sponsorsContainer_P} style={{ gridTemplateColumns: 'auto '.repeat(sponsors.premium.column) }}>
            {
              sponsors.premium.data.map((sponsor: Sponsor) => {
                return <SponsorItem key={sponsor.name} sponsor={sponsor} premium={true} />
              })
            }
          </div>
          : null
      }
      <div className={styles.sponsorsContainer} style={{ gridTemplateColumns: 'auto '.repeat(sponsors.regular.column) }}>
        {
          sponsors.regular.data.map((sponsor: Sponsor) => {
            return <SponsorItem key={sponsor.name} sponsor={sponsor} />
          })
        }
      </div>
    </article>
  );
}