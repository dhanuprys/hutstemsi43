'use client';

import Image from 'next/image';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styles from './Header.module.css';
import { useState } from 'react';
import Link from 'next/link';

type Lomba = { name: string, file: string };

export default function Header({ current = 'home' }: { current: string }) {
  const [ dropdown, setDropdown ] = useState(false);
  const [ navigationOpen, setNavigationOpen ] = useState(false);

  const listLomba: Lomba[] = [
    {
      name: 'Lomba Dance (Persahabatan)',
      file: 'https://google.com'
    }
  ];

  return (
    <header className={`${styles.header} ${navigationOpen ? styles.active : null}`}>
        <div className={styles.mobile}>
          <div className={styles.logo}>
            <Image src="/logo.png" width="68" height="68" alt="logo" />
          </div>
          <div className={styles.hamburger}>
            <div onClick={() => setNavigationOpen(!navigationOpen)}>
              { navigationOpen ? <ClearOutlinedIcon /> : <MenuOutlinedIcon /> }
            </div>
          </div>
        </div>
        <nav className={`${styles.navigation} ${navigationOpen ? null : styles.hidden}`}>
          <ul>
            <li className={current === 'home' ? styles.current : ''}><Link href="/">Beranda</Link></li>
            <li className={current === 'sk' ? styles.current : ''}>
              <Link href="/syarat-dan-ketentuan">Syarat & Ketentuan</Link>
              {/* <div onClick={() => setDropdown(!dropdown)} style={{display: 'flex', alignItems: 'flex-start'}}>Syarat & Ketentuan <ArrowDropDownIcon /></div>
              <ul className={styles.floatable} style={{ display: dropdown ? 'flex' : 'none', transition: '300ms' }}>
                {
                  listLomba.map((lomba: Lomba, index) => {
                    return (
                      <li key={index}>{lomba.name}</li>
                    );
                  })
                }
              </ul> */}
            </li>
            <li className={current === 'contact' ? styles.current : ''}><Link href="/kontak-panitia">Kontak Panitia</Link></li>
          </ul>
        </nav>
      </header>
  );
}