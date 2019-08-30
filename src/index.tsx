import React from 'react';
import { render } from 'react-dom';
import TreeChart from './charts/TreeChart';

const root = document.getElementById('root');

function renderApp(): void {
    render(<TreeChart />, root);
}

renderApp();

if (module.hot) {
    module.hot.accept();
}
