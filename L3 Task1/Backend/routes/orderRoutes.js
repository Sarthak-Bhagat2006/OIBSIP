const router = require("express").Router();
const auth = require("../middlewares/authMiddleware");
const { placeOrder, myOrders } = require("../controllers/orderController");

router.post("/", auth, placeOrder);
router.get("/my-orders", auth, myOrders);

module.exports = router;