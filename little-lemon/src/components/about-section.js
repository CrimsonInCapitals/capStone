import Section from "./section";
import { pr1 } from "./colors";

const AboutSection = ({color}) =>{
    return (
        <Section className='about' role='hero' color={pr1}>
            <main>
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem impsum</p>
                </div>
                <a href='#'>Make Booking</a>
            </main>
            <aside>
            <picture>
                <img src={require('../img/4 (42).jpg')} alt='the little lemon resturant from outside'/>
            </picture>
            <picture>
                <img src={require('../img/4 (42).jpg')} alt='co owners mike and rob'/>
            </picture>
            </aside>
        </Section>
     );
  }
  export default AboutSection;