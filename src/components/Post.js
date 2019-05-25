import React, {Component} from 'react';
import User from "./User";

export default class Post extends Component {

    render() {

        return (

            <div className="post">

                <User
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&w=1000&q=80"
                    alt="Prince"
                    name="Harry the Prince"/>

                <img src={this.props.src} alt={this.props.alt}/>

                <div className="post__name">
                    some account
                </div>

                <div className="post__descr">
                    some descripton
                </div>

            </div>
        )
    }
}