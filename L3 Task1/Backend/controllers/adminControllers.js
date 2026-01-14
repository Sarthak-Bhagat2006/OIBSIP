const Inventory = require("../Models/inventory");
const Order = require("../Models/order");

exports.setInventory = async (req, res) => {
    let inv = await Inventory.findOne();
    if (!inv) inv = await Inventory.create(req.body);
    else Object.assign(inv, req.body);

    await inv.save();
    res.json({ message: "Inventory updated" });
};

exports.getInventory = async (req, res) => {
    const inv = await Inventory.findOne();
    res.json(inv);
};

exports.getOrders = async (req, res) => {
    const orders = await Order.find().populate("userId", "name email");
    res.json(orders);
};

exports.updateStatus = async (req, res) => {
    await Order.findByIdAndUpdate(req.params.id, {
        status: req.body.status
    });
    res.json({ message: "Status updated" });
};