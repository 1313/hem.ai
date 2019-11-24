import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomeView from './HomeView';
import DebugView from './DebugView';
import { RecipeView } from './RecipeView';
import { IngredientsView } from './IngredientsView';

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
              <Route path="/ingredients">
                <IngredientsView />
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
