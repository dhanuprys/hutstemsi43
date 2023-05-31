'use client';

import styles from './TermsAndCondition.module.css';
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

const database = [
  {
    name: 'Lomba Dance (Persahabatan) Antar SMA/SMK Se-Kab. Buleleng',
    banner: '/lomba/dance.jpg',
    description: '',
    slug: 'lomba-dance',
  },
  {
    name: 'Latihan Bersama Pickleball (Persahabatan) Antar Guru Se-Buleleng',
    banner: '/lomba/pickleball.jpg',
    description: '',
    slug: 'lomba-dance-2',
  },
  {
    name: 'Lomba Memasak Antar Guru SMK Negeri 3 Singaraja',
    banner: '/lomba/cooking.jpg',
    description: '',
    slug: 'lomba-dance-2',
  },
  {
    name: 'Lomba Penjor Antar Jurusan SMK Negeri 3 Singaraja',
    banner: '/lomba/penjor.jpg',
    description: '',
    slug: 'lomba-dance-2',
  },
  {
    name: 'Lomba Karaoke Antar SMP Se-Kab. Buleleng',
    banner: '/lomba/karaoke.jpg',
    description: '',
    slug: 'lomba-dance-2',
  },
  {
    name: 'Lomba Futsal Antar Jurusan SMK Negeri 3 Singaraja',
    banner: '/lomba/futsal.jpg',
    description: '',
    slug: 'lomba-dance-2',
  },
  {
    name: 'Lomba Mobile Legends Antar Jurusan SMK Negeri 3 Singaraja',
    banner: '/lomba/ml.jpg',
    description: '',
    slug: 'lomba-dance-2',
  },

  {
    name: 'Lomba Tarik Tambang Antar Jurusan SMK Negeri 3 Singaraja',
    banner: '/lomba/tariktambang.jpg',
    description: '',
    slug: 'lomba-dance-2',
  },
  {
    name: 'Lomba Gerak Jalan Kocak dan Yel Antar Jurusan SMK Negeri 3 Singaraja',
    banner: '/lomba/gerakjalan.jpg',
    description: '',
    slug: 'lomba-dance-2',
  },
  {
    name: 'Lomba Pentas Seni Kreasi Antar Jurusan SMK Negeri 3 Singaraja',
    banner: '/event.jpg',
    description: '',
    slug: 'lomba-dance-2',
  },
  {
    name: 'Lomba Kreativitas Karya Wirausaha Jurusan SMK Negeri 3 Singaraja',
    banner: '/event.jpg',
    description: '',
    slug: 'lomba-dance-2',
  },
  {
    name: 'Lomba Expo Jurusan SMK Negeri 3 Singaraja',
    banner: '/event.jpg',
    description: '',
    slug: 'lomba-dance-2',
  },
  {
    name: 'Puncak Acara Perayaan HUT SMK',
    banner: '/event.jpg',
    description: '',
    slug: 'lomba-dance-2',
  },
];

function LombaCard({ name, slug, banner, description }: { name: string, slug: string, banner: string, description: string }) {
  const [ dropdownOpen, setDropdownOpen ] = useState(false);

  return (
    <section className={styles.card}>
      <div className={styles.outside} onClick={() => setDropdownOpen(!dropdownOpen)}>
        <div className={styles.titleContainer}><h5 className={styles.title}>{name}</h5></div>
        <div><KeyboardArrowDownIcon /></div>
      </div>
      <div className={styles.information} style={{ display: dropdownOpen ? 'flex' : 'none' }}>
        <div className={styles.banner}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`https://raw.githubusercontent.com/dhanuprys/hutstemsi43/main/public${banner}`} alt={name} />
        </div>
        <div className={styles.description}>
          { description === '' || description === null ? 'Deskripsi tidak disertakan.' : description }
          <button className={styles.downloadButton}>Download S&K</button>
        </div>
      </div>
    </section>
  );
}

export default function TermsAndCondition() {
  return (
    <main>
      <article className={styles.tac}>
        <h1>Syarat & Ketentuan Lomba</h1>
        <div className={styles.divider}>
          <div className={styles.cardContainer}>
          {
            database.map(lomba => {
              return <LombaCard key={lomba.name} {...lomba} />
            })
          }
          </div>
          <aside className={styles.preview}>

          </aside>
        </div>
      </article>
    </main>
  );
}