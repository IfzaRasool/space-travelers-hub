import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Rocket = (props) => {
  const [reserved, setReserved] = useState(false);
  const {
    name, description, flickrImage, handleClickProp, id,
  } = props;
  return (
    <article className="rocket-card">
      <div className="img-box">
        <img src={flickrImage} alt="rocket" />
      </div>
      <div className="text-box">
        <h2>{name}</h2>
        <p>{description}</p>
        <button
          onClick={() => {
            setReserved(!reserved);
            handleClickProp(id);
          }}
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
  id: PropTypes.number.isRequired,
};

export default Rocket;
