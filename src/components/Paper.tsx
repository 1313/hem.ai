import { styled } from '../theme';

export const Paper = styled.div`
  color: ${({ theme }) => theme.color.secondaryText};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;
  padding: var(--s0) var(--s-1);
  border-radius: 2px;
  background-color: ${({ theme }) => theme.color.secondaryBackground};
`;
