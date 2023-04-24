import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import Userlist from "./Userlist";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Createuser from "./Createuser";
import Products from "./Products";
import CreateProduct from "./CreateProduct";

function App() {
  return (
    <Router>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className="container-fluid">
              {/* <Dashboard></Dashboard> */}
              {/* <Userlist></Userlist> */}
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/users" element={<Userlist />}></Route>
                <Route path="/users/Create" element={<Createuser />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route
                  path="/products/CreateProduct"
                  element={<CreateProduct />}
                ></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
