import PropTypes from 'prop-types';

const Rocket = (props) => {
  const {
    name, description, image,
  } = props;

  return (
    <li className="rocket-container">
      <img className="rocket-container__img" src={image} alt={name} />
      <div className="rocket-info">
        <h2 className="rocket-info__title">{name}</h2>
        <p className="rocket-info__description">{description}</p>
        <button className="rocket-info__button" type="button">Test</button>
      </div>
    </li>
  );
};

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Rocket;
