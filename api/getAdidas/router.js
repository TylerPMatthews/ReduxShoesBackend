const express = require("express");
const Model = require("./model");
const router = express.Router();

//Get all Adidas shoes
router.get("/", async (req, res, next) => {
  try {
    const rows = await Model.getAll();
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Get Shoe by ID
router.get("/:id", async (req, res, next) => {
  try {
    const rows = await Model.getByID(req.params.id);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Get Men Adidas shoes
router.get("/men", async (req, res, next) => {
  try {
    const rows = await Model.getMen();
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Get Women Adidas shoes
router.get("/women", async (req, res, next) => {
  try {
    const rows = await Model.getWomen();
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
