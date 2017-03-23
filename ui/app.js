import React from 'react';
import ReactDOM from 'react-dom';

import WebApp from './components/webapp';
import './main.scss';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('app');
    ReactDOM.render(
        <WebApp
            title="My First React App"
            owner="Bob"
        />,
        container
    );
});
