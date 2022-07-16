import "./App.css";
import Signin from "./components/Signin";
import Register from "./components/Register";
import { HashRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="https://kooshal71.github.io/assignment/login"
          element={<Signin />}
        />
        <Route
          path="https://kooshal71.github.io/assignment/register"
          element={<Register />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
