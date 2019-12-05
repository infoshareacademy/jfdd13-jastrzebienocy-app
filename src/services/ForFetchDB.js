import React from 'react'
import firebase from '../firebase'

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

// stopRecepies -> trzeba zaimplementowac!!!
// trzeba to zaimplementowac wszedzie


export const getCategories = data => {
  const obj = {};
  data.map(v => obj[v.category.toLowerCase()] = (obj[v.category.toLowerCase()] || 0) + 1)
  console.log(obj)
  return obj
}


export const getCookingTime = data => {
  const obj = {};
  data.map(v => obj[v.cookingTime] = (obj[v.cookingTime] || 0) + 1)
  console.log(obj)
  return obj
}





