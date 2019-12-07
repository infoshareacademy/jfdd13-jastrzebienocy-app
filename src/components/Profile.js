import React from "react";
import styles from "./Profile.module.css";
import ProfilePicture from "./images/ProfilePicture.jpg";
import { watchUsers, unwatchUsers, watchRecipes, watchFavs, unwatchFavs, unwatchRecipes } from "../services/ForFetchDB";
import { finished } from "stream";

class Profile extends React.Component {
  state = {
    id: "",
    email: this.email,
    name: "",
    recipes: [],
    favs: []
  };

  componentDidMount() {
    watchUsers(users => {
      this.setState({ ...users });
    });
    watchRecipes(recipes => {
      this.setState({ recipes })
    })
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
          <div className={styles.FavoutiteRecipe}>
            <button onClick={this.handleClick()}>Pokaz przepisy ulubione</button>
            </div>
        </div>
      </div>
    );
  }
}

export default Profile;
