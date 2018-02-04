import React, { Fragment } from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../src/components/Button';
import Icon from '../src/components/Icon';
import { ICONS } from '../src/constants'
import '../src/index.css';
import { backgrounds } from "./Background";

const centerStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
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
        <Fragment>
          <Button>BUTTON!</Button>
          <Button light>BUTTON!</Button>
          <Button dark>BUTTON!</Button>
        </Fragment>
  ))
  .add('text and icon', () => (
    <Fragment>
      <Button Icon={<Icon icon={ICONS.GLASS} size={26} />}>BUTTON!</Button>
      <Button light Icon={<Icon icon={ICONS.GLASS} size={26} />}>BUTTON!</Button>
    </Fragment>
  ));