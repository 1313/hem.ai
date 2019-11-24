import { styled } from '../theme';

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: calc(var(--s-1) * -1);
  > * {
    margin: var(--s-1);
    flex: 1 1 30rem;
  }
`;
