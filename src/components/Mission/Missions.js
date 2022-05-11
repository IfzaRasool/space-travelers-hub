import React from 'react';
import { useSelector } from 'react-redux';
import Mission from './Mission';

const Missions = () => {
  const missionStore = useSelector((state) => state.missionReducer);

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
