// this isn't all "state" of course

export default {
  account: { username: 'user1', password: '123456' },
  countries: [
    { name: 'Canada' },
    { name: 'United States' },
    { name: 'Mexico' },
    { name: 'United Kingdom' },
    { name: 'France' },
  ],
  selectedCountryIndex: -1,
  options: ['Help', 'About', 'Settings', 'Advanced'],

  view: 'Login',

  // 🔥 would obviously put in separate reducer
  loading: false,
  error: false,
  success: false,
};
