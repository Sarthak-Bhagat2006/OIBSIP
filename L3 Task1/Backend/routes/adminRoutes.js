const router = require("express").Router();
const auth = require("../middlewares/authMiddleware");
const admin = require("../middlewares/adminMiddleware");
const controller = require("../controllers/adminController");

router.post("/inventory", auth, admin, controller.setInventory);
router.get("/inventory", auth, admin, controller.getInventory);
router.get("/orders", auth, admin, controller.getOrders);
router.patch("/orders/:id", auth, admin, controller.updateStatus);

module.exports = router;