const express = require("express");
const router = express.Router();
const { getPrivateRoute } = require("../controllers/private");
const { protect } = require("../middleware/auth");

// http://localhost:5000/api/private/dashboard
router.route("/dashboard/:id").get(protect, getPrivateRoute);

module.exports = router;
