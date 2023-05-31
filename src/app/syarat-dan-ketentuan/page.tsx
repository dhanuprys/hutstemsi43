import Header from '@/components/Header';
import TermsAndCondition from '@/components/TermsAndConditions';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HUT STEMSI 43 | EUFORIA 43',
  openGraph: {
    title: 'HUT STEMSI 43 | EUFORIA 43',
    description: 'Berikut merupakan syarat & ketentuan lomba yang diselenggarakan',
    url: 'https://hutstemsi43.vercel.app/syarat-dan-ketentuan',
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

export default function Ketentuan({ params }: { params: { lomba: string } }) {
  return (
    <>
      <Header current="sk" />
      <TermsAndCondition />
    </>
  );
}