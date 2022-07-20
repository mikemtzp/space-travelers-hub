import PropTypes from 'prop-types';

const MissionTable = (props) => {
  const { id, name, description } = props;

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{' '}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="mission">
            <td id={id} className="mission-name">{name}</td>
            <td className="mission-description">
              {description}
            </td>
            <td>NOT A MEMBER</td>
            <td><button type="button">Join Mission</button></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

MissionTable.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionTable;
