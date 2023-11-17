import { Header } from '../components/Header/header';
// import Navigationbar from 'react-bootstrap/Navbar'
import { Hero } from '../components/Hero/hero';
// import {AccountBox} from '../components/Auth/index'
import { Footer } from '../components/Footer/footer';
// import {ModalAuth} from '../components/Auth/auth-modal'
// import { Navigation } from '../components/Navigation/navigation';
// import { About } from '../components/About/about';
// import { Benefits } from '../components/Benefits/benefits';
// import { Controller } from '../components/Controller/controller';
// import { Info } from '../components/Info/info';
// import {SignInSide} from '../components/Auth/login'


export const MainPage = () => {
  
  return (
    <div>
      {/* <Navigation/> */}
      {/* <SignInSide/> */}
      {/* <ModalAuth></ModalAuth> */}
      <Header></Header>
      {/* <AccountBox/> */}
      <Hero></Hero>
      {/* <About></About> */}
      {/* <Benefits></Benefits> */}
      {/* <Controller></Controller> */}
      {/* <Info></Info> */}
      <Footer></Footer>
    </div>
  );
};