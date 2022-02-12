import React, { useState } from 'react';
import axios from 'axios';


const UserProfile = () => {

    const [newUserProfile, setNewUserProfile] = useState(
        {
            image: '',
            firstName: '',
            bio: '',
        }
    );

    const setNewAuthor = setNewUserProfile

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', newUserProfile.photo);
        formData.append('firstName', newUserProfile.firstName);
        formData.append('bio', newUserProfile.bio);

        axios.post('api/user', formData)
             .then(res => {
                console.log(res);
             })
             .catch(err => {
                console.log(err);
             });
    }

    const handleChange = (e) => {
        setNewAuthor({...newUserProfile, [e.target.firstName]: e.target.value});
    }

    const handlePhoto = (e) => {
        setNewAuthor({...newUserProfile, image: e.target.files[0]});
    }

    console.log()

    return(
        <div className="UserProfileWrap">
            <div className="UserProfileCont">
                    <form onSubmit={handleSubmit} encType='multipart/form-data'>
                    <input 
                        type="file" 
                        accept=".png, .jpg, .jpeg"
                        name="image"
                        onChange={handlePhoto}
                    />

                    <input 
                        type="text"
                        placeholder="Name"
                        name="firstName"
                        value={newUserProfile.firstName}
                        onChange={handleChange}
                    />

                    <input 
                        type="text"
                        name="bio"
                        value={newUserProfile.bio}
                        onChange={handleChange}
                    />

                    <input 
                        type="submit"
                    />
                </form>
                <img alt="avatar" src={newUserProfile.image}></img>
            </div>
        </div>
    )
}

export default UserProfile