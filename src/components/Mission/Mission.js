import React from 'react';
import { PropTypes } from 'prop-types';
import './Mission.css';

const Mission = ({ missionName, description }) => (
  <div>

    <div className="mission-container">
      <div className="mission-head">{ missionName }</div>
      <div className="description">{description}</div>
      <div className="status">Status</div>
      <div className="join-mission" />
    </div>

  </div>
);

Mission.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
