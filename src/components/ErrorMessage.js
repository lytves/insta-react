import React, {Component} from 'react';
import img from '../error.png';

// other syntaxis for export default function Feed() {...}

export default class ErrorMessage extends Component {

    render() {

        return (
            // create a a layout that doesn't render itself but serves to rendering other tags inside them
            <div className={this.props.min ? "min" : "normal"}>

                <img  src={img} alt="Error"/>

            </div>

        )
    }

};
