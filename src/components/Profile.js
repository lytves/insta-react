import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {

    return (

        <div className="container profile">

            <User
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&w=1000&q=80"
                alt="Main User"
                name="some_cool_man"/>

            <Palette/>

        </div>
    )

};

export default Profile;