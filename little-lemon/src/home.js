import './App.css';
// import { pr1,pr2,ac1,ac2 } from './components/colors';
import HeroSection from './components/hero-section';
import SpecialsSection from './components/specials-section';
import ReviewsSection from './components/reviews-section';
import AboutSection from './components/about-section';
import { SpecialsProvider } from './context/specials';
import { ReviewsProvider } from './context/reviews';

function Home() {
   return (
    <>
        <HeroSection/>
        <SpecialsProvider><SpecialsSection/></SpecialsProvider>
        <ReviewsProvider><ReviewsSection/></ReviewsProvider>
        <AboutSection/>
    </>
  );
}

export default Home;