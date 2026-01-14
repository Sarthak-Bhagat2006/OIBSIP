const Inventory = require("../Models/inventory");

exports.getOptions = async (req, res) => {
    const inv = await Inventory.findOne();
    const filter = arr => arr.filter(i => i.quantity > 0);

    res.json({
        bases: filter(inv.bases),
        sauces: filter(inv.sauces),
        cheeses: filter(inv.cheeses),
        veggies: filter(inv.veggies),
        meats: filter(inv.meats)
    });
};