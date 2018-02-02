import React from 'react';

const Swatch = (props) => {

    const swatchColors = [
        'ansiBlack',
        'ansiBlue',
        'ansiBrightBlack',
        'ansiBrightBlue',
        'ansiBrightCyan',
        'ansiBrightGreen',
        'ansiBrightMagenta',
        'ansiBrightRed',
        'ansiBrightWhite',
        'ansiBrightYellow',
        'ansiCyan',
        'ansiGreen',
        'ansiMagenta',
        'ansiRed',
        'ansiWhite',
        'ansiYellow'
    ];

    return (
        <div className="swatch clearfix">
            {swatchColors.map((key) => <div className="color" key={key} style={{backgroundColor: props[`terminal.${key}`]}}>&nbsp;</div>)}
        </div>
    )
}

export default Swatch;