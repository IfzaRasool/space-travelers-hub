const ADD_MISSION = 'ADD_MISSION';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';
const BASE_URL = 'https://api.spacexdata.com/v3/missions';

const missionReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_MISSION:
      return (action.payload);

    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.id === action.id) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.id === action.id) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
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

export const missionStatus = (id) => ({
  type: JOIN_MISSION,
  id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  id,
});

export const joinMission = (id) => (dispatch) => {
  dispatch(missionStatus(id));
};

export const leftMission = (id) => (dispatch) => {
  dispatch(leaveMission(id));
};

export default missionReducer;
