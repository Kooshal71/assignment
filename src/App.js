import "./App.css";
import Signin from "./components/Signin";
import Register from "./components/Register";
import Reset from "./components/Reset";
import { HashRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset_password" element={<Reset />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
