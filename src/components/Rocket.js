import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateRocket } from '../redux/rockets';

const Rocket = (props) => {
  const dispatch = useDispatch();

  const {
    name, description, image, id,
  } = props;

  return (
    <li className="rocket-container">
      <img className="rocket-container__img" src={image} alt={name} />
      <div className="rocket-info">
        <h2 className="rocket-info__title">{name}</h2>
        <p className="rocket-info__description">{description}</p>
        <button className="rocket-info__button" type="button" onClick={() => dispatch(updateRocket(id))}>Test</button>
      </div>
    </li>
  );
};

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Rocket;
