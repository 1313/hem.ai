import { styled } from '../theme';

export const Cluster = styled.div`
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  margin: calc(var(--s-2) * -1);

  & > * {
    margin: calc(var(--s-2));
  }
`;
