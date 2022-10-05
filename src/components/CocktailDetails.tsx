import React, { useEffect, useState } from "react";
import { Drink } from "../types/CocktailAPI.types";


const CocktailDetails = () => {
	const [drink, setDrink] = useState<Drink | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const rawCocktail = await fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12460');
      const json = await rawCocktail.json();

			let newJson = json.drinks[0];
			setDrink(newJson);
		}
		fetchData();
	}, [])
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
				{ingredients.map((element) => <li key={element}>{element}</li>)}
			</ul>

			<h2>Instructions</h2>
		</>
	)
}

export { CocktailDetails }
