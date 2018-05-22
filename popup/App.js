import React from 'react';
import { connect } from 'react-redux';
import id from 'lodash.identity';
import './style';
import * as views from './views';
import Fade from './views/Fade';

export default connect(id)(({ view }) =>
  Object.entries(views).map(([name, Component]) => (
    <Fade className={`App ${name}`} visible={name === view}>
      <Component />
    </Fade>
  )),
);
