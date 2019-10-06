import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomeView from './HomeView';
import DebugView from './DebugView';
import { RecipeView } from './RecipeView';

export function ViewRouter(): JSX.Element {
  return (
    <main>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route path="/recipes" exact>
                <RecipeView />
              </Route>
              <Route path="/debug">
                <DebugView />
              </Route>
              <Route path="/" exact>
                <HomeView />
              </Route>
            </Switch>
          </AnimatePresence>
        )}
      />
    </main>
  );
}
