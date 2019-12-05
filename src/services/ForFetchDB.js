import React from 'react'
import firebase from '../firebase'

export const prepareRecipes = data => {
  return Object.entries(data).map(arr => {
    const [id, data] = arr
    return {
      ...data,
      id,
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
  const handleValue = dataSnapshot => {
    const favourites = dataSnapshot.val()
    onSuccess(favourites || {})
  }
  const ref = firebase.database().ref(`/favourites/${userId}`)

  ref.on('value', handleValue)

  return () => ref.off('value', handleValue)
}

//nie kasowac
export const categories = data => {

  console.log(Object.entries(data).map(([id, item]) => item.category))
  return Object.entries(data).map(item => item.category)
}