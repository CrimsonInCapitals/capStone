import Section from "./section";
import { pr1 } from "./colors";

const HeroSection = ({color}) =>{
    return (
        <Section className='hero' role='hero' color={pr1}>
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem impsum</p>
                <a href='#'>Make Booking</a>
            </div>
            <picture>
                <img src={require('../img/4 (42).jpg')}/>
            </picture>
        </Section>
     );
  }
  export default HeroSection;