import React from "react";
import styles from "./Profile.module.css";
import ProfilePicture from "./images/ProfilePicture.jpg";
import { Icon } from 'semantic-ui-react';
import Heart from './Heart';

class Profile extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.ProfileMain}>
                    <div className={styles.ProfileFlex}>
                        <img src={ProfilePicture} ClassName={styles.ProfilePicture} alt={'Profile picture'}></img>
                        <div className={styles.ProfileRight}>
                            <div className={styles.Name}>Gerwazy Zawyszyński</div>
                            <div className={styles.Email}>fluidmonster@wp.pl</div>
                        </div>
                    </div>
                    <div className={styles.FavoutiteRecipe}>Ulubione przepisy "icon:heart"
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;