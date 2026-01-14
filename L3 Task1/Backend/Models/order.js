const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    pizza: {
        base: String,
        sauce: String,
        cheese: String,
        veggies: [String],
        meats: [String]
    },
    status: {
        type: String,
        default: "ORDER_RECEIVED"
    }
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);