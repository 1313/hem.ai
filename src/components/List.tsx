import React, { HTMLProps } from 'react';

import { motion, MotionProps, AnimatePresence } from 'framer-motion';

import { styled } from '../theme';

const listWrapperAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const itemAnimation = {
  exit: { opacity: 0, transition: { duration: 0.25 } },
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const ListWrapper = styled(motion.div)`
  display: flex;
  overflow-x: hidden;
  flex-wrap: wrap;
  margin: 0 calc(var(--s-4) * -1);
`;
const ListItemWrapper = styled(motion.div)`
  flex: 1 1 10rem;
  margin: var(--s-4);
  display: flex;

  > * {
    flex: 1 1 auto;
  }
`;
type ListProps = Omit<HTMLProps<HTMLDivElement>, keyof MotionProps | 'ref'>;

type ReactNodeWithKey = React.ReactNode & { key: string };

export const List = ({ children, ...props }: ListProps): JSX.Element => (
  <ListWrapper
    initial="hidden"
    animate="visible"
    variants={listWrapperAnimation}
    {...props}
  >
    <AnimatePresence>
      {React.Children.map(
        children as ReactNodeWithKey[],
        (child: ReactNodeWithKey, index: number) => (
          <ListItemWrapper
            key={child.key || index}
            exit="exit"
            variants={itemAnimation}
          >
            {child}
          </ListItemWrapper>
        ),
      )}
    </AnimatePresence>
  </ListWrapper>
);
