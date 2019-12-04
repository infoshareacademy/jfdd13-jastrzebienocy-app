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

  export const storage = firebase.storage();
  export default firebase;
  