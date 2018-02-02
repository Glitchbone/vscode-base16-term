const execSync = require('child_process').execSync;
const glob = require('glob');
const path = require('path');
const fs = require('fs');

const themesDir = process.argv[2];

if (!themesDir) {
    throw 'Please provide a path to the base16 shell themes';
}

const kebabToTitleCase = str => {
    return str.split('-').map((part) => {
        return part.charAt(0).toUpperCase() + part.substring(1);
    }).join(' ');
}

var themes = [];
const outFileName = 'src/data/themes.json';

glob.sync(`${themesDir}/*.sh`).forEach((file) => {

    console.log(`Processing ${file}`);

    const id = path.basename(file).split('.')[0].replace('base16-', '');
    const name = kebabToTitleCase(id);
    const colors = execSync(`./scripts/parse-theme-colors ${file}`);
    const theme = JSON.parse(colors);

    themes.push({
        id,
        name,
        colors: {
            "terminal.background": theme.color_background,
            "terminal.foreground": theme.color_foreground,
            "terminalCursor.background": theme.color_foreground,
            "terminalCursor.foreground": theme.color_foreground,
            "terminal.ansiBlack": theme.color00,
            "terminal.ansiBlue": theme.color04,
            "terminal.ansiBrightBlack": theme.color08,
            "terminal.ansiBrightBlue": theme.color12,
            "terminal.ansiBrightCyan": theme.color14,
            "terminal.ansiBrightGreen": theme.color10,
            "terminal.ansiBrightMagenta": theme.color13,
            "terminal.ansiBrightRed": theme.color09,
            "terminal.ansiBrightWhite": theme.color15,
            "terminal.ansiBrightYellow": theme.color11,
            "terminal.ansiCyan": theme.color06,
            "terminal.ansiGreen": theme.color02,
            "terminal.ansiMagenta": theme.color05,
            "terminal.ansiRed": theme.color01,
            "terminal.ansiWhite": theme.color07,
            "terminal.ansiYellow": theme.color03
        }
    });

});

fs.writeFile(outFileName, JSON.stringify(themes, null, 4), (err) => {
    if (err) throw err;
    console.log(`${themes.length} themes saved to ${outFileName}`);
});