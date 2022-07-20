import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://api.spacexdata.com/v3/missions';

const createTable = (data) => {
  const missions = [];
  const keys = Object.keys(data);

  keys.forEach((mission) => {
    missions.push(
      {
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
      },
    );
  });
  return missions;
};

const getMissions = createAsyncThunk(
  'missions/getMissions',
  async () => {
    const response = await axios.get(apiUrl);
    return createTable(response.data);
  },
);

export default getMissions;
