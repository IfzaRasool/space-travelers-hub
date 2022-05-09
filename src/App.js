import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header";
import Mission from "./components/Mission";
import MyProfile from "./components/MyProfile";
import Rockets from "./components/Rockets";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Rockets/>}></Route>
          <Route path='/mission' element={<Mission/>}></Route>
          <Route path='/myprofile' element={<MyProfile/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
