import React from 'react';
import Terminal from './Terminal';
import Swatch from './Swatch';
import Tools from './Tools';

const Theme = (props) => {

    return (
        <main className="theme" style={{backgroundColor: props.colors['terminal.background']}}>
            <div>
                <h2 style={{color: props.colors['terminal.foreground']}}>{props.name}</h2>
                <Swatch {...props.colors} />
                <Terminal {...props.colors} />
                <Tools {...props.colors} />
            </div>
        </main>
    )
}

export default Theme;