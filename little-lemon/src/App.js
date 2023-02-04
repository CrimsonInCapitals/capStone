import './App.css';
import Section from './components/section';
import Menu from './components/menu'
import Footer from './components/footer';
import HorizontalScroller from './components/horizontal-scroller';
import FoodArticle from './components/food-article';
import { SpecialsProvider } from './context/specials';
import SpecialsSection from './components/specials-section';
import HeroSection from './components/hero-section';
import { pr1,pr2,ac1,ac2 } from './components/colors';

function App() {
   return (
    <>
    <Menu color={ac1}>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Menu</a></li>
      <li><a href="#">Reservations</a></li>
      <li><a href="#">Order online</a></li>
      <li><a href="#">Log In</a></li>
    </Menu>
      <main>
        <HeroSection color={pr1}/>
        <SpecialsProvider>
          <SpecialsSection color={'white'}/>
        </SpecialsProvider>
        <Section role='testimonies' color={ac1}>
              <h1>Testimonials</h1>
              <HorizontalScroller>
              <article>
              <div></div>
              <picture></picture>
              <h1>Reviewer name</h1>
              <p>comment</p>
            </article>
                  <article>
              <div></div>
              <picture></picture>
              <h1>Reviewer name</h1>
              <p>ycomment</p>
            </article>
                  <article>
              <div></div>
              <picture></picture>
              <h1>Reviewer name</h1>
              <p>ycomment</p>
            </article>
                  <article>
              <div></div>
              <picture></picture>
              <h1>Reviewer name</h1>
              <p>ycomment</p>
            </article>
              </HorizontalScroller>
        </Section>
        <Section role='about' color={ac2}>
           <h1>Litlle Lemon</h1>
           <h2>About</h2>
           <p>text</p>
           <div>
    <picture></picture>
      <picture></picture>
    </div>
        </Section>
      </main>
      <Footer color={pr2}/>
    </>
  );
}

export default App;
