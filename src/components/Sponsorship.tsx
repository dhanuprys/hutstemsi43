import Image from 'next/image';
import styles from './Sponsorship.module.css';

export default function Sponsorship() {
  return (
    <article className={styles.sponsors}>
        <h4>SPONSOR</h4>
        <div className={styles.sponsorsContainer}>
          <div className={styles.sponsorItem}>
            <Image src="/sponsor/gacoan.png" fill={true} alt="sponsor" />
          </div>
          <div className={styles.sponsorItem}>
            <Image src="/sponsor/gacoan.png" fill={true} alt="sponsor" />
          </div>
        </div>
    </article>
  );
}