import React from 'react';

const Terminal = (props) => {

    return (
        <div className="terminal" style={{backgroundColor: props['terminal.background'], color: props['terminal.foreground']}}>
            <span>john@doe&nbsp;</span>
            <span style={{color: props['terminal.background'], backgroundColor: props['terminal.ansiBlue']}}></span>
            <span style={{color: props['terminal.background'], backgroundColor: props['terminal.ansiBlue']}}>&nbsp;~/my-project&nbsp;</span>
            <span style={{color: props['terminal.ansiBlue'], backgroundColor: props['terminal.ansiYellow']}}></span>
            <span style={{color: props['terminal.background'], backgroundColor: props['terminal.ansiYellow']}}>&nbsp; master&nbsp;</span>
            <span style={{color: props['terminal.ansiYellow']}}></span>
            <span>&nbsp;npm install&nbsp;</span>
            <span style={{color: props['terminalCursor.background']}}>█</span>
        </div>
    )
}

export default Terminal;