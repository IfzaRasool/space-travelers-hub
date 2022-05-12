/* eslint-disable no-console */
import React from 'react';
import './MyProfile.css';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { missionReducer: missionStore, Rockets: rocketStore } = useSelector(
    (state) => state,
  );

  const missionName = () => {
    console.log('profile');
    // const result = missionStore.filter((name) => (name.id));
    // console.log(result);
  };

  return (
    <div>
      <div className="myProfile-container">
        <div className="mission-item">
          <h3> My Missions</h3>
          <h6 onLoad={missionName()}>{missionStore.map((e) => e.name)}</h6>
        </div>
        <div>
          <h3>My Rockets</h3>
          <div className="reserved-container">
            {rocketStore
              .filter((rocket) => rocket.reserved)
              .map((data) => {
                const { id, rocketName } = data;
                return <p className="rocket-name" key={id}>{rocketName}</p>;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
