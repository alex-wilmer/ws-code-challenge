import React from 'react';
import { connect } from 'react-redux';
import id from 'lodash.identity';
import Spinner from 'react-spinkit';
import posed from 'react-pose';
import Component from '@reactions/component';

let Button = posed.button({
  default: { background: '#88c53a', width: 80 },
  loading: { background: '#c63a3a', width: 100 },
});

export default connect(id)(({ dispatch, loading, error }) => (
  <Component initialState={{ username: '', password: '' }}>
    {({
      setState,
      state,
      submit = () =>
        dispatch({
          type: loading ? 'CANCEL_LOGIN' : 'LOGIN',
          payload: state,
        }),
    }) => (
      <>
        <img
          className="logo"
          src="https://static.windscribe.com/v2/img/WS-Logo-white@2x.png"
        />
        <div style={{ opacity: error ? 1 : 0, color: '#ffb36e' }}>
          Invalid Login
        </div>
        <input
          onChange={e => setState({ username: e.target.value })}
          placeholder="username"
          autoFocus
        />
        <input
          onChange={e => setState({ password: e.target.value })}
          onKeyPress={e => e.key === 'Enter' && submit()}
          placeholder="password"
          type="password"
        />
        <Button
          className="login-btn"
          pose={loading ? 'loading' : 'default'}
          onClick={submit}
        >
          {loading ? (
            <>
              CANCEL <Spinner name="circle" color="white" />
            </>
          ) : (
            'LOGIN'
          )}
        </Button>
      </>
    )}
  </Component>
));
