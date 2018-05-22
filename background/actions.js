import defaultState from './state';

export default {
  LOADING: state => ({
    ...state,
    loading: true,
  }),
  CANCEL_LOGIN: state => ({
    ...state,
    loading: false,
  }),
  SUCCESS: state => ({
    ...state,
    loading: false,
    success: true,
    error: false,
    view: 'Main',
  }),
  ERROR: state => ({
    ...state,
    loading: false,
    success: false,
    error: true,
  }),
  LOGOUT: state => defaultState,
  SELECT_COUNTRY: (state, action) => ({
    ...state,
    selectedCountryIndex: state.countries.findIndex(x => x === action.payload),
  }),
  CHANGE_VIEW: (state, action) => ({
    ...state,
    view: action.payload,
  }),
};
