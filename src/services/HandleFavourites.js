import firebase from 'firebase'

export const handleFavoritesFirebase = async (recipeId, userId) => {
  console.log(userId, recipeId)
  const recipeRef = await firebase.database().ref(`/users/${userId}/favorites`)
  const dataSnapshot = await recipeRef.once('value')

  const recipes = dataSnapshot.val()

  if (typeof recipes === 'string') {
    const newRecipe = [recipeId]
    return recipeRef.set(newRecipe)
  }

  const alreadyExists = recipes.includes(recipeId)

  if (alreadyExists) {
    const newRecipes = recipes.filter(recipe => recipe !== recipeId)
    return recipeRef.set(newRecipes)
  } else {
    const newRecipes = [...recipes, recipeId]
    return recipeRef.set(newRecipes)
  }
}
