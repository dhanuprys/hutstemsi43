'use client';

import styles from './TermsAndCondition.module.css';
import Image from 'next/image';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import DownloadIcon from '@mui/icons-material/Download';
import { motion } from 'framer-motion';

type Lomba = {
  name: string,
  slug: string,
  banner: string,
  rulesFile: string,
  description: string
}

function LombaCard({ name, slug, banner, description, rulesFile, changePreview, setDropdown, dropdown }: Lomba & { changePreview: any, setDropdown: any, dropdown: boolean }) {
  const handleDropdown = () => {
    if (dropdown) {
      // Menutup dropdown
      setDropdown('');
      changePreview('');
    } else {
      // Membuka dropdown
      changePreview(rulesFile);
      setDropdown(slug);
    }
    // setDropdownOpen(!dropdownOpen);

    // changePreview(rulesFile);
  }

  return (
    <motion.section initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5 }} className={`${styles.card} ${dropdown ? styles.cardActive : ''} `}>
      <div className={styles.outside} onClick={handleDropdown}>
        <div className={styles.titleContainer}><h5 className={styles.title}>{name}</h5></div>
        <div>
          {
            dropdown
            ? <KeyboardArrowUpIcon />
            : <KeyboardArrowDownIcon />
          }
        </div>
      </div>
      <div className={styles.information} style={{ display: dropdown ? 'flex' : 'none' }}>
        <div className={styles.banner}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`https://raw.githubusercontent.com/dhanuprys/hutstemsi43-metadata/main/assets${banner}`} alt={name} />
        </div>
        <div className={styles.description}>
          { description === '' || description === null ? null : description }
          { 
            rulesFile === '' || rulesFile === null 
            ? <p>S&K tidak tersedia</p> 
            : <Link download={true} target="_blank" prefetch={false} href={`${rulesFile}`} className={styles.downloadButton}><DownloadIcon fontSize="small" /> Download S&K</Link>
          }
          {/* <Link href={`/sk/${slug}`} className={styles.previewButton}><DownloadIcon fontSize="small" /> Lihat S&K</Link> */}
        </div>
      </div>
    </motion.section>
  );
}

function PreviewNotAvailable() {
  return (
    <h1>Preview tidak tersedia</h1>
  );
}

export default function TermsAndCondition() {
  const [ database, setDatabase ] = useState([]);
  const [ isLoading, setLoading ] = useState(false);
  const [ previewURL, setPreviewURL ] = useState('');
  const [ activeDropdown, setActiveDropdown ] = useState();

  useEffect(() => {
    setLoading(true);

    fetch('https://raw.githubusercontent.com/dhanuprys/hutstemsi43-metadata/main/lomba.json').then(response => {
      if (response.status === 200) {
        return response.json();
      }

      throw new Error('Error');
    }).then(lomba => {
      setDatabase(lomba);
    }).catch(() => {
      
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    <main>
      <article className={styles.tac}>
        <h1>Syarat & Ketentuan Lomba</h1>
        <p style={{ color: 'grey' }}>Klik pada salah satu lomba di bawah untuk membuka syarat dan ketentuan</p>
        <div className={styles.divider}>
          <div className={styles.cardContainer}>
          {
            isLoading ? 'Loading...' : database.map((lomba: Lomba) => {
              return <LombaCard key={lomba.name} {...lomba} dropdown={activeDropdown === lomba.slug} setDropdown={setActiveDropdown} changePreview={setPreviewURL} />
            })
          }
          </div>
          <aside className={styles.preview}>
            {
              previewURL === '' || previewURL === null
              ? <PreviewNotAvailable /> 
              : <>
                <h5><Link href={previewURL}>{previewURL}</Link></h5>
                <object data={`${previewURL}`} type="application/pdf" style={{ width: '100%', height: '100%' }}>preview tidak tersedia</object>
              </>
            }
          </aside>
        </div>
      </article>
    </main>
  );
}