import React from "react";

import classStyles from "./Burger.module.css";
import BurgerIngredient from "../Burger/BurgerIngredient/BurgerIngredient";

const Burger = props => {
  // Objects.keys gets the name from the ingredients prop, such as cheese,bacon, etc, which is stored into igkey
  const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    // [...Array(props.ingredients[igKey])] essentially creates empty arrays, but arrays that have a length of the value
    //that was in the object, such as the salad array having one element, but the cheese array having 2
    //from there its mapped, but we only care for the index as thats the only thing thats useful
    return [...Array(props.ingredients[igKey])].map((_, index) => {
      //from here we return a jsx element, creating a unique key and passing a type prop of igkey, which is still
      // a string of the ingredient from the first mapping
      return <BurgerIngredient key={igKey + index} type={igKey} />;
    });
  });

  // const transformedIngredients = [];

  // //const key in props.ingredients also works
  // for (const [key] of Object.entries(props.ingredients)) {
  //   // console.log(key) at this point, key represents the name of the objects such as bacon, cheese, etc
  //   // console.log(props.ingredients[key]) this returns the quantity of the object such as 1 bacon or 2 cheeses
  //   for (let i = 0; i < props.ingredients[key]; i++) {
  //     transformedIngredients.push(
  //       <BurgerIngredient key={key + i} type={key} />
  //     );
  //   }
  // }

  return (
    <div className={classStyles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
