import React from 'react';
import { View } from '../components/View';
import { Card } from '../components/Card';

import { styled } from '../theme';
import { Grid } from '../components/Grid';

const RecipeItem = styled.button`
  &:hover {
    color: ${({ theme }) => theme.color.secondaryText};
    background-color: ${({ theme }) => theme.color.primary};
  }
  width: 100%;
  box-shadow: none;
  display: block;
  // padding: var(--s-5) var(--s-3);
`;
const RecipeArea = styled.div``;
const RecipeList = styled(Card)`
  padding: var(--s-3);
`;
export function RecipeView(): JSX.Element {
  return (
    <View>
      <Grid>
        <RecipeList>
          <h6>Recipes</h6>
          <RecipeItem>Test</RecipeItem>
          <RecipeItem>Test</RecipeItem>
          <RecipeItem>Test</RecipeItem>
          <RecipeItem>Test</RecipeItem>
        </RecipeList>
        <RecipeArea />
      </Grid>
    </View>
  );
}
