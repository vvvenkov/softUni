import React from "https://esm.sh/react@19.2.0";

const h1ReactElement = React.createElement('h1', null, 'My First React APP!');
const h2ReactElement = React.createElement('h2', null, 'The best framework ever!');
const App = React.createElement('div', { className: 'app-container' }, h1ReactElement, h2ReactElement);

const AppJSX = (
    <div className="app-container">
        <h1>My First JSX APP</h1>
        <h2>The best framework ever!</h2>
    </div>
);

export default AppJSX;
