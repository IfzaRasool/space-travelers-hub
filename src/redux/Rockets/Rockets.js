const GET_ROCKETS = 'GET_ROCKETS';
const BASE_URL = 'https://api.spacexdata.com/v3';
const END_POINT = 'rockets';

const Reducer = (state = [], action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.rockets.map(
        (rocket) => {
          const {
            id, rocket_name: rocketName, description, flickr_images: flickrImages,
          } = rocket;
          return {
            id, rocketName, description, flickrImages,
          };
        },
      );
    default:
      return state;
  }
};

const getRockets = (rockets) => ({ type: GET_ROCKETS, rockets });

export const getAsyncRockets = () => (dispatch) => {
  fetch(`${BASE_URL}/${END_POINT}`, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(getRockets(data));
    });
};

export default Reducer;
