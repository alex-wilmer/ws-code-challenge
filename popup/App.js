import React from 'react';
import './style';
import connector from './connector';
import * as views from './views';
import Fade from './views/Fade';

export default connector(({ view }) =>
  Object.entries(views).map(([name, Component]) => (
    <Fade className={`App ${name}`} visible={name === view}>
      <Component />
    </Fade>
  )),
);
