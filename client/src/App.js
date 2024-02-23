import React from 'react';
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes,Route  } from 'react-router-dom';
import Registration from "./components/Registration";
import UpdateProfile from "./components/UpdateProfile";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Detailpage from "./components/Detailpage";
function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signin"  element={<Login />}/>
          <Route path="/signup"  element={<Registration />}/>
          <Route path="/profile"  element={<UpdateProfile />}/>
          <Route path="/about"  element={<About />}/>
          <Route path="/detail" element={<Detailpage />} />
        </Routes>
    </Router>
  );
}

export default App;
