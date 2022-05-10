import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';
import './Rocket.css';

const Rockets = () => {
  const myRockets = useSelector((state) => state.Rockets);
  return (
    <div className="rocket-container">
      {myRockets.map((rocket) => {
        const {
          id, rocketName, description, flickrImages,
        } = rocket;
        return (
          <Rocket
            key={id}
            name={rocketName}
            description={description}
            flickrImage={flickrImages[0]}
          />
        );
      })}
    </div>
  );
};

export default Rockets;
