import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const DebugView = React.lazy(() => import('./Debug'));

const layoutTransition = {
  initial: { x: '-100%', opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {
    x: '100%',
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
                    <Suspense fallback={<div>Loading...</div>}>
                      <DebugView />
                    </Suspense>
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
