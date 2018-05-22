import React from 'react';
import id from 'lodash.identity';
import { connect } from 'react-redux';
import Component from '@reactions/component';
import Fade from './Fade';

export default connect(id)(({ dispatch, countries, selectedCountryIndex }) => (
  <>
    <div className="header">
      <div className="logout" onClick={() => dispatch({ type: 'LOGOUT' })}>
        LOGOUT
      </div>
      <div
        className="menu-btn"
        onClick={() => dispatch({ type: 'CHANGE_VIEW', payload: 'Menu' })}
      >
        ☰
      </div>
    </div>
    <div>
      <label>Select country:</label>
      <select
        value={countries[selectedCountryIndex]}
        onChange={e =>
          dispatch({ type: 'SELECT_COUNTRY', payload: e.target.value })
        }
      >
        {countries.map(x => <option key={x.name}>{x.name}</option>)}
      </select>
    </div>
  </>
));