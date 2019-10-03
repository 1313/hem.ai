import React from 'react';
import './BaseStyles';

import { BrowserRouter as Router } from 'react-router-dom';

import { ViewRouter } from './views/ViewRouter';
import { Navigation } from './components/Navigation';
import { styled } from './theme';

const AppWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  @media (${({ theme }) => theme.breakpoints.small}) {
    flex-direction: row;
  }
`;
export function App(): JSX.Element {
  return (
    <AppWrapper>
      <Router>
        <Navigation />
        <ViewRouter />
      </Router>
    </AppWrapper>
  );
}
