import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rocket from '../components/Rocket';
import getRockets from '../redux/apiRockets';
import rockets from '../redux/rockets';

const renderReservedRockets = (reserved) => {
  const { tree } = render(
    <Provider store={store}>
      <Rocket
        reserved={reserved}
        id={1}
        name="Falcon 1"
        description="Test description"
        image="https://imgur.com/DaCfMsj.jpg"
      />
    </Provider>,
  );
  return tree;
};

describe('Test rocket button and message', () => {
  it('Renders first Rocket', () => {
    expect(renderReservedRockets(true)).toMatchSnapshot();
  });

  it('Shows Reserved message in description and Cancel Reservation button', () => {
    renderReservedRockets(true);
    expect(screen.getByText(/Reserved/i)).toBeInTheDocument();
    expect(screen.getByText(/Cancel Reservation/i)).toBeInTheDocument();
  });

  it('Shows Reserve Rocket button', () => {
    renderReservedRockets(false);
    expect(screen.getByText(/Reserve Rocket/i)).toBeInTheDocument();
  });
});

describe('Test rocket reducers and functions', () => {
  it('Fetches data from API', async () => {
    await store.dispatch(getRockets());
    expect(store.getState().rockets).toBeTruthy();
  });

  it('Returns the initial state', () => {
    expect(rockets.reducer(undefined, { type: undefined })).toEqual(
      { rockets: [] },
    );
  });
});
