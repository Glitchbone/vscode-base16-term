import React, { Component } from 'react';
import _ from 'lodash';
import Theme from './Theme';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTheme: this.props.themes[0]
        };
    }

    setActiveTheme(id) {
        this.setState({
            activeTheme: id ? _.find(this.props.themes, {id}) : this.props.themes[0]
        });
    }

    componentDidMount() {
        this.setActiveTheme(this.props.themeId);
    }

    componentWillReceiveProps(nextProps) {
        this.setActiveTheme(nextProps.themeId);
    }

    render() {
        return (
            <main>
                <Theme {...this.state.activeTheme} />
            </main>
        )
    }
}

export default Main;
