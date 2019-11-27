import React from 'react'
import firebase from '../firebase'

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

export const prepareRecipes = data => {
  return Object.entries(data).map(arr => {
    console.log(arr)
    const [id, data] = arr
    return {
      ...data,
      id
    }
  })
}

export const watchRecipes = onSuccess => {
  return firebase
    .database()
    .ref('/recipes')
    .on('value', dataSnapshot => {
      const recipes = dataSnapshot.val()
      console.log(recipes)
      onSuccess(prepareRecipes(recipes))
    })
}
