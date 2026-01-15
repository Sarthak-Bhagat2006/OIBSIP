import { useEffect, useState } from "react";
import API from "../api/api";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.get("/admin/orders")
      .then((res) => setOrders(res.data))
      .catch(() => alert("Admin access required"));
  }, []);

  const updateStatus = async (id, status) => {
    await API.patch(`/admin/orders/${id}`, { status });
    setOrders(orders.map((o) => (o._id === id ? { ...o, status } : o)));
  };

  return (
    <div className="container mt-4">
      <h3>Admin Orders</h3>

      {orders.map((order) => (
        <div className="card mb-3" key={order._id}>
          <div className="card-body">
            <p>
              <b>User:</b> {order.userId?.name}
            </p>
            <p>
              <b>Pizza Base:</b> {order.pizza.base}
            </p>
            <p>
              <b>Status:</b> {order.status}
            </p>

            <select
              className="form-select"
              value={order.status}
              onChange={(e) => updateStatus(order._id, e.target.value)}
            >
              <option>ORDER_RECEIVED</option>
              <option>IN_KITCHEN</option>
              <option>OUT_FOR_DELIVERY</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  );
}
