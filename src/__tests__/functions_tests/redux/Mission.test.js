import deepFreeze from 'deep-freeze';
import missionReducer, { addMission, joinMission, leaveMission } from '../../../redux/mission/mission';

describe('test reducer and action functions', () => {
  let prevState = [];
  let newState = [
    {
      id: 1,
      name: 'Hidden',
      description: 'utuvassxohaosxjhvucyssx',
    },
    {
      id: 2,
      name: 'ISSP',
      description: 'o8hphwx09whx9877g7fd65w',
    },
    {
      id: 3,
      name: 'Kashmir',
      description: 'ujbouodc77t87r',
    },
  ];

  it('test getRocket action', () => {
    deepFreeze(prevState);
    expect(missionReducer(prevState, addMission(newState))).toEqual(newState);
  });

  it('test rocket booking action', () => {
    prevState = newState;
    newState = [
      {
        id: 1,
        name: 'Hidden',
        description: 'utuvassxohaosxjhvucyssx',
      },
      {
        id: 2,
        name: 'ISSP',
        description: 'o8hphwx09whx9877g7fd65w',
        reserved: true,
      },
      {
        id: 3,
        name: 'Kashmir',
        description: 'ujbouodc77t87r',
      },
    ];
    expect(missionReducer(prevState, joinMission(2))).toEqual(newState);
  });

  it('test rocket booking action', () => {
    prevState = newState;
    newState = [
      {
        id: 1,
        name: 'Hidden',
        description: 'utuvassxohaosxjhvucyssx',
      },
      {
        id: 2,
        name: 'ISSP',
        description: 'o8hphwx09whx9877g7fd65w',
        reserved: true,
      },
      {
        id: 3,
        name: 'Kashmir',
        description: 'ujbouodc77t87r',
        reserved: false,
      },
    ];
    expect(missionReducer(prevState, leaveMission(3))).toEqual(newState);
  });
});
