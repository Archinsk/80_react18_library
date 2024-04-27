import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import IconRoute from "./routes/IconRoute";
import BadgeRoute from "./routes/BadgeRoute";
import DropdownItemRoute from "./routes/DropdownItemRoute";
import ButtonLinkRoute from "./routes/ButtonLinkRoute";
import ButtonRoute from "./routes/ButtonRoute";
import CollapseRoute from "./routes/CollapseRoute";
import CollapseButtonRoute from "./routes/CollapseButtonRoute";
import NavBarBrandRoute from "./routes/NavBarBrandRoute";
import NavBarRoute from "./routes/NavBarRoute";

function App() {
  return (
    <div className="App">
      <div>React 18</div>
      <button className="btn btn-primary">Button</button>
      <nav>
        <Link to="/">Home</Link> | <Link to="/icon">Icon</Link> |{" "}
        <Link to="/badge">Badge</Link> |{" "}
        <Link to="/dropdownitem">DropdownItem</Link> |{" "}
        <Link to="/buttonlink">ButtonLink</Link> |{" "}
        <Link to="/button">Button</Link> | <Link to="/collapse">Collapse</Link>{" "}
        | <Link to="/collapsebutton">CollapseButton</Link> |{" "}
        <Link to="/navbarbrand">NavBarBrand</Link> |{" "}
        <Link to="/navbar">NavBar</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/icon" element={<IconRoute />} />
        <Route path="/badge" element={<BadgeRoute />} />
        <Route path="/dropdownitem" element={<DropdownItemRoute />} />
        <Route path="/buttonlink" element={<ButtonLinkRoute />} />
        <Route path="/button" element={<ButtonRoute />} />
        <Route path="/collapse" element={<CollapseRoute />} />
        <Route path="/collapsebutton" element={<CollapseButtonRoute />} />
        <Route path="/navbarbrand" element={<NavBarBrandRoute />} />
        <Route path="/navbar" element={<NavBarRoute />} />
      </Routes>
    </div>
  );
}

export default App;
