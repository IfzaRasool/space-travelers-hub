/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';
import Mission from './Mission';

const Missions = () => {
  const missionStore = useSelector((state) => state.missionReducer);
  console.log(missionStore);

  return (

    <>
      <div className="mission-container">
        <h4> Mission</h4>
        <h4> Description</h4>
        <h4> Status</h4>
        <div />
      </div>
      <div>
        {missionStore.map((e) => (
          <Mission key={e.id} missionName={e.name} description={e.description} />
        ))}
      </div>

    </>
  );
};

export default Missions;
