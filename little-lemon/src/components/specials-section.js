import HorizontalScroller from "./horizontal-scroller";
import Section from "./section";
import { useSpecialsContext } from "../context/specials";
import FoodArticle from "./food-article";
import { ac1 } from "./colors";
const SpecialsSection = ({color}) =>{
    const specials = useSpecialsContext();
    return (
      <Section color={color}>
        <h1>This Weeks Specials</h1>
        <HorizontalScroller>
            {specials.map((item) => (<FoodArticle key={item.id} foodItem={item} foodimg={item.getImageSrc()} color={ac1}/>))}
        </HorizontalScroller>
      </Section>
     );
  }
  export default SpecialsSection;