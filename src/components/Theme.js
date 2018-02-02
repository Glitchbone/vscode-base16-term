import React, { Component } from 'react';
import Terminal from './Terminal';
import Swatch from './Swatch';
import CodeSnippet from './CodeSnippet';

class Theme extends Component {

    render() {

        return (
            <div className="theme" style={{backgroundColor: this.props.colors['terminal.background']}}>
                <h2 style={{color: this.props.colors['terminal.foreground']}}>{this.props.name}</h2>
                <Terminal {...this.props.colors} />
                <Swatch {...this.props.colors} />
                <CodeSnippet {...this.props.colors} />
            </div>
        );
        
    }
}

export default Theme;