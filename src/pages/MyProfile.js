import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const { missions } = useSelector((state) => state.missions);
  const rocketList = Object.keys(rockets);
  const missionList = Object.keys(missions);
  const reservedRockets = [];
  const joinedMissions = [];

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

  if (missionList.length) {
    missionList.forEach((item) => {
      if (missions[item].joined) {
        joinedMissions.push({
          id: joinedMissions.length + 1,
          name: missions[item].name,
        });
      }
    });

    return (
      <div className="mycontainer">
        <div className="mycontainer-section">
          <h2 className="mycontainer-section__title">
            My Missions
          </h2>
          <ul className="mycontainer-section__box">
            {
              joinedMissions.length ? joinedMissions.map((item) => (
                <li key={item.id} className="element-name">{item.name}</li>
              )) : <li className="element-name">No Missions Ongoing</li>
            }
          </ul>
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
  }
  return false;
};

export default MyProfile;
