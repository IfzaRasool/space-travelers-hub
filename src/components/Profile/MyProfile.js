/* eslint-disable no-console */
import React from 'react';
import './MyProfile.css';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { missionReducer: missionStore, Rockets: rocketStore } = useSelector(
    (state) => state,
  );

  return (
    <div>
      <div className="myProfile-container">
        <div>
          <h3> My Missions</h3>
          <div className="reserved-container">
            {missionStore
              .filter((mission) => mission.reserved)
              .map((data) => {
                const { id, name } = data;
                return <p className="rocket-name" key={id}>{name}</p>;
              })}
          </div>
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
