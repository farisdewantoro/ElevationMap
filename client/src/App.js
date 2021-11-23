import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import DashboardHOC from "./Pages/Dashboard/DashboardHOC";
import Elevation from "./Pages/Dashboard/Elevation/Elevation";
import Home from "./Pages/Dashboard/Home/Home";
import Login from "./Pages/Login/Login";
import Kelurahan from "./Pages/Dashboard/Kelurahan/Kelurahan";
import Map from "./Pages/Dashboard/Map/Map";
import './App.css'

const AppRoute = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<DashboardHOC />}>
        <Route index element={<Home/>} />
        <Route path="kelurahan" element={<Kelurahan />} />
        <Route path="elevation" element={<Elevation />} />
        <Route path="map" element={<Map />} />
      </Route>
    </Routes>
  );
};

export default function App() {
  return (
    <Router>
        <AppRoute />
    </Router>
  );
}
