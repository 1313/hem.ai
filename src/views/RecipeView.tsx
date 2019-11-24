import React from 'react';
import { View } from '../components/View';

import { Cluster } from '../components/Cluster';
import { Card } from '../components/Card';

export function RecipeView(): JSX.Element {
  return (
    <View>
      <Card>
        <Cluster>
          <h6>Recipes</h6>
          <button type="button">Test</button>
          <button type="button">Test</button>
          <button type="button">Test</button>
          <button type="button">Test</button>
        </Cluster>
      </Card>
    </View>
  );
}
