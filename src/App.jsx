
import React from "react";
import Popovers from "./Popover.jsx";
import Overview from "./Overview.jsx";
import Cards from "./Card.jsx"
import Tables from "./Table.jsx"
import TextFields from "./Textfield.jsx";
import Dropdown from "./Dropdown.jsx";
import Menubars from "./Menubar.jsx";
import "./App.css";

function App() {
  return (
    <div className="dash">
      <header className="header">
        <div className="first">
          <Dropdown />
          <nav className="nav">
            <ul className="list">
              <li className="list-item">Overview</li>
              <li className="list-item">Customers</li>
              <li className="list-item">Products</li>
              <li className="list-item">Settings</li>
            </ul>
          </nav>
        </div>
        <div className="second">
          <TextFields />
          <Popovers />
        </div>
      </header>
      <div className="innerDash">
        <div className="dashButton">
          <h2 className="dashboard">Dashboard</h2>
          <button className="button">Download</button>
        </div>
          <Menubars />
        <div className="cards">
          <Cards />
        </div>
        <div className="overviewTable">
          <Overview />
          <Tables />
        </div>
      </div>
    </div>
  );
}

export default App;
