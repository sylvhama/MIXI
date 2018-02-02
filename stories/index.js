import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../src/components/Button';
import '../src/index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { backgrounds } from "./Background";

const centerStyle = {
  textAlign: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const CenterDecorator = (centerFn) => (
  <div style={centerStyle}>
    { centerFn() }
  </div>
);

storiesOf('Button', module)
  .addDecorator(CenterDecorator)
  .addDecorator(backgrounds)
  .add('text only', () => (
        <div>
          <Button>BUTTON!</Button>
          <Button light>BUTTON!</Button>
          <Button dark>BUTTON!</Button>
        </div>
  ))
  .add('text and icon', () => (
    <div>
      <Button btnIcon="fa fa-glass">BUTTON!</Button>
      <Button light btnIcon="fa fa-glass">BUTTON!</Button>
    </div>
  ));