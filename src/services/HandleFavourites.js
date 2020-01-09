import firebase from '../firebase'

export const handleFavoritesFirebase = async (recipeId) => {
    const userId = firebase.auth().currentUser.uid;
    const recipeRef = await firebase.database().ref(`/favourites/${userId}/${recipeId}`).transaction(existingData => {
        return existingData === true ? null : true
    })
}