import React from 'react';
import Posts from './Posts'
import Users from "./Users";

export default function Feed() {

    return (
        <div className="container feed">

            {/*block at the left with new posts*/}
            <Posts/>

            {/*block at the right with users-friends*/}
            <Users/>

        </div>
    )
}