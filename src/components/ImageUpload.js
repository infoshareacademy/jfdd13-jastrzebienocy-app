import React, { Component } from 'react';
import firebase, { storage } from '../firebase';
import styles from './AddRecipe.module.css'

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0
        }
        this.handleChange = this
            .handleChange
            .bind(this);
            this.handleUpload = this
            .handleUpload
            .bind(this);
    }

    componentDidMount() {
        this.checkIfUserHasProfilePicture()
    }

    handleChange = e => {
        if(e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({image}));
        }
    }
    handleUpload = () => {
        const {image} = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
        (snapshot) => {
            // progress function
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({progress})
        },
        (error) => {
            // error function
            console.log(error)
        },
        () => {
            // complete function
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
                console.log(url);
                this.setState({url})
                this.updateProfilePicture(url)
            })
        });
    }

    updateProfilePicture = (url) => {
        // 1. check what user are you logged in
        const currentUser = firebase.auth().currentUser
        const id = currentUser.uid

        // 2. get the url and update user profile
        firebase.database().ref(`/users/${id}/profilePicture`).set(url)
    }

    checkIfUserHasProfilePicture = async () => {
        // 1. get current user id
        const currentUser = firebase.auth().currentUser
        const id = currentUser.uid

        // 2. fetch current user profile picture
        const dataSnapshot = await firebase.database().ref(`/users/${id}/profilePicture`).once('value')
        const profilePictureUrl = dataSnapshot.val()

        // 3. if there is a picture, use it
        if (profilePictureUrl) {
            // 4. update state of the component
            this.setState({
                url: profilePictureUrl
            })
        }
    }


    render() {
        const showProgress = this.state.progress !== 0 && this.state.progress !== 100 

        return (
            <div>
                <div className={styles.picture}>  
                    <img src={this.state.url || "https://via.placeholder.com/150"} alt="Profile pic" height= "250" width= "250"/>
                </div>
                <div>
                    <p>Change profile picture</p>
                    <input type="file" onChange={this.handleChange}/>
                    <button className={styles.uploadButton} onClick={this.handleUpload}>Upload</button>
                    <div>
                        {showProgress && <progress value={this.state.progress} max="100"/>}
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageUpload;