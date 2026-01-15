import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import BuildPizza from "./pages/BuildPizza";
import MyOrders from "./pages/MyOrders";
import AdminInventory from "./pages/AdminInventory";
import AdminOrders from "./pages/AdminOrders";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/build" element={<BuildPizza />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/admin/inventory" element={<AdminInventory />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
      </Routes>
    </BrowserRouter>
  );
}
