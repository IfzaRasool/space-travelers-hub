import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from './Mission';
import { joinMission, leaveMission } from '../../redux/mission/mission';

const Missions = () => {
  const missionStore = useSelector((state) => state.missionReducer);
  const dispatch = useDispatch();
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
          <Mission
            key={e.id}
            missionName={e.name}
            description={e.description}
            reserved={e.reserved}
            leaveMission={() => dispatch(leaveMission(e.id))}
            joinMission={() => dispatch(joinMission(e.id))}
          />
        ))}
      </div>

    </>
  );
};

export default Missions;
