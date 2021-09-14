import { BrowserRouter, Route } from "react-router-dom";
import Beranda from "./screens/DashboardKaryawan/Beranda";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Route component={Beranda} path="/Beranda" />
    </BrowserRouter>
  );
}
