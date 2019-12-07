import React from "react";
import styles from "./Profile.module.css";
import ProfilePicture from "./images/ProfilePicture.jpg";
<<<<<<< HEAD
import { watchUsers, unwatchUsers, watchRecipes } from "../services/ForFetchDB";
=======
import { watchUsers, unwatchUsers, watchRecipes, watchFavs, unwatchFavs, unwatchRecipes } from "../services/ForFetchDB";
import { finished } from "stream";
>>>>>>> a51b7ac4e9c341767565fd207a1c238bf080e403

class Profile extends React.Component {
  state = {
    id: "",
    email: this.email,
    name: "",
<<<<<<< HEAD
    favorites: [],
    recipes: []
=======
    recipes: [],
    favs: []
>>>>>>> a51b7ac4e9c341767565fd207a1c238bf080e403
  };

  componentDidMount() {
    watchUsers(users => {
      this.setState({ ...users });
      
    });
    watchRecipes(recipes => {
      this.setState({ recipes })
    })
<<<<<<< HEAD
         

  }


=======
    watchFavs(favs => {
      this.setState({favs})
      console.log(Object.keys(favs))
      console.log(this.state)
    })

    
  }


  handleClick()
   {
    const use = this.state.recipes
   const favsKeys = (Object.keys((this.state.favs)))
   const use2 = use.filter(use => use.id === favsKeys.find(idFav =>  idFav === use.id))
   
   console.log(use2)
   }

>>>>>>> a51b7ac4e9c341767565fd207a1c238bf080e403
  componentWillUnmount() {
    unwatchUsers();
    unwatchFavs();
    unwatchRecipes();
  }
  render() {
    return (
      <div>
        <div className={styles.ProfileMain}>
          <div className={styles.ProfileFlex}>
            <img
              src={ProfilePicture}
              className={styles.ProfilePicture}
              alt={"Profile picture"}
            ></img>
            <div className={styles.ProfileRight}>
              <div className={styles.Name}>{this.state.name}</div>
    <div className={styles.Email}>{this.state.email}</div>
            </div>
          </div>
<<<<<<< HEAD
          <div className={styles.FavoutiteRecipe}><button onClick={this.handleClick}>halo</button></div>
=======
          <div className={styles.FavoutiteRecipe}>
            <button onClick={this.handleClick()}>Pokaz przepisy ulubione</button>
            </div>
>>>>>>> a51b7ac4e9c341767565fd207a1c238bf080e403
        </div>
      </div>
    );
  }
}

export default Profile;
