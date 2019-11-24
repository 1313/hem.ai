import { motion } from 'framer-motion';
import { styled } from '../theme';

export const Card = styled(motion.div)`
  position: relative;
  color: ${({ theme }) => theme.color.text};
  padding: var(--s0);
  > * + * {
    margin-top: var(--s-4);
  }
  box-shadow: ${p => p.theme.boxShadow};
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.color.secondaryBackground};
`;
