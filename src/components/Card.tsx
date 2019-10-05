import { motion } from 'framer-motion';
import { styled } from '../theme';

export const Card = styled(motion.div)`
  color: ${({ theme }) => theme.color.secondaryText};
  display: inline-block;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;

  overflow: hidden;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.secondaryBackground};
`;
