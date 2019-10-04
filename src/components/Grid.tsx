import { styled } from '../theme';

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 calc(var(--s-4) * -1);
  > * {
    margin: var(--s-4);
    flex: 1 1 20rem;
  }
`;
