import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import MissionTable from '../components/MissionTable';
import getMissions from '../redux/apiMissions';

const Missions = () => {
  const { missions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  const missionList = Object.values(missions);
  useEffect(
    () => {
      dispatch(getMissions());
    }, [],
  );

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{' '}</th>
          </tr>
        </thead>
        {missionList ? missionList.map((mission) => (
          <MissionTable
            key={mission.id}
            id={mission.id}
            name={mission.name}
            description={mission.description}
            joined={mission.joined}
          />
        ))
          : <p>No missions found</p>}
      </table>
    </section>
  );
};
export default Missions;
