import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'


const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Hello name="React Redux" />
    <h2>Let's start{'\u2728'}</h2>
    <Button bsStyle="primary">Continue</Button>
  </div>
);

render(<App />, document.getElementById('root'));
