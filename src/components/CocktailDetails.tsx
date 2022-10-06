import React, { useEffect, useState } from "react";
import { Drink } from "../shared/@types/CocktailAPI.types";
import { getDrink } from "../shared/api/services/getDrink";


const CocktailDetails = () => {

	const { drink } = getDrink('11001')

	console.log(drink);	
 
	let ingredients: string[] = [];
	
	// Tengo que usar esto para que no haya problemas de tipos 
	let key: keyof Drink;
	for (key in drink) {
		if (key.includes('Ingredient') && drink?.[key] !== null) {
			ingredients.push(drink?.[key]!);
		}
	}

	return (
		<>
			<h1>{drink?.strDrink}</h1>
			<img src={drink?.strDrinkThumb!} />

			<h2>Ingredients</h2>
			<ul>
				{/* De momento está el key hardcodeado */}
				{ingredients.map((ingredient) => 
					<div>
						<li key={ingredient}>{ingredient}</li>
						<img src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.toLocaleLowerCase()}-Small.png`} alt="" />
					</div>
				)}
			</ul>

			<h2>Instructions</h2>
			<p>{drink?.strInstructions}</p>
		</>
	)
}

export { CocktailDetails }
