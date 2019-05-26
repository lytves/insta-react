import React, {Component} from 'react';
import Post from './Post';
import InstaService from '../services/insta-service'

export default class Posts extends Component {

    // Class field declarations syntaxis: InstaService, state

    InstaService = new InstaService();

    state = {

        posts:[],
        error: false,
    };

    render() {
        return (

            <div className="left">

                <Post
                    src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="nature"/>

                <Post
                    src="https://therightsofnature.org/wp-content/uploads/2018/01/turkey-3048299_1920.jpg"
                    alt="nature"/>

            </div>

        )
    }
}