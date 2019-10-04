import { styled } from '../theme';

export const Grid = styled.div`
  width: auto;
  display: flex;
  flex-wrap: wrap;
  > * {
    margin: var(--s-5);
    flex: 1 1 320px;
  }
`;
