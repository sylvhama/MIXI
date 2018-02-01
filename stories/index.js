import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../src/components/Button/Button.js';

storiesOf('Button', module)
    .add('text only', () => (
        <Button btnText="BUTTON!"/>
    ))
    .add('text and icon', () => (
        <Button btnText="BUTTON!" btnIcon="fa fa-glass"/>
    ));