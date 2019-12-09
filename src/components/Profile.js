<<<<<<< HEAD

=======
>>>>>>> origin
import React from "react";
import styles from "./Profile.module.css";
import {
  watchUsers,
  unwatchUsers,
  watchRecipes,
  watchFavs,
  unwatchFavs,
  unwatchRecipes
} from "../services/ForFetchDB";
import { Grid } from "semantic-ui-react";
import RecipeView from "./RecipeView";

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
<<<<<<< HEAD
      this.setState({ ...users });

=======
      this.setState({ ...users, avatar });
>>>>>>> origin
    });
    watchRecipes(recipes => {
      this.setState({ recipes });
    });
    watchFavs(favs => {
<<<<<<< HEAD
      this.setState({ favs })


    })


  }
=======
      this.setState({ favs });
      const use = this.state.recipes;
      let favsKeys = [];
      if (this.state.favs === null) {
        favsKeys = [];
      } else {
        favsKeys = Object.keys(this.state.favs);
      }

      const use2 = use.filter(
        use => use.id === favsKeys.find(idFav => idFav === use.id)
      );
      this.setState({ favs2: use2 });
    });
>>>>>>> origin

  }

<<<<<<< HEAD
  handleClick() {
    const use = this.state.recipes
    let favsKeys = []
    if (this.state.favs === null) {
      favsKeys = []
    } else {
      favsKeys = (Object.keys((this.state.favs)))
    }

    const use2 = use.filter(use => use.id === favsKeys.find(idFav => idFav === use.id))
  }
=======
  
>>>>>>> origin

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
              alt={"Profile picture"}
            ></img>
            <div className={styles.ProfileRight}>
<<<<<<< HEAD
              <div className={styles.Name}>Witaj  {this.state.name}</div>
              <div className={styles.Email}>Email:    {this.state.email}</div>
            </div>
          </div>
          <div className={styles.FavoutiteRecipe}>
            <button onClick={this.handleClick()}>Pokaz przepisy ulubione</button>
=======
              <div className={styles.Name}> Witaj {this.state.name}!</div>
              <div className={styles.Email}>
                Twój e-mail: {this.state.email}
              </div>
            </div>
          </div>
          <div className={styles.FavoutiteRecipe}>
            <Grid stackable relaxed style={{ width: "100%", marginTop: "0" }}>
              {this.state.favs2.length == 0 ? (
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
>>>>>>> origin
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
