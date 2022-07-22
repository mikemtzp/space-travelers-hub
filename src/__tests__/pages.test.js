import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Rockets from '../pages/Rockets';
import MyProfile from '../pages/MyProfile';
import Missions from '../pages/Missions';
import Navbar from '../components/Navbar';

describe('Renders page Components', () => {
  it('Renders Rockets component', () => {
    const tree = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Renders My Profile component', () => {
    const tree = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Renders Navbar component', () => {
    const tree = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Renders Missions component', () => {
    const tree = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
