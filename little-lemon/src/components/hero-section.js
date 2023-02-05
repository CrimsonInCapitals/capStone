import Section from "./section";
import { pr1 } from "./colors";

const HeroSection = ({color}) =>{
    return (
        <Section className='hero' role='hero' color={pr1}>
            <main>
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem impsum</p>
                </div>
                <a href='#'>Make Booking</a>
            </main>
            <picture>
                <img src={require('../img/4 (42).jpg')} alt='the little lemon resturant from outside'/>
            </picture>
        </Section>
     );
  }
  export default HeroSection;