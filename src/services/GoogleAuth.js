import { Component } from 'react'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'


export default class GoogleAuthProvider extends Component {

    state = { isSignedIn: false }
    uiConfig = {
        signInOptions: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        callbacks: {
            signInSuccess: () => false
        }
    }

    componentDidMount = () => {
        // firebase.initializeApp({
        //     apiKey: "AIzaSyCVVIiKXCqCGhTP7KCs1EkrTN7rm116-eI",
        //     authDomain: 'https://foodwaste-ecb78.firebaseio.com'
        // })

        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
        })
    }
}