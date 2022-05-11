const ADD_MISSION = 'ADD_MISSION';
const BASE_URL = 'https://api.spacexdata.com/v3/missions';

const missionReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_MISSION:
      return (action.payload);

    default:
      return state;
  }
};

export const additem = (payload) => ({
  type: ADD_MISSION,
  payload,
});

export async function fetchMission(dispatch) {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  const missionData = data.map((element) => ({
    id: element.mission_id,
    name: element.mission_name,
    description: element.description,
  }));
  dispatch(additem(missionData));
}

export default missionReducer;
