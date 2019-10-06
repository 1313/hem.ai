import React from 'react';
import { Card } from '../components/Card';
import { List } from '../components/List';
import { View } from '../components/View';

// eslint-disable-next-line import/no-default-export
export default function HomeView(): JSX.Element {
  return (
    <View>
      <h2>Hej!</h2>
      <List>
        <Card>
          <img src={require('../images/kladd.jpg')} alt="kladd" />
        </Card>
        <Card>
          <img src={require('../images/kladd.jpg')} alt="kladd" />
        </Card>
        <Card>
          <img src={require('../images/kladd.jpg')} alt="kladd" />
        </Card>
        <Card>
          <img src={require('../images/kladd.jpg')} alt="kladd" />
        </Card>
        <Card>
          <img src={require('../images/kladd.jpg')} alt="kladd" />
        </Card>
        <Card>
          <img src={require('../images/kladd.jpg')} alt="kladd" />
        </Card>
        <Card>
          <img src={require('../images/kladd.jpg')} alt="kladd" />
        </Card>
        <Card>
          <img src={require('../images/kladd.jpg')} alt="kladd" />
        </Card>
        <Card>
          <img src={require('../images/kladd.jpg')} alt="kladd" />
        </Card>
        <Card>
          <img src={require('../images/kladd.jpg')} alt="kladd" />
        </Card>
      </List>
    </View>
  );
}
