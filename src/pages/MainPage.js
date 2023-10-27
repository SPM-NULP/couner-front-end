import { Header } from '../components/Header/header';
import { Hero } from '../components/Hero/hero';
import { Footer } from '../components/Footer/footer';
import { Navigation } from '../components/Navigation/navigation';
import { About } from '../components/About/about';
import { Benefits } from '../components/Benefits/benefits';
import { Controller } from '../components/Controller/controller';
import { Info } from '../components/Info/info';

export const MainPage = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Benefits></Benefits>
      <Controller></Controller>
      <Info></Info>
      <Footer></Footer>
    </div>
  );
};