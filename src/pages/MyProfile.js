import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const rocketList = Object.keys(rockets);
  const reservedRockets = [];

  if (rocketList.length) {
    rocketList.forEach((item) => {
      if (rockets[item].reserved) {
        reservedRockets.push({
          id: reservedRockets.length + 1,
          name: rockets[item].name,
        });
      }
    });
  }

  return (
    <div className="mycontainer">
      <div className="mycontainer-section">
        <h2 className="mycontainer-section__title">
          My Missions
        </h2>
      </div>
      <div className="mycontainer-section">
        <h2 className="mycontainer-section__title">
          My Rockets
        </h2>
        <ul className="mycontainer-section__box">
          {
            reservedRockets.length ? reservedRockets.map((item) => (
              <li key={item.id} className="element-name">{item.name}</li>
            )) : <li className="element-name">No rockets selected</li>
          }
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
