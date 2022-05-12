import PropTypes from 'prop-types';

const Rocket = (props) => {
  const {
    name, description, flickrImage, handleClickProp, handleCancelReservation, id, reserved,
  } = props;

  const cancelBtnStyle = {
    backgroundColor: 'rgb(240, 240, 240)',
    color: 'rgb(26, 26, 26)',
    boxShadow: '2px 1px 5px grey',
    transition: 'all 0.3s ease',
  };

  const reserveBtnStyle = {
    transition: 'all 0.3s',
  };

  return (
    <article className="rocket-card">
      <div className="img-box">
        <img src={flickrImage} alt="rocket" />
      </div>
      <div className="text-box">
        <h2>{name}</h2>
        <p>
          {reserved ? <span className="reserved-badge">Reserved</span> : ''}
          {' '}
          {description}
        </p>
        <button
          onClick={() => {
            if (reserved === true) {
              handleCancelReservation(id);
            } else {
              handleClickProp(id);
            }
          }}
          style={reserved ? cancelBtnStyle : reserveBtnStyle}
          type="button"
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </article>
  );
};

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImage: PropTypes.string.isRequired,
  handleClickProp: PropTypes.func.isRequired,
  handleCancelReservation: PropTypes.func.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default Rocket;
