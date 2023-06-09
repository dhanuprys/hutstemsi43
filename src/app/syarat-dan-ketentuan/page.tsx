import dynamic from 'next/dynamic';
import Header from '@/components/Header';
// import TermsAndCondition from '@/components/TermsAndConditions';
import { Metadata } from 'next';

const TermsAndCondition = dynamic(() => import('@/components/TermsAndConditions'));

export const metadata: Metadata = {
  title: 'HUT STEMSI 43 | EUFORIA 43',
  openGraph: {
    title: 'HUT STEMSI 43 | EUFORIA 43',
    description: 'Berikut merupakan syarat & ketentuan lomba yang disediakan',
    url: 'https://hutstemsi43.vercel.app',
    siteName: 'HUT STEMSI 43',
    images: [
      {
        url: 'https://hutstemsi43.vercel.app/logo-hut.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://hutstemsi43.vercel.app/logo-hut.png',
        width: 1800,
        height: 1600,
        alt: 'HUT STEMSI 43',
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