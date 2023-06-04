import Header from '../components/Header';
import LandingPage from '../components/LandingPage';
import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HUT STEMSI 43 | EUFORIA 43',
  openGraph: {
    title: 'HUT STEMSI 43 | EUFORIA 43',
    description: 'Meriahkan HUT STEMSI yang ke-43 dengan ikut berpartisipasi dalam lomba-lomba yang diselenggarakan',
    url: 'https://hutstemsi43.vercel.app',
    siteName: 'HUT STEMSI 43',
    images: [
      {
        url: 'https://hutstemsi43.vercel.app/logo.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://hutstemsi43.vercel.app/logo.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  }
};

export default function Home() {
  return (
    <>
      <Header current="home" />
      <LandingPage />
    </>
  )
}
