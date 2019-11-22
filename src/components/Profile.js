import React from "react";
import styles from "./Profile.module.css";
import ProfilePicture from "./images/ProfilePicture.jpg";

class Profile extends React.Component {
    render() {
        return (
            <div className={styles.ProfileMain}>
                <img src={ProfilePicture} ClassName={styles.ProfilePicture} alt={'Profile picture'}></img>
                <div className={styles.Name}>
                    Gerwazy Zawyszyński
                </div>
                <div className={styles.Email}>fluidmonster@wp.pl</div>
                <div className={styles.FavoutiteRecipe}>Ulubione przepisy : </div>
            </div>

        )
    }
};

export default Profile;