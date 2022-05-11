/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';
import Mission from './Mission';

const Missions = () => {
  const missionStore = useSelector((state) => state.missionReducer);
  console.log(missionStore);

  return (
    <div>
      { missionStore.map((e) => (
        <Mission key={e.id} missionName={e.name} description={e.description} />
      ))}
    </div>
  );
};

export default Missions;
