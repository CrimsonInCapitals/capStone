import {createContext, useContext, useState} from "react";

const SpecialsContext = createContext(undefined);

export const SpecialsProvider = ({ children }) => {
  const [Specials] = useState([
    {
      id: 1,
      getImageSrc: () => require("../img/NDUJA.jpg"),
      name: "'NDUJA & CHEESE DOUGH BITES",
      price: '£7.95',
      discription: "Fiery Calabrian 'Nduja sausage meat, garlic and mozzarella baked into little dough bites served with 'Nduja ketchup for extra spice. Serves 2."
    },
    {
      id: 2,
      getImageSrc: () => require("../img/gb.jpg"),
      name: "FOLDED GARLIC BREAD WITH MOZZARELLA",
      price: '£6.95',
      discription: 'Add balsamic caramelised onions (vegan) (82 kcal) for £1.00.'
    },
    {
      id: 3,
      getImageSrc: () => require("../img/4 (42).jpg"),
      name: "foodName",
      price: '£**',
      discription: 'discription'
    },
    {
      id: 4,
      getImageSrc: () => require("../img/4 (42).jpg"),
      name: "foodName",
      price: '£**',
      discription: 'discription'
    },
    {
      id: 5,
      getImageSrc: () => require("../img/4 (42).jpg"),
      name: "foodName",
      price: '£**',
      discription: 'discription'
    }
])

  return (
    <SpecialsContext.Provider value={Specials}>
      {children}
    </SpecialsContext.Provider>
  );
};

export const useSpecialsContext = () => useContext(SpecialsContext);