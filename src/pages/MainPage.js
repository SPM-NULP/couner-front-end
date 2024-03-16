import { Header } from '../components/Header/header';
import { Hero } from '../components/Hero/hero';
import { Footer } from '../components/Footer/footer';
import { Features } from '../components/Features/features'
import { FeaturesCards } from '../components/HowWeWork/howWeWork'
import { getUserData } from '../redux/user/user-operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styles from "../components/style";

export const MainPage = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  return (
    <div>
      <Header></Header>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <Features></Features>
      <FeaturesCards></FeaturesCards>
      <Footer></Footer>
    </div>
  );
};