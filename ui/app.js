import React from 'react';
import ReactDOM from 'react-dom';

import WebApp from './components/webapp';
import './main.scss';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('app');
    const list = [
        'apples',
        'bananas',
        'oranges',
        'celery',
        'milk',
        'eggs',
        'bacon',
        'small children',
        'faith in humanity',
        'chicken breast',
        'sushi',
        'mop',
    ];
    ReactDOM.render(
        <WebApp
            list={list}
        />,
        container
    );
});
