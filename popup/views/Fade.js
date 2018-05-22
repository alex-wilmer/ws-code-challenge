import React from 'react';
import posed from 'react-pose';

let Posed = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
});

export default ({ visible, style, ...props }) => (
  <Posed
    style={{ pointerEvents: visible ? 'all' : 'none', ...style }}
    pose={visible ? 'visible' : 'hidden'}
    {...props}
  />
);
