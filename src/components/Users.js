import React from 'react';
import User from "./User";

export default function Users() {

    return (
        <div className="right">

            <User
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&w=1000&q=80"
                alt="Prince"
                name="Harry the Prince"/>

            <div className="users__block">

                <User
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&w=1000&q=80"
                    alt="Prince"
                    name="Harry the Prince"
                    min/>

                <User
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&w=1000&q=80"
                    alt="Prince"
                    name="Harry the Prince"
                    min/>

                <User
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&w=1000&q=80"
                    alt="Prince"
                    name="Harry the Prince"
                    min/>

            </div>

        </div>
    )
}