import firebase from "firebase";

 const firebaseConfig = {
    apiKey: "AIzaSyCVVIiKXCqCGhTP7KCs1EkrTN7rm116-eI",
    authDomain: "foodwaste-ecb78.firebaseapp.com",
    databaseURL: "https://foodwaste-ecb78.firebaseio.com",
    projectId: "foodwaste-ecb78",
    storageBucket: "foodwaste-ecb78.appspot.com",
    messagingSenderId: "1062977089932",
    appId: "1:1062977089932:web:575455e35925e6224fe6a9",
    measurementId: "G-7NE0B6SY6D"
  };



  firebase.initializeApp(firebaseConfig);
  export default firebase;


// register

   export function register( email, password, name) {

    return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(value => {
      const user = firebase.auth().currentUser;
      user
        .updateProfile({
          displayName: "name"
        })
        .then(() => {
          console.log('Poprawnie zarejestrowano dane: email, hasło i imię');
            firebase
              .database()
              .ref("/users")
              .push({
                id: user.uid,
                name: "dupa",
                email,
                favorites: []
              });
        });
    }).catch(function(error) { 
      console.log('error')});



  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    // [END_EXCLUDE]
  });
  // [END createwithemail]
}

// login 


