import React from "react";
import styles from "./Profile.module.css";
import ProfilePicture from "./images/ProfilePicture.jpg";
import { Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export function Profile(user) {
// class Profile extends React.Component {
    // state = {
    //     icon: 'heart'
    //   }
    // render() {
        return (
            <div>
                <div className={styles.ProfileMain}>
                    <div className={styles.ProfileFlex}>
                        <img src={ProfilePicture} className={styles.ProfilePicture} alt={'Profile picture'}></img>
                        <div className={styles.ProfileRight}>
                            <div className={styles.Name}>Gerwazy Zawyszyński</div>
                            <div className={styles.Email}>fluidmonster@wp.pl</div>
                        </div>
                    </div>
                    <div className={styles.FavoutiteRecipe}>Ulubione przepisy&nbsp; 
                    {/* <Icon name={this.state.icon} />: */}
                    </div>
                </div>
            </div>
        )
    // }
}



// export default Profile;