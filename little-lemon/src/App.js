import './App.css';
import { pr1,pr2,ac1,ac2 } from './components/colors';
import Menu from './components/menu'
import HeroSection from './components/hero-section';
import SpecialsSection from './components/specials-section';
import ReviewsSection from './components/reviews-section';
import AboutSection from './components/about-section';
import Footer from './components/footer';
import { SpecialsProvider } from './context/specials';
import { ReviewsProvider } from './context/reviews';
// import {Link,Routes,Route} from 'react-router-dom'

function App() {
   return (
    <>
    <Menu color={ac1}>
      <li><a to='/' href="#">Home</a></li>
      <li><a to='/' href="#">About</a></li>
      <li><a to='/' href="#">Menu</a></li>
      <li><a to='/' href="#">Reservations</a></li>
      <li><a to='/' href="#">Order online</a></li>
      <li><a to='/' href="#">Log In</a></li>
    </Menu>

      <main>
        <HeroSection color={pr1}/>
        <SpecialsProvider>
          <SpecialsSection color={'white'}/>
        </SpecialsProvider>
        <ReviewsProvider>
          <ReviewsSection/>
        </ReviewsProvider>
        <AboutSection/>
      </main>
      <Footer color={pr2}/>
    </>
  );
}

export default App;
