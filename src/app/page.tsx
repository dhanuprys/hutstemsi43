import Header from '../components/Header';
import LandingPage from '../components/LandingPage';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Header current="home" />
      <LandingPage />
      <footer>

      </footer>
    </>
  )
}
