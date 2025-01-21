const express = require("express");
const {
  getLandingPage,
  addLandingPage,
  updateLandingPage,
  getSingleLandingPage,
  deleteLandingPage,
  deleteAllLandingPage,
} = require("../controllers/landing-page");
const router = express.Router();
const { addLandingPageMiddleWare } = require("../middleware/landing-page");

router.get("/", getLandingPage);
router.get("/:id", getSingleLandingPage);
router.post("/add", addLandingPageMiddleWare, addLandingPage);
router.put("/update/:id", updateLandingPage);
router.delete("/delete/:id", deleteLandingPage);
router.delete("/allDelete", deleteAllLandingPage);

module.exports = router;
