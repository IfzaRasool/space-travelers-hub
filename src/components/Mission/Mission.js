import React from 'react';
import { PropTypes } from 'prop-types';
import './Mission.css';

const Mission = ({ missionName, description, joinMission}) => (
  <div>

    <div className="mission-container">
      <div className="mission-head item">{ missionName }</div>
      <div className="description item">{description}</div>
      <div className="status item"><button type="button" className="status-btn">Not a Member</button></div>
      <div className="join-mission item"><button type="button" className="join-mission-btn" onClick={joinMission}>Join Mission</button></div>
    </div>
  </div>
);

Mission.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
