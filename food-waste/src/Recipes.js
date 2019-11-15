import uuid from 'uuid'
import { kStringMaxLength } from 'buffer'


// Recipes in general
export const Recipes = [
    { 
        id: uuid.v4(),
        category: 'Włoska',
        description: 'BR-ETA Chicken porcja na 2 osoby',
        products: 'Kurczak',
        cockingTime: '40min',
        weight: 0.5 + 'kg',
        imageUrl: 'https://myfridgefood.com/recipes/entree-chicken/br-eta-chicken/'
    },
    {
        id: uuid.v4(),
        category: 'Azjatycka',
        description: 'Mogolski Stek porcja na 4 osoby',
        products: 'Wołowina',
        cockingTime: '30min',
        weight: 1 + 'kg',
        imageUrl: 'https://myfridgefood.com/recipes/entree-beef/amazing-mongolian-beef/'
    },
    {
        id: uuid.v4(),
        category: 'Polska',
        description: 'Jajka w Bekonie porcja na  4 osoby',
        products: 'Jajka',
        cockingTime: '20min',
        weight: 0.5 + 'kg',
        imageUrl: 'https://myfridgefood.com/recipes/breakfast/bacon-wrapped-eggs/'
    },
    {
        id: uuid.v4(),
        category: 'Włoska',
        description: 'Chrupiące ciastka z jabłkami',
        products: 'Śmietana',
        cockingTime: '35min',
        weight: 1.5 + 'kg',
        imageURL: 'https://myfridgefood.com/recipes/dessert/apple-pie-crescent-wraps/'
    },
    {
        id: uuid.v4(),
        category: 'Włoska',
        description: 'Pieczone pomidory z serem - porcja na 4 osoby',
        products: 'Pomidory',
        cockingTime: '10min',
        weight: 1.5 + 'kg',
        imageURL: 'https://myfridgefood.com/recipes/salads-and-sides/baked-tomatoes-with-cheese/'
    },
    {
        id: uuid.v4(),
        category: 'Polska',
        description: 'Pieczone krążki cebulowe porcja nz 2-4 osób',
        products: 'Cebula',
        cockingTime: '15min',
        weight: 0.5 + 'kg',
        imageURL: 'https://myfridgefood.com/recipes/salads-and-sides/baked-onion-rings/'
    },
    {
        id: uuid.v4(),
        category: 'Polska',
        description: 'Serowy burger z Jabłkami porcja na 4ry osoby',
        products: 'Jabłka',
        cockingTime: '45min',
        weight: 1 + 'kg',
        imageURL: '	https://myfridgefood.com/recipes/apple-recipe-contest/cheesy-turkey-burgers-with-apples/'
    },
    {
        id: uuid.v4(),
        category: 'Polska',
        description: 'Jogurtowe Truskawki porcja na 2 osoby',
        products: 'Truskawki',
        cockingTime: '240min',
        weight: 1 + 'kg',
        imageUrl: 'https://myfridgefood.com/recipes/dessert/yogurt-strawberries/'
    },
]


