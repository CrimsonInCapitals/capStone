import './App.css';
import Section from './components/section';
function App() {
  return (
    <>
      <header>
        <nav>
          <picture>
          </picture>
          <menu>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order online</a></li>
            <li><a href="#">Log In</a></li>
          </menu>
        </nav>
      </header>
      <main>
        <Section color="blue">hello</Section>
        <section role='hero'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Lorem impsum</p>
            <a href='#'>Make Booking</a>
            <picture>
            </picture>
        </section>
        <section role='specials'>
            <h1>This Weeks Specials</h1>
            <article>
              <picture></picture>
              <h1>food name</h1>
              <dd>
              <dt>price</dt>
              <dt>description</dt>
              </dd>
              <a href="#">Order online</a>
            </article>
                <article>
              <picture></picture>
              <h1>food name</h1>
              <dd>
              <dt>price</dt>
              <dt>description</dt>
              </dd>
              <a href="#">Order online</a>
            </article>
                <article>
              <picture></picture>
              <h1>food name</h1>
              <dd>
              <dt>price</dt>
              <dt>description</dt>
              </dd>
              <a href="#">Order online</a>
            </article>
                <article>
              <picture></picture>
              <h1>food name</h1>
              <dd>
              <dt>price</dt>
              <dt>description</dt>
              </dd>
              <a href="#">Order online</a>
            </article>
        </section>
        <section role='testimonies'>
              <h1>Testimonials</h1>
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
        </section>
        <section role='about'>
           <h1>Litlle Lemon</h1>
           <h2>About</h2>
           <p>text</p>
           <div>
    <picture></picture>
      <picture></picture>
    </div>
        </section>
      </main>
      <footer>
          <picture>
          </picture>
          <nav>
          <h1>menu</h1>
          <menu>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order online</a></li>
            <li><a href="#">Log In</a></li>
          </menu>
        </nav>
           <h1>Contact Us</h1>
          <menu>
            <li><a href="#">Email</a></li>
            <li><a href="#">Phone</a></li>
            <li><a href="#">Address</a></li>
          </menu>
           <h1>Social Media</h1>
          <menu>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Tiktok</a></li>
          </menu>
      </footer>
    </>
  );
}

export default App;
