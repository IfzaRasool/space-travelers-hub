import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import { bookRocket, cancelBookRocket } from '../../redux/Rockets/Rockets';
import './Rocket.css';

const Rockets = () => {
  const myRockets = useSelector((state) => state.Rockets);
  const dispatch = useDispatch();
  const reserveRocket = (id) => {
    dispatch(bookRocket(id));
  };
  const cancelReservation = (id) => {
    dispatch(cancelBookRocket(id));
  };
  return (
    <div className="rocket-container">
      {myRockets.map((rocket) => {
        const {
          id, rocketName, description, flickrImages, reserved,
        } = rocket;
        return (
          <Rocket
            key={id}
            name={rocketName}
            description={description}
            flickrImage={flickrImages[0]}
            handleClickProp={reserveRocket}
            handleCancelReservation={cancelReservation}
            id={id}
            reserved={reserved}
          />
        );
      })}
    </div>
  );
};

export default Rockets;
