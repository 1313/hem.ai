import React, { HTMLProps } from 'react';

import { motion, MotionProps } from 'framer-motion';

import { styled } from '../theme';

const listWrapperAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.4,
    },
  },
};

const itemAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const ListWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
`;
const ListItemWrapper = styled(motion.div)`
  flex: 1 1 20rem;
  margin: var(--s-2);
`;
type ListProps = Omit<HTMLProps<HTMLDivElement>, keyof MotionProps | 'ref'>;
export const List = ({ children, ...props }: ListProps): JSX.Element => (
  <ListWrapper
    initial="hidden"
    animate="visible"
    variants={listWrapperAnimation}
    {...props}
  >
    {React.Children.map(children, (child, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <ListItemWrapper key={index} variants={itemAnimation}>
        {child}
      </ListItemWrapper>
    ))}
  </ListWrapper>
);
