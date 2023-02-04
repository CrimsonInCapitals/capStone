import {createContext, useContext, useState} from "react";

const SpecialsContext = createContext(undefined);

export const SpecialsProvider = ({ children }) => {
  const [Specials] = useState([
    {
      id: 1,
      getImageSrc: () => require("../img/4 (42).jpg"),
      name: "foodName",
      price: '£**',
      discription: 'discription'
    },
    {
      id: 2,
      getImageSrc: () => require("../img/4 (42).jpg"),
      name: "foodName",
      price: '£**',
      discription: 'discription'
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
    <SpecialsContext.Provider
    value={Specials}>

      hello
      {children}
    </SpecialsContext.Provider>
  );
};

export const useSpecialsContext = () => useContext(SpecialsContext);