import React from "react";
import styles from "./Profile.module.css";
import {
  watchUsers,
  unwatchUsers,
  watchRecipes,
  watchFavs,
  unwatchFavs,
  unwatchRecipes
} from "../../services/ForFetchDB";
import { Grid } from "semantic-ui-react";
import RecipeView from "../recipes/RecipeView";

class Profile extends React.Component {
  state = {
    id: "",
    email: this.email,
    name: "",
    recipes: [],
    favs: {},
    favs2: [],
    avatar: ''
  };

  componentDidMount() {
    const avatar=`https://api.adorable.io/avatars/285/${this.state.email}.png`
    watchUsers(users => {
      this.setState({ ...users, avatar });
      
    });
    watchRecipes(recipes => {
      this.setState({ recipes });
      watchFavs(favs => {
        let favIds
        if(favs != null){
          favIds = Object.keys(favs)
        } else{
           favIds = []
        }
       
        const { recipes } = this.state
        const favoriteRecipes = recipes.filter(recipe => favIds.includes(recipe.id))
        this.setState({ favs2: favoriteRecipes });
      });
    });
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
              src={this.state.avatar}
              className={styles.ProfilePicture}
              alt={"Profile"}
            ></img>
            <div className={styles.ProfileRight}>
              <div className={styles.Name}> Witaj {this.state.name}!</div>
              <div className={styles.Email}>
                Twój e-mail: {this.state.email}
              </div>
            </div>
          </div>
          <div className={styles.FavoutiteRecipe}>
            <Grid stackable relaxed style={{ width: "100%", marginTop: "0" }}>
              {this.state.favs2.length === 0 ? (
                <p>
                  Nie masz żadych ulubionych, wejdź na przepisy i dodaj coś do
                  ulubionych! :)
                </p>
              ) : (
                this.state.favs2.map(item => (
                  <Grid.Column key={item.id} width={8}>
                    <RecipeView
                      recipe={item}
                      isFavourite={this.state.favs[item.id]}
                    />
                  </Grid.Column>
                ))
              )}
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
