import { ReactElement } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Logo from "./assets/react.svg";

function App(): ReactElement {
  return (
    <Router>
      <Navbar navLinks={["Home", "About"]} logo={Logo} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
