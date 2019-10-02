import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { DebugView } from './Debug';

const layoutTransition = {
  initial: { y: '-100%', opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {
    y: '100%',
    opacity: 0,

    transition: {
      duration: 0.25,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

export function ViewRouter(): JSX.Element {
  return (
    <main>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route
                path="/debug"
                render={() => (
                  <motion.div
                    key="/debug"
                    className="view"
                    {...layoutTransition}
                  >
                    <DebugView />
                  </motion.div>
                )}
              />
              <Route
                path="/"
                render={() => (
                  <motion.div key="/" className="view" {...layoutTransition}>
                    <h1>Home</h1>
                  </motion.div>
                )}
              />
            </Switch>
          </AnimatePresence>
        )}
      />
    </main>
  );
}
