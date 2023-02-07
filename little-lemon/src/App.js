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
import Home from './home';

function App() {
   return (
    <>
    <Menu color={ac1}>
      <li><Link to='/' >Home</Link></li>
      <li><Link to='/about' >About</Link></li>
      <li><Link to='/menu' >Menu</Link></li>
      <li><Link to='/bookings' >Reservations</Link></li>
      <li><Link to='/order' >Order online</Link></li>
      <li><Link to='/log-in' >Log In</Link></li>
    </Menu>
    <main>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<Home/>}></Route>
      <Route path='/menu' element={<Home/>}></Route>
      <Route path='/bookings' element={<Home/>}></Route>
      <Route path='/order' element={<Home/>}></Route>
      <Route path='/log-in' element={<Home/>}></Route>
    </Routes>
    </main>

    <Footer color={pr2}/>
    </>
  );
}

export default App;
