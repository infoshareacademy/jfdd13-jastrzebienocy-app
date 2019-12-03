import firebase, { userId } from '../firebase'

export const handleFavoritesFirebase = async (recipeId, userId) => {
    console.log(userId, recipeId)
    const recipeRef = await firebase.database().ref(`/users/${userId}/favorites`) // setting user favourites path to recipeRef
    const dataSnapshot = await recipeRef.once('value') // setting value ov users recipes to datasnapshot

    const recipes = dataSnapshot.val() // getting values to recipes from base
    // setting vslues to new recipe if it exists
    if (typeof recipes === 'string') {
        const newRecipe = [recipeId]
        return recipeRef.set(newRecipe)
    }
    // getting specified recipe if it is in base
    const alreadyExists = recipes.includes(recipeId)
    // Toggling if recipe exists or not to add it or not
    if (alreadyExists) {
        const newRecipes = recipes.filter(recipe => recipe !== recipeId)
        return recipeRef.set(newRecipes)
    } else {
        const newRecipes = [...recipes, recipeId]
        return recipeRef.set(newRecipes)
    }
}
