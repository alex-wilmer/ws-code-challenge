import React from 'react';
import connector from '../connector';

export default connector(({ dispatch, options }) => (
  <>
    <div onClick={() => dispatch({ type: 'CHANGE_VIEW', payload: 'Main' })}>
      BACK
    </div>
    {options.map(x => <div key={x}>{x}</div>)}
  </>
));
