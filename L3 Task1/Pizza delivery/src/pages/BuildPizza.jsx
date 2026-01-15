import { useEffect, useState } from "react";
import API from "../api/api";

export default function BuildPizza() {
  const [options, setOptions] = useState({});
  const [pizza, setPizza] = useState({
    base: "",
    sauce: "",
    cheese: "",
    veggies: [],
    meats: [],
  });

  useEffect(() => {
    API.get("/pizza/options").then((res) => setOptions(res.data));
  }, []);

  const placeOrder = async () => {
    await API.post("/orders", pizza);
    alert("🍕 Order placed successfully!");
  };

  const Select = ({ label, items, onChange }) => (
    <div className="mb-3">
      <label className="form-label fw-semibold">{label}</label>
      <select className="form-select" onChange={onChange}>
        <option>Select {label}</option>
        {items?.map((i) => (
          <option key={i.name} value={i.name}>
            {i.name}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="container mt-4">
      <div className="card shadow-lg">
        <div className="card-header bg-dark text-white fw-bold">
          🍕 Build Your Pizza
        </div>

        <div className="card-body">
          <Select
            label="Base"
            items={options.bases}
            onChange={(e) => setPizza({ ...pizza, base: e.target.value })}
          />

          <Select
            label="Sauce"
            items={options.sauces}
            onChange={(e) => setPizza({ ...pizza, sauce: e.target.value })}
          />

          <Select
            label="Cheese"
            items={options.cheeses}
            onChange={(e) => setPizza({ ...pizza, cheese: e.target.value })}
          />

          <button className="btn btn-success w-100 mt-3" onClick={placeOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
