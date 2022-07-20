import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import MissionTable from '../components/MissionTable';
import getMissions from '../redux/apiMissions';

const Missions = () => {
  const { missions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  const missionList = Object.keys(missions);

  useEffect(
    () => {
      dispatch(getMissions());
    }, [],
  );

  return (
    <section>
      {missionList ? missionList.map((mission) => (
        <MissionTable
          key={mission.mission_id}
          id={mission.mission_id}
          name={mission.mission_name}
          description={mission.description}
        />
      ))
        : <p>No missions found</p>}

    </section>
  );
};
export default Missions;
