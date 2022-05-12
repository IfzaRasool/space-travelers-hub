import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/header';
import MyProfile from './components/Profile/MyProfile';
import Rockets from './components/Rockets/Rockets';
import { getAsyncRockets } from './redux/Rockets/Rockets';
import Missions from './components/Mission/Missions';
import { fetchMission } from './redux/mission/mission';

function App() {
  const dispatch = useDispatch();
  fetchMission(dispatch);
  dispatch((getAsyncRockets()));
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/Mission" element={<Missions />} />
          <Route path="/MyProfile" element={<MyProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
