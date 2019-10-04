import React from 'react';
import { styled } from '../theme';
import { Card } from '../components/Card';
import { List } from '../components/List';

// eslint-disable-next-line import/no-default-export
export default function HomeView(): JSX.Element {
  return (
    <>
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
      </List>
    </>
  );
}
