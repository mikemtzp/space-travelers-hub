import { createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://api.spacexdata.com/v3/rockets';

const rocketList = (object) => {
  let rocketData = {};

  object.forEach((rocket) => {
    rocketData = {
      ...rocketData,
      [rocket.id]:
      {
        name: rocket.rocket_name,
        description: rocket.description,
        image: rocket.flickr_images[0],
        reserved: false,
        id: rocket.id,
      },
    };
  });
  return rocketData;
};

const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async () => {
    const response = fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return rocketList(data);
  },
);

export default getRockets;
