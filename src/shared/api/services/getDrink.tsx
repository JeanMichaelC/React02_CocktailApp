import { useEffect, useState } from "react";
import { Drink } from "../../@types/CocktailAPI.types";
import { baseUrl } from "../Client"

function getDrink(drinkId: string) {
	const [drink, setDrink] = useState<Drink | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const rawFetch = await fetch(baseUrl + '/lookup.php?i=' + drinkId);
      const json = await rawFetch.json();

			let drinkObject: Drink = json.drinks[0];
			setDrink(drinkObject);
		}
		fetchData();
	}, []);

	return { drink }
}

export { getDrink }
