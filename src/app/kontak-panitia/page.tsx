import Header from '@/components/Header';
import ContactPerson from '@/components/Contact';

export const metadata: Metadata = {
  title: 'HUT STEMSI 43 | EUFORIA 43',
  openGraph: {
    title: 'HUT STEMSI 43 | EUFORIA 43',
    description: 'Berikut merupakan daftar kontak yang dapat dihubungi',
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

export default function Contact() {
  return (
    <>
      <Header current="contact" />
      <ContactPerson />
    </>
  );
}