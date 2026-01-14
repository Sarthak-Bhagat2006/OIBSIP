const mongoose = require("mongoose");

const itemSchema = {
    name: String,
    quantity: Number
};

const inventorySchema = new mongoose.Schema({
    bases: [itemSchema],
    sauces: [itemSchema],
    cheeses: [itemSchema],
    veggies: [itemSchema],
    meats: [itemSchema],
    threshold: { type: Number, default: 20 }
});

module.exports = mongoose.model("Inventory", inventorySchema);