import firebase from "../firebase";
import moment from "moment";

export const login = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
};

export const register = (email, password, name, favorites) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(value => {
      const user = firebase.auth().currentUser;
      user
        .updateProfile({
          displayName: name
        })
        .then(() => {
          firebase
            .database()
            .ref("/users")
            .push({
              id: user.uid,
              name,
              email,
              favorites
            });
        });
    });
};