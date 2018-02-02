import React from 'react';

const Terminal = (props) => {

    return (
        <div className="terminal">
            <div className="terminal__screen" style={{backgroundColor: props['terminal.background'], borderColor: props['terminal.foreground']}}>
                <span style={{color: props['terminalCursor.foreground']}}>dschrute@dunder-mifflin&nbsp;</span>
                <span style={{color: props['terminal.background'], backgroundColor: props['terminal.ansiBlue']}}></span>
                <span style={{color: props['terminal.background'], backgroundColor: props['terminal.ansiBlue']}}>&nbsp;~/leads&nbsp;</span>
                <span style={{color: props['terminal.ansiBlue'], backgroundColor: props['terminal.ansiYellow']}}></span>
                <span style={{color: props['terminal.background'], backgroundColor: props['terminal.ansiYellow']}}>&nbsp; master&nbsp;</span>
                <span style={{color: props['terminal.ansiYellow']}}></span>
                <span style={{color: props['terminalCursor.foreground']}}>&nbsp;ls&nbsp;</span>
                <span style={{color: props['terminalCursor.background']}}>█</span>
            </div>
        </div>
    )
}

export default Terminal;