import React from 'react';

const CodeSnippet = (props) => {

    const snippet = JSON.stringify(props).split(',').slice(1, -1).join('\n')

    return (
        <textarea className="code-snippet" readOnly value={snippet}></textarea>
    )
}

export default CodeSnippet;