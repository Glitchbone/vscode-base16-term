import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import themes from '../data/themes.json';
import Nav from './Nav';
import Main from './Main';

class App extends Component {

    render() {

        return (
            <Router>
                <div className="App">
                    <Nav items={themes}></Nav>
                    <header>
                        <h1>Base16 Terminal Colors</h1>
                        <h2>For Visual Studio Code</h2>
                    </header>
                    <Route exact path="/:themeId?" render={(props) => (
                        <Main {...props.match.params} themes={themes} />
                    )} />
                </div>
            </Router>
        )
    }
}

export default App;
