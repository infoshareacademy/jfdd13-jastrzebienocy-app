import React from 'react'
import firebase from '../firebase'

export const prepareRecipes = data => {
  const favourites = getFavourites();
  console.log(favourites);
  return Object.entries(data).map(arr => {
    console.log(arr)
    const [id, data] = arr
    console.log(id, favourites)
    return {
      ...data,
      id,
      isFavorites: arr.includes(favourites.id)
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

export const getFavourites = onSuccess => {
  const userId = firebase.auth().currentUser.uid;
  return firebase.database().ref(`/users/${userId}/favorites`).on('value', dataSnapshot => {
    const favourites = dataSnapshot.val()
    console.log(favourites)
    // onSuccess(favourites)
  })
}

//nie kasowac
export const categories = data => {

  console.log(Object.entries(data).map(([id, item]) => item.category))
  return Object.entries(data).map(item => item.category)
}