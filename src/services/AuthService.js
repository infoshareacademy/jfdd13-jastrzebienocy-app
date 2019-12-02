import firebase from "../firebase";

export const login = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log("Logged in!");
      console.log(value);
    })
    .catch(() => {
      console.log("Something went wrong!");
    });
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
          console.log("Registered user with email, password and name");
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