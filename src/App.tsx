import React from 'react';
import './BaseStyles';

import { BrowserRouter as Router } from 'react-router-dom';

import { ViewRouter } from './views/ViewRouter';
import { Navigation } from './components/Navigation';

export function App(): JSX.Element {
  return (
    <div className="app">
      <Router>
        <Navigation />

        <ViewRouter />
      </Router>
    </div>
  );
}
