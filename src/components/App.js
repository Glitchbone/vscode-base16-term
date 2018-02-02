import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import themes from '../data/themes.json';
import Nav from './Nav';
import Main from './Main';

const App = (props) => {

    return (
        <Router>
            <div className="app">
                <aside className="sidebar">
                    <Nav items={themes}></Nav>
                </aside>
                <header className="padded">
                    <h1>Base16 Terminal Colors <small>for Visual Studio Code</small></h1>
                    <p>Select a theme & copy/paste the properties under « <a href="https://code.visualstudio.com/docs/getstarted/theme-color-reference" target="_blank" rel="noopener noreferrer">workbench.colorCustomizations</a> » in your user settings</p>
                    <small>Made with ❤ by <a href="https://github.com/Glitchbone" target="_blank" rel="noopener noreferrer">Glitchbone</a></small>
                </header>
                <Route exact path="/:themeId?" render={(props) => (
                    <Main {...props.match.params} themes={themes} />
                )} />
            </div>
        </Router>
    )
}

export default App;
