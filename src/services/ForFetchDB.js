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
      // console.log(recipes)
      onSuccess(prepareRecipes(recipes))
    })
}




export const watchUsers = onSuccess => {
  const userId = firebase.auth().currentUser.uid;
  console.log(userId)
  return firebase
    .database()
    .ref(`/users/${userId}`)
    .on('value', dataSnapshot => {
      const users = dataSnapshot.val()
      onSuccess((users))
    })
}

export const unwatchUsers = () => {
  return firebase
    .database()
    .ref('/users')
    .off()
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
// stopRecepies -> trzeba zaimplementowac!!!
// trzeba to zaimplementowac wszedzie


export const getCategories = data => {
  const obj = {};
  data.map(v => obj[v.category.toLowerCase()] = (obj[v.category.toLowerCase()] || 0) + 1)
  return obj
}

export const getCookingTime = data => {
  const obj = {};
  data.map(v => obj[v.cookingTime] = (obj[v.cookingTime] || 0) + 1)
  return obj
}


export const unwatchRecipes = () => {
  return firebase
    .database()
    .ref('/recipes')
    .off()
}
