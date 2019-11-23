import React from 'react'

// Servis for filtering base.

export const fetchRecipes = () => {
  return fetch('https://foodwaste-ecb78.firebaseio.com/recipes.json')
    .then(recipes => recipes.json())

    .then(object =>
      Object.keys(object).map(key => {
        object[key].id = key
        return object[key]
      })
    )
}
