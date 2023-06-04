'use client';

import Image from 'next/image';
import styles from './Contact.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

function ContactCard({ name, display, destination }: { name: string, display: string, destination: string }) {
  return (
    <motion.a initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.2 }} target="_blank" href={destination} className={styles.contactCard}>
      <div className={styles.logo}>
        <Image src="/whatsapp-logo.png" fill={true} alt="logo" />
      </div>
      <div className={styles.information}>
        <strong className={styles.name}>{name}</strong>
        <span className={styles.number}>{display}</span>
      </div>
    </motion.a>
  );
}

export default function Contact () {
  return (
    <main className={styles.main}>
      <article className={styles.contact}>
        <h1>Kontak Panitia</h1>
        <div className={styles.contactContainer}>
          <ContactCard name="Gusde" display="+62 817-7065-1488" destination="https://wa.me/+6281770651488" />
          <ContactCard name="Floria" display="+62 822-3609-5702" destination="https://wa.me/+6282236095702" />
          <ContactCard name="Wulan" display="+62 819-3534-6910" destination="https://wa.me/+6281935346910" />
        </div>
      </article>
    </main>
  );
}