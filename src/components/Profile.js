import React from "react";
import styles from "./Profile.module.css";
import ProfilePicture from "./images/ProfilePicture.jpg";
import {
    
    getFavourites,
    watchUsers,
    unwatchUsers
    
  } from "../services/ForFetchDB";


// export function Profile(user) {
class Profile extends React.Component {
    state = {
        id: '',
        email: this.email,
        name: '',
        favorites: []
      }


      componentDidMount() {
        watchUsers(users => {
          this.setState({ ...users});
        });
      }
    
      componentWillUnmount() {
        unwatchUsers()
      }
    render() {
        return (
            <div>
                <div className={styles.ProfileMain}>
                    <div className={styles.ProfileFlex}>
                        <img src={ProfilePicture} className={styles.ProfilePicture} alt={'Profile picture'}></img>
                        <div className={styles.ProfileRight}>
                            <div className={styles.Name}>{this.state.name}</div>
                            <div className={styles.Email}>{this.state.email}</div>
                        </div>
                    </div>
                    <div className={styles.FavoutiteRecipe}>{this.favs}</div>
                </div>
            </div>
        )
    }
}



export default Profile;