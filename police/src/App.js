import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from './pages/Login';
import DashBoard from './pages/DashBoard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>} />
          <Route exact path="/dashboard" element={<DashBoard />} />
        </Routes>  
      </Router>
    </div>
  );
}

export default App;
