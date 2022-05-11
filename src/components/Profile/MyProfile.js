import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const appStates = useSelector((state) => state);
  const { Rockets } = appStates;
  return (
    <div className="profile-container">
      <section>
        <h2>My Missions</h2>
      </section>
      <section>
        <h2>My Rockets</h2>
        {Rockets.map((rocket) => {
          if (rocket.reserved) {
            return <p>{rocket.rocketName}</p>;
          }
          return '';
        })}
      </section>
    </div>
  );
};

export default MyProfile;
