import deepFreeze from 'deep-freeze';
import Rocket, { getRockets, cancelBookRocket, bookRocket } from '../../../redux/Rockets/Rockets';

describe('test reducer and action functions', () => {
  let prevState = [];
  let newState = [
    {
      id: 1,
      rocketName: 'spaceR',
      description: 'utuvassxohaosxjhvucyssx',
      flickrImages: 'iuih99iwtxf7wxjhhjhvs',
    },
    {
      id: 2,
      rocketName: 'ship5',
      description: 'o8hphwx09whx9877g7fd65w',
      flickrImages: 'ugiugsx7xuqgqx686tr8',
    },
    {
      id: 3,
      rocketName: 'craftUR',
      description: 'ujbouodc77t87r',
      flickrImages: 'kubug97g87a67f7qwwx5r7',
    },
  ];

  it('test getRocket action', () => {
    const apiData = [
      {
        id: 1,
        rocket_name: 'spaceR',
        description: 'utuvassxohaosxjhvucyssx',
        flickr_images: 'iuih99iwtxf7wxjhhjhvs',
      },
      {
        id: 2,
        rocket_name: 'ship5',
        description: 'o8hphwx09whx9877g7fd65w',
        flickr_images: 'ugiugsx7xuqgqx686tr8',
      },
      {
        id: 3,
        rocket_name: 'craftUR',
        description: 'ujbouodc77t87r',
        flickr_images: 'kubug97g87a67f7qwwx5r7',
      },
    ];

    deepFreeze(prevState);
    expect(Rocket(prevState, getRockets(apiData))).toEqual(newState);
  });

  it('test rocket booking action', () => {
    prevState = newState;
    newState = [
      {
        id: 1,
        rocketName: 'spaceR',
        description: 'utuvassxohaosxjhvucyssx',
        flickrImages: 'iuih99iwtxf7wxjhhjhvs',
      },
      {
        id: 2,
        rocketName: 'ship5',
        description: 'o8hphwx09whx9877g7fd65w',
        flickrImages: 'ugiugsx7xuqgqx686tr8',
        reserved: true,
      },
      {
        id: 3,
        rocketName: 'craftUR',
        description: 'ujbouodc77t87r',
        flickrImages: 'kubug97g87a67f7qwwx5r7',
      },
    ];
    expect(Rocket(prevState, bookRocket(2))).toEqual(newState);
  });

  it('test rocket booking action', () => {
    prevState = newState;
    newState = [
      {
        id: 1,
        rocketName: 'spaceR',
        description: 'utuvassxohaosxjhvucyssx',
        flickrImages: 'iuih99iwtxf7wxjhhjhvs',
      },
      {
        id: 2,
        rocketName: 'ship5',
        description: 'o8hphwx09whx9877g7fd65w',
        flickrImages: 'ugiugsx7xuqgqx686tr8',
        reserved: true,
      },
      {
        id: 3,
        rocketName: 'craftUR',
        description: 'ujbouodc77t87r',
        flickrImages: 'kubug97g87a67f7qwwx5r7',
        reserved: false,
      },
    ];
    expect(Rocket(prevState, cancelBookRocket(3))).toEqual(newState);
  });
});
