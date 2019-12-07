import React from "react";
import styles from "./Profile.module.css";
import ProfilePicture from "./images/ProfilePicture.jpg";
import { watchUsers, unwatchUsers, watchRecipes } from "../services/ForFetchDB";

class Profile extends React.Component {
  state = {
    id: "",
    email: this.email,
    name: "",
    favorites: []
    // recipes: []
  };

  componentDidMount() {
    watchUsers(users => {
      this.setState({ ...users });
    });
    // watchRecipes(recipes => {
    //   this.setState({ recipes })
    // })

    
  }

  handleClick()
   {
    //  console.log(this.state.favorites)
    //  console.log(this.state.recipes)
    //  const use = this.state.recipes.map(item => item.id)
    //  console.log(use)
    // const use2 = use.filter(list => list.includes(this.state.favorites.id))
    // console.log(use2)
     
      //  recipe.includes(this.state.favorites.id))
   }

  componentWillUnmount() {
    unwatchUsers();
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
            {/* <button onClick={this.handleClick()}>Pokaz przepisy ulubione</button> */}
            </div>
        </div>
      </div>
    );
  }
}

export default Profile;
