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

//nie kasowac
export const categories = data => {
  
  console.log(Object.entries(data).map(([id,item]) => item.category))
  return Object.entries(data).map(item => item.category)
}