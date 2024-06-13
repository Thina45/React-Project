import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Profile } from "./pages/Profile";
import { Error } from "./pages/Error";
import { NavBar } from "./pages/NavBar";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("Thina");
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home userName={userName} />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/profile"
            element={<Profile userName={userName} setUserName={setUserName} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
