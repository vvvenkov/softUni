import React from "https://esm.sh/react@19.2.0";

var h1ReactElement = React.createElement('h1', null, 'My First React APP!');
var h2ReactElement = React.createElement('h2', null, 'The best framework ever!');
var App = React.createElement('div', { className: 'app-container' }, h1ReactElement, h2ReactElement);

var AppJSX = React.createElement(
    'div',
    { className: 'app-container' },
    React.createElement(
        'h1',
        null,
        'My First JSX APP'
    ),
    React.createElement(
        'h2',
        null,
        'The best framework ever!'
    )
);

export default AppJSX;