import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import { bookRocket } from '../../redux/Rockets/Rockets';
import './Rocket.css';

const Rockets = () => {
  const myRockets = useSelector((state) => state.Rockets);
  const dispatch = useDispatch();
  const reserveRocket = (id) => {
    dispatch(bookRocket(id));
  };
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
            handleClickProp={reserveRocket}
            id={id}
          />
        );
      })}
    </div>
  );
};

export default Rockets;
