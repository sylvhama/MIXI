import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../src/components/Button';
import Icon from '../src/components/Icon';
import { ICONS } from '../src/constants'
import '../src/index.css';
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
      <Button Icon={<Icon icon={ICONS.GLASS} size={26} />}>BUTTON!</Button>
      <Button light Icon={<Icon icon={ICONS.GLASS} size={26} />}>BUTTON!</Button>
    </div>
  ));