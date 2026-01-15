import { useEffect, useState } from "react";
import API from "../api/api";

/* ---------------- DUMMY INVENTORY ---------------- */
const dummyInventory = {
  bases: [
    { name: "Thin Crust", quantity: 50 },
    { name: "Cheese Burst", quantity: 40 },
    { name: "Whole Wheat", quantity: 30 },
  ],
  sauces: [
    { name: "Tomato", quantity: 60 },
    { name: "BBQ", quantity: 35 },
    { name: "Pesto", quantity: 25 },
  ],
  cheeses: [
    { name: "Mozzarella", quantity: 45 },
    { name: "Cheddar", quantity: 30 },
  ],
  veggies: [
    { name: "Onion", quantity: 70 },
    { name: "Capsicum", quantity: 50 },
    { name: "Olives", quantity: 40 },
  ],
  meats: [
    { name: "Chicken", quantity: 35 },
    { name: "Pepperoni", quantity: 20 },
  ],
};

/* ---------------- HELPERS ---------------- */
const getRandomPrice = () => Math.floor(Math.random() * 200) + 100;
const getRandomRating = () => (Math.random() * 2 + 3).toFixed(1);

const imageMap = {
  bases: [
    "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
    "https://images.unsplash.com/photos/pizza-with-cheese-and-cheese-EpgkrmHkuFY",
    "https://images.unsplash.com/photo-1548365328-8b849e6d6f59",
  ],
  sauces: [
    "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    "https://images.unsplash.com/photo-1625944525533-473f1a3a1a1d",
    "https://images.unsplash.com/photo-1604908554026-0f36c6f6d8b6",
  ],
  cheeses: [
    "https://images.unsplash.com/photo-1544025162-d76694265947",
    "https://images.unsplash.com/photo-1608198093002-ad4e005484ec",
  ],
  veggies: [
    "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38",
    "https://images.unsplash.com/photo-1506806732259-39c2d0268443",
  ],
  meats: [
    "https://images.unsplash.com/photo-1601924638867-3ec62f6b79b6",
    "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
  ],
};

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get("/pizza/options")
      .then((res) => {
        // if backend sends empty inventory
        const isEmpty =
          !res.data || Object.values(res.data).every((arr) => arr.length === 0);

        setData(isEmpty ? dummyInventory : res.data);
      })
      .catch(() => {
        // fallback if backend is down
        setData(dummyInventory);
      });
  }, []);

  if (!data) {
    return (
      <div className="text-center mt-5 fw-semibold">
        Loading pizza options...
      </div>
    );
  }

  const Section = ({ title, items, type }) => (
    <div className="col-12 mb-5">
      <h4 className="fw-bold mb-3">{title}</h4>

      <div className="row">
        {items.map((i, index) => (
          <div key={i.name} className="col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <img
                src={imageMap[type][index % imageMap[type].length]}
                className="card-img-top"
                alt={i.name}
                style={{ height: "150px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h6 className="fw-bold">{i.name}</h6>

                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="text-success fw-semibold">
                    ₹{getRandomPrice()}
                  </span>
                  <span className="badge bg-warning text-dark">
                    ⭐ {getRandomRating()}
                  </span>
                </div>

                <span className="badge bg-success">In Stock: {i.quantity}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mt-4">
      <div className="mb-4">
        <h2 className="fw-bold">🍕 Explore Pizza Ingredients</h2>
        <p className="text-muted">
          Fresh ingredients available today. Build your perfect pizza!
        </p>
      </div>

      <Section title="Pizza Bases" items={data.bases} type="bases" />
      <Section title="Sauces" items={data.sauces} type="sauces" />
      <Section title="Cheeses" items={data.cheeses} type="cheeses" />
      <Section title="Veggies" items={data.veggies} type="veggies" />
      <Section title="Meats" items={data.meats} type="meats" />
    </div>
  );
}
