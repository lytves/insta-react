import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {

    render() {
        return (

            <div className="left">

                <Post
                    src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="nature"/>

                <Post
                    src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="nature"/>

            </div>

        )
    }
}