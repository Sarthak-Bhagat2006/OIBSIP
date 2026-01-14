const Order = require("../Models/order");
const Inventory = require("../Models/inventory");

exports.placeOrder = async (req, res) => {
    const inv = await Inventory.findOne();
    const { base, sauce, cheese, veggies, meats } = req.body;

    const reduce = (arr, name) => {
        const item = arr.find(i => i.name === name);
        if (!item || item.quantity <= 0) throw "Out of stock";
        item.quantity--;
    };

    try {
        reduce(inv.bases, base);
        reduce(inv.sauces, sauce);
        reduce(inv.cheeses, cheese);
        veggies.forEach(v => reduce(inv.veggies, v));
        meats.forEach(m => reduce(inv.meats, m));

        await inv.save();

        await Order.create({
            userId: req.user.id,
            pizza: { base, sauce, cheese, veggies, meats }
        });

        res.json({ message: "Order placed" });
    } catch {
        res.status(400).json({ message: "Item out of stock" });
    }
};

exports.myOrders = async (req, res) => {
    const orders = await Order.find({ userId: req.user.id });
    res.json(orders);
};