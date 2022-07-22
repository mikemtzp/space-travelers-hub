import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import getMissions from '../redux/apiMissions';
import missions from '../redux/missions';
import Missions from '../pages/Missions';

const renderJoinedMissions = (joined) => {
  const { tree } = render(
    <Provider store={store}>
      <Missions
        joined={joined}
        id={1}
        name="Thaicom"
        description="Test description"
      />
    </Provider>,
  );
  return tree;
};

describe('Test missions button and message', () => {
  it('Renders first Mission', () => {
    expect(renderJoinedMissions(true)).toMatchSnapshot();
  });
});

describe('Test missions reducers and functions', () => {
  it('Fetches data from API', async () => {
    await store.dispatch(getMissions());
    expect(store.getState().missions).toBeTruthy();
  });

  it('Returns the initial state', () => {
    expect(missions.reducer(undefined, { type: undefined })).toEqual(
      {
        missions: [],
        status: null,
      },
    );
  });
});
