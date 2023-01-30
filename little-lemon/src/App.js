import './App.css';
import Section from './components/section';
import Menu from './components/menu'
import Footer from './components/footer';
import HorizontalScroller from './components/horizontal-scroller';
import FoodArticle from './components/food-article';
const specials = [
  {
    id: 1,
    img: '#',
    name: "foodName",
    price: '£**',
    discription: 'discription'
  },
  {
    id: 2,
    img: '#',
    name: "foodName",
    price: '£**',
    discription: 'discription'
  },
  {
    id: 3,
    img: '#',
    name: "foodName",
    price: '£**',
    discription: 'discription'
  },
  {
    id: 4,
    img: '#',
    name: "foodName",
    price: '£**',
    discription: 'discription'
  },
  {
    id: 5,
    img: '#',
    name: "foodName",
    price: '£**',
    discription: 'discription'
  }
];
function App() {
  const [pr1,pr2,se1,se2,ac1,ac2] =['#495E57', '#F4CE14','#EE9972','#FBDABB','#EDEFEE','#333333'];
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
        <Section role='hero' color={pr1}>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Lorem impsum</p>
            <a href='#'>Make Booking</a>
            <picture>
            </picture>
        </Section>
        <Section role='specials'color={'white'}>
            <h1>This Weeks Specials</h1>
            <HorizontalScroller>
              {specials.map((item) => (<FoodArticle key={item.id} foodItem={item} color={ac1}/>))}
            </HorizontalScroller>

        </Section>
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
