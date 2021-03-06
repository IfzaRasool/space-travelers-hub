import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../redux/configureStore';
import MyProfile from '../../components/Profile/MyProfile';
import Rockets from '../../components/Rockets/Rockets';
import Rocket from '../../components/Rockets/Rocket';
import Missions from '../../components/Mission/Missions';
import Mission from '../../components/Mission/Mission';

describe('test snapshots for all components', () => {
  const myRockets = [];
  const myMissions = [];
  it('renders rocket page correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rockets>
            {myRockets.forEach(() => renderer.create(<Rocket />).toJSON())}
          </Rockets>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders mission page correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Missions>
            {myMissions.forEach(() => renderer.create(<Mission />).toJSON())}
          </Missions>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Profile correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MyProfile />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders single rocket correctly', () => {
    const tree = renderer.create(<Rocket />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders single mission correctly', () => {
    const tree = renderer.create(<Mission />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
