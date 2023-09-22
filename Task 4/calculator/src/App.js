//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./html/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
