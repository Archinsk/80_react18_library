import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import IconRoute from "./routes/IconRoute";
import ButtonRoute from "./routes/ButtonRoute";

function App() {
  return (
    <div className="App">
      <div>React 18</div>
      <button className="btn btn-primary">Button</button>
      <nav>
        <Link to="/">Home</Link> | <Link to="/icon">Icon</Link> |{" "}
        <Link to="/button">Button</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/icon" element={<IconRoute />} />
        <Route path="/button" element={<ButtonRoute />} />
      </Routes>
    </div>
  );
}

export default App;
