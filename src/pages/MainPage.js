import { Header } from '../components/Header/header';
import { Hero } from '../components/Hero/hero';
import { Footer } from '../components/Footer/footer';
import {Features} from '../components/Features/features'
import { AboutUs } from "../components/AboutUs/aboutUs";

import styles from "../components/style";

export const MainPage = () => {
  
  return (
    <div>
      <Header></Header>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <Features></Features>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
};