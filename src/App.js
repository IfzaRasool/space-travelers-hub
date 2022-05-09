import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Mission from './components/Mission';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/Mission" element={<Mission />} />
          <Route path="/MyProfile" element={<MyProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
