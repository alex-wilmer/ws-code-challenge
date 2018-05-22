import React from 'react';
import { connect } from 'react-redux';
import id from 'lodash.identity';

export default connect(id)(({ dispatch, options }) => (
  <>
    <div onClick={() => dispatch({ type: 'CHANGE_VIEW', payload: 'Main' })}>
      BACK
    </div>
    {options.map(x => <div key={x}>{x}</div>)}
  </>
));
