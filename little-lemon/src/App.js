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
import {Link,Routes,Route} from 'react-router-dom'

function App() {
   return (
    <>
    <Menu color={ac1}>
      <li><Link to='/' href="#">Home</Link></li>
      <li><Link to='/' href="#">About</Link></li>
      <li><Link to='/' href="#">Menu</Link></li>
      <li><Link to='/' href="#">Reservations</Link></li>
      <li><Link to='/' href="#">Order online</Link></li>
      <li><Link to='/' href="#">Log In</Link></li>
    </Menu>

      <main>
        <Routes>
          
        </Routes>
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
