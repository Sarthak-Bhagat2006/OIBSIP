import { useEffect, useState } from "react";
import API from "../api/api";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.get("/orders/my-orders").then((res) => setOrders(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="fw-bold mb-3">📦 My Orders</h3>

      {orders.map((o) => (
        <div key={o._id} className="card mb-3 shadow-sm">
          <div className="card-body">
            <span className="badge bg-primary mb-2">{o.status}</span>
            <p className="mb-1">
              <b>Base:</b> {o.pizza.base}
            </p>
            <p className="mb-0 text-muted">
              Ordered on {new Date(o.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
