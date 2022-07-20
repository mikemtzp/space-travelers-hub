import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from '../components/Rocket';

const Rockets = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const rocketList = Object.keys(rockets);

  return (
    <ul style={{ padding: '2rem' }}>
      {
        rocketList ? rocketList.map((rocket) => (
          <Rocket
            name={rockets[rocket].name}
            description={rockets[rocket].description}
            image={rockets[rocket].image}
            reserved={rockets[rocket].reserved}
            id={rockets[rocket].id}
            key={rockets[rocket].id}
          />
        )) : <li>For the moment there are no rockets available</li>
      }
    </ul>
  );
};

export default Rockets;
