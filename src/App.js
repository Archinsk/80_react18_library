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
import ModalButtonRoute from "./routes/ModalButtonRoute";
import NavLinkRoute from "./routes/NavLinkRoute";
import NavItemRoute from "./routes/NavItemRoute";
import NavRoute from "./routes/NavRoute";
import OffcanvasButtonRoute from "./routes/OffcanvasButtonRoute";
import OffcanvasRoute from "./routes/OffcanvasRoute";
import HeaderRoute from "./routes/HeaderRoute";
import ModalRoute from "./routes/ModalRoute";

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
        <Link to="/navbar">NavBar</Link> |{" "}
        <Link to="/modalbutton">ModalButton</Link> |{" "}
        <Link to="/navlink">NavLink</Link> | <Link to="/navitem">NavItem</Link>{" "}
        | <Link to="/nav">Nav</Link> |{" "}
        <Link to="/offcanvasbutton">OffcanvasButton</Link> |{" "}
        <Link to="/offcanvas">Offcanvas</Link> |{" "}
        <Link to="/header">Header</Link> | <Link to="/modal">Modal</Link> |{" "}
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
        <Route path="/modalbutton" element={<ModalButtonRoute />} />
        <Route path="/navlink" element={<NavLinkRoute />} />
        <Route path="/navitem" element={<NavItemRoute />} />
        <Route path="/nav" element={<NavRoute />} />
        <Route path="/offcanvasbutton" element={<OffcanvasButtonRoute />} />
        <Route path="/offcanvas" element={<OffcanvasRoute />} />
        <Route path="/header" element={<HeaderRoute />} />
        <Route path="/modal" element={<ModalRoute />} />
      </Routes>
    </div>
  );
}

export default App;
