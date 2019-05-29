import React from 'react';
import Header from './components/Header';
import Feed from "./components/Feed";
import Profile from './components/Profile';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">

                <Header/>
                {/* "exact" to make a routing only by exacting path matching,
                 without it routing will work also when is matching only some part of the path */}
                <Route path='/' component={Feed} exact/>
                <Route path='/profile' component={Profile}/>

            </div>
        </Router>
    );
}

export default App;
