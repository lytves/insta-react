import React, {Component} from 'react';
import InstaService from "../services/insta-service";
import ErrorMessage from "./ErrorMessage";
import User from "./User";

export default class Users extends Component {

    // Class field declarations: InstaService, state
    InstaService = new InstaService();

    state = {
        users: [],
        error: false
    };

    componentDidMount() {
        this.updateUsers();
    }

    updateUsers() {
        this.InstaService.getAllUsers()
            .then(this.onUsersLoaded)
            .catch(this.onError)
    }

    onUsersLoaded = (users) => {
        // will mutate the state
        this.setState({
            users,
            error: false
        })
    };

    onError = (err) => {
        this.setState({
            error: true
        })
    };

    renderItems(arr) {

        return arr.map(item => {
            const {name, photo, alt, id} = item;

            return (

                    <User
                        key={id}
                        src={photo}
                        alt={alt}
                        name={name}
                        min/>

            )
        });
    }

    render() {

        const {error, users} = this.state;

        if (error) {
            return <ErrorMessage/>
        }

        const items = this.renderItems(users);

        return (

            <div className="right">

                <User
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&w=1000&q=80"
                    alt="Prince"
                    name="Harry the Prince"/>

                <div className="users__block">

                    {items}

                </div>

            </div>

        );
    }
}