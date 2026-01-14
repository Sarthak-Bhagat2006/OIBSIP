const router = require("express").Router();
const auth = require("../middlewares/authMiddleware");
const { getOptions } = require("../controllers/pizzaController");

router.get("/options", auth, getOptions);

module.exports = router;