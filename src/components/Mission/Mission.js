import React from 'react';
import { PropTypes } from 'prop-types';
import './Mission.css';

const Mission = ({
  missionName, description, joinMission, reserved, leaveMission,
}) => {
  const missionLeave = {
    padding: '10px 15px',
    backgroundColor: 'darkcyan',
    color: 'rgb(240, 240, 240)',
    border: 'none',
    borderRadius: '4px',
    fontSize: '0.91rem',
    cursor: 'pointer',
  };

  const missionJoin = {
    color: 'red',
    backgroundColor: 'transparent',
    border: '2px solid darkcyan',
  };

  return (
    <div>

      <div className="mission-container">
        <div className="mission-head item">{ missionName }</div>
        <div className="description item">{description}</div>
        <div className="status item">
          <button type="button" style={reserved ? missionJoin : missionLeave}>
            {reserved ? 'Active Member' : 'Not A Member' }
          </button>

        </div>
        <div className="join-mission item">
          <button
            style={reserved ? missionJoin : missionLeave}
            type="button"
            className="join-mission-btn"
            onClick={() => {
              if (reserved !== true) {
                joinMission();
              } else {
                leaveMission();
              }
            }}
          >
            {reserved ? 'leave Mission' : 'Join Mission' }

          </button>
        </div>
      </div>
    </div>
  );
};

Mission.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  joinMission: PropTypes.func.isRequired,
  leaveMission: PropTypes.func.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Mission;
