import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Tools = (props) => {

    const snippet = JSON.stringify(props).slice(1, -1).split(',').join(',\n')

    return (
        <div className="tools padded">
            <CopyToClipboard text={snippet}>
                <button style={{color: props['terminal.background'], backgroundColor: props['terminal.foreground']}}>Copy to clipboard</button>
            </CopyToClipboard>
        </div>
        
    )
}

export default Tools;