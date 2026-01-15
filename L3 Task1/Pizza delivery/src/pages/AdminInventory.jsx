import { useEffect, useState } from "react";
import API from "../api/api";

export default function AdminInventory() {
  const [inventory, setInventory] = useState(null);

  useEffect(() => {
    API.get("/admin/inventory")
      .then((res) => setInventory(res.data))
      .catch(() => alert("Admin access required"));
  }, []);

  if (!inventory) return <p className="text-center mt-4">Loading...</p>;

  const renderList = (title, items) => (
    <div className="mb-3">
      <h5>{title}</h5>
      <ul className="list-group">
        {items.map((i) => (
          <li
            key={i.name}
            className="list-group-item d-flex justify-content-between"
          >
            <span>{i.name}</span>
            <span>{i.quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="container mt-4">
      <h3>Admin Inventory</h3>
      {renderList("Bases", inventory.bases)}
      {renderList("Sauces", inventory.sauces)}
      {renderList("Cheeses", inventory.cheeses)}
      {renderList("Veggies", inventory.veggies)}
      {renderList("Meats", inventory.meats)}
    </div>
  );
}
