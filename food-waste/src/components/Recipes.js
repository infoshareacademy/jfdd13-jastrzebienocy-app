import uuid from 'uuid';
import RecipesToRender from './RecipesToRender';

// Recipes in general
const Recipes = [
	{
		name: 'Niesamowity pieczony kurczak',
		category: 'Włoska',
		description: 'Amazing roasted Chicken porcja na 4 osoby',
		products: 'Kurczak',
		cookingTime: '120 min',
		weight: 1.4 + 'kg',
		imageUrl: 'https://myfridgefood.com/media/8730/roastedchx.jpg',
		recipeUrl: 'https://myfridgefood.com/recipes/entree-chicken/amazing-roasted-chicken/',
		portions: 4
	},
	{
		name: 'Stek po Mongolsku',
		category: 'Azjatycka',
		description: 'Mogolski Stek porcja na 4 osoby',
		products: 'Wołowina',
		cookingTime: '30min',
		weight: 1 + 'kg',
		imageUrl: 'https://myfridgefood.com/recipes/entree-beef/amazing-mongolian-beef/'
	},
	{
		name: 'Jaja na Bekonie',
		category: 'Polska',
		description: 'Jajka w Bekonie porcja na  4 osoby',
		products: 'Jajka',
		cookingTime: '20min',
		weight: 0.5 + 'kg',
		imageUrl: 'https://myfridgefood.com/recipes/breakfast/bacon-wrapped-eggs/'
	},
	{
		name: 'Ciacha z Jabłkami w chrupiacej Skorupce',
		category: 'Włoska',
		description: 'Chrupiące ciastka z jabłkami',
		products: 'Śmietana',
		cookingTime: '35min',
		weight: 1.5 + 'kg',
		imageUrl: 'https://myfridgefood.com/recipes/dessert/apple-pie-crescent-wraps/'
	},
	{
		name: 'Nabiałowe Pomidory',
		category: 'Włoska',
		description: 'Pieczone pomidory z serem - porcja na 4 osoby',
		products: 'Pomidory',
		cookingTime: '10min',
		weight: 1.5 + 'kg',
		imageUrl: 'https://myfridgefood.com/recipes/salads-and-sides/baked-tomatoes-with-cheese/'
	},
	{
		name: 'Cebulka z Piekarnika',
		category: 'Polska',
		description: 'Pieczone krążki cebulowe porcja nz 2-4 osób',
		products: 'Cebula',
		cookingTime: '15min',
		weight: 0.5 + 'kg',
		imageUrl: 'https://myfridgefood.com/recipes/salads-and-sides/baked-onion-rings/'
	},
	{
		name: "Hamburger al'a Vegge",
		category: 'Polska',
		description: 'Serowy burger z Jabłkami porcja na 4ry osoby',
		products: 'Jabłka',
		cookingTime: '45min',
		weight: 1 + 'kg',
		imageUrl: '	https://myfridgefood.com/recipes/apple-recipe-contest/cheesy-turkey-burgers-with-apples/'
	},
	{
		name: 'Truskawki zamknięte w jogurcie',
		category: 'Polska',
		description: 'Jogurtowe Truskawki porcja na 2 osoby',
		products: 'Truskawki',
		cockingTime: '240min',
		weight: 1 + 'kg',
		imageUrl: 'https://myfridgefood.com/recipes/dessert/yogurt-strawberries/'
	}
];

Recipes.forEach((value) => {
	value.id = undefined;
	fetch('https://myfirstproject-b5855.firebaseio.com/recipe', {
		method: 'POST',
		body: JSON.stringify(value)
	});
});

export default Recipes;
