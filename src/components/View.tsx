import React from 'react';
import { motion } from 'framer-motion';
import { styled } from '../theme';

const ViewWrapper = styled(motion.div)`
  & > * + * {
    margin-top: var(--s-1);
  }
`;
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

interface ViewProps {
  children: JSX.Element[] | JSX.Element;
}
export function View(props: ViewProps): JSX.Element {
  return (
    <ViewWrapper
      initial="initial"
      exit="exit"
      animate="animate"
      variants={layoutTransition}
      {...props}
    />
  );
}
