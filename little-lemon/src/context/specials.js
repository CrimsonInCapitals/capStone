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
      getImageSrc: () => require("../img/cheesefon.jpg"),
      name: "NEW CHEESE FONDUE",
      price: '£7.50',
      discription: 'Rich cheese fondue of aged hard cheese, mascarpone and mozzarella, served with warm dough bites, perfect for dipping.'
    },
    {
      id: 4,
      getImageSrc: () => require("../img/pollo.png"),
      name: "POLLO E ROQUITO PEPEe",
      price: '£16.75',
      discription: 'Garlic chicken breast, Roquito pepper pearls, balsamic onions, crispy smoked prosciutto, mozzarella and rocket on a tomato base.'
    },
    {
      id: 5,
      getImageSrc: () => require("../img/asparigus.jpg"),
      name: "ASPARAGUS & PANCETTA CARBONARA FRILLY TAGLIATELLE",
      price: '£16.25',
      discription: 'Crispy pancetta and asparagus in a velvety mascarpone and cheese sauce, topped with crispy smoked prosciutto.'
    }
])

  return (
    <SpecialsContext.Provider value={Specials}>
      {children}
    </SpecialsContext.Provider>
  );
};

export const useSpecialsContext = () => useContext(SpecialsContext);