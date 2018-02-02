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
        <div className="swatch padded">
            {swatchColors.map((key, i) => 
                <div className="swatch__color" key={key} style={{
                    backgroundColor: props[`terminal.${key}`],
                    borderColor: i === 0 ? props['terminal.foreground'] : props[`terminal.${key}`]
                }}></div>
            )}
        </div>
    )
}

export default Swatch;