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

//nie kasowac
export const getCategories = data => {
  // console.log(Object.entries(data).map(([id,item]) => item.category))

  const obj = {};
  data.map(v => obj[v.category.toLowerCase()] = (obj[v.category.toLowerCase()] || 0) + 1)
  console.log(obj)
  return obj

}

  // return Object.entries(data).map(([id,item]) => item.category)



