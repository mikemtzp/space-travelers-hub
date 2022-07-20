import MissionTable from '../components/MissionTable';

const Missions = () => {
  const { missions } = useSelector((state) => state.missions);
  return (
    <section>
      <MissionTable />

    </section>
  );
};
export default Missions;
