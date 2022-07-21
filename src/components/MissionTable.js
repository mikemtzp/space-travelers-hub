import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { setStatus } from '../redux/missions';

const MissionTable = (props) => {
  const dispatch = useDispatch();

  const {
    id, name, description, joined,
  } = props;

  return (
    <>

      <tbody>
        <tr className="mission">
          <td id={id} className="mission-name">{name}</td>
          <td className="mission-description">
            {description}
          </td>
          <td>{!joined ? 'Not a member' : 'Member'}</td>
          <td><button onClick={() => dispatch(setStatus(id))} type="button">{!joined ? 'Join Mission' : 'Leave Mission'}</button></td>
        </tr>
      </tbody>
    </>
  );
};

MissionTable.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  joined: PropTypes.bool.isRequired,
};

export default MissionTable;
