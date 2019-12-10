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
      onSuccess(prepareRecipes(recipes))
    })
}

export const watchUsers = onSuccess => {
  const userId = firebase.auth().currentUser.uid;
<<<<<<< .merge_file_s6nKww

=======
>>>>>>> .merge_file_jgKrTz
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

export const watchFavs = onSuccess => {
  const userId = firebase.auth().currentUser.uid;
  return firebase
    .database()
    .ref(`/favourites/${userId}`)
    .on('value', dataSnapshot => {
      const favs = dataSnapshot.val()
      onSuccess((favs))
    })
}

export const unwatchFavs = () => {
  return firebase
    .database()
    .ref('/favourites')
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
// Get the person from DB
export const getUserProfile = onSuccess => {
  const userId = firebase.auth().currentUser.uid;
  const userProf = dataSnapShot => {
    const users = dataSnapShot.val()
    onSuccess(users || {})

  }
  const ref = firebase.database().ref(`/users/${userId}`)

  ref.on('value', userProf)

  return () => ref.off('value', userProf)
}


export const categories = data => {

  return Object.entries(data).map(item => item.category)
}


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