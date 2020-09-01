import React from "react";

const IngredientsList = (props) => {
  return (
    <ul>
      <div className="IngredientsList__Title">Ingredients</div>
      {props.Drink.strIngredient1 !== null? <li>{props.Drink.strIngredient1} {props.Drink.strMeasure1}</li> : null}
	  {props.Drink.strIngredient2 !== null? <li>{props.Drink.strIngredient2} {props.Drink.strMeasure1}</li> : null}
      {props.Drink.strIngredient3 !== null? <li>{props.Drink.strIngredient3} {props.Drink.strMeasure3}</li> : null}
      {props.Drink.strIngredient4 !== null? <li>{props.Drink.strIngredient4} {props.Drink.strMeasure4}</li> : null}
      {props.Drink.strIngredient5 !== null? <li>{props.Drink.strIngredient5} {props.Drink.strMeasure5}</li> : null}
      {props.Drink.strIngredient6 !== null? <li>{props.Drink.strIngredient6} {props.Drink.strMeasure6}</li> : null}
      {props.Drink.strIngredient7 !== null? <li>{props.Drink.strIngredient7} {props.Drink.strMeasure7}</li> : null}
      {props.Drink.strIngredient8 !== null? <li>{props.Drink.strIngredient8} {props.Drink.strMeasure8}</li> : null}
      {props.Drink.strIngredient9 !== null? <li>{props.Drink.strIngredient9} {props.Drink.strMeasure9}</li> : null}
      {props.Drink.strIngredient10 !== null? <li>{props.Drink.strIngredient10} {props.Drink.strMeasure10}</li> : null}
      {props.Drink.strIngredient11 !== null? <li>{props.Drink.strIngredient11} {props.Drink.strMeasure11}</li> : null}
      {props.Drink.strIngredient12 !== null? <li>{props.Drink.strIngredient12} {props.Drink.strMeasure12}</li> : null}
      {props.Drink.strIngredient13 !== null? <li>{props.Drink.strIngredient13} {props.Drink.strMeasure13}</li> : null}
	  {props.Drink.strIngredient14 !== null? <li>{props.Drink.strIngredient14} {props.Drink.strMeasure14}</li> : null}
      {props.Drink.strIngredient15 !== null? <li>{props.Drink.strIngredient15} {props.Drink.strMeasure15}</li> : null}
    </ul>
  );
};

export default IngredientsList;