import React from 'react'
// import Recipes from '../components/Recipes'

export const getTheRecipes = () => {
  return (
    fetch('https://foodwaste-ecb78.firebaseio.com/recipes.json')
      .then(res => res.json())
      // Zamienione przez JK
      .then(object =>
        Object.keys(object).map(key => {
          object[key].id = key
          return object[key]
        })
      )
      // było lecz jest  zakomentowane
      // .then((obj) => Object.values(obj))
      .then(allRecipes => this.setState({ recipes: allRecipes }))
      // Dodane JK
      .then(data => console.log(this.state.recipes))
  )
}

// return fetch('https://foodwaste-ecb78.firebaseio.com/recipes.json').then(response => {
//   if (response.ok) {
//     return response;
//   }).then(data => {
//     return data.slice(0,6).map(recipe => {
//       return {
//         id: recipe.id,
//         name: recipe.name,
//         category: recipes.category,
//         description: recipes.description,
//         products: recipes.products,
//         cookingTime: recipes.cookingTime,
//         weight: recipes.weight,
//         imageUrl: recipes.imageUrl,
//         portions: recipes.portions
//       };
//     });
//   });
// };

//   fetch('https://foodwaste-ecb78.firebaseio.com/recipes.json')
//     .then(res => res.json())
//     // Zamienione przez JK
//     .then(object =>
//       Object.keys(object).map(key => {
//         object[key].id = key
//         return object[key]
//       })
//     )
//     // było lecz jest  zakomentowane
//     // .then((obj) => Object.values(obj))
//     .then(allRecipes => this.setState({ recipes: allRecipes }))
//     // Dodane JK
//     .then(data => console.log(this.state.recipes))
// }
