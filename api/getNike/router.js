const express = require("express");
const Model = require("./model");
const router = express.Router();

//Get all Nike shoes
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

//Get Men Nike shoes
router.get("/men", async (req, res, next) => {
  try {
    const rows = await Model.getMen();
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Get Women Nike shoes
router.get("/women", async (req, res, next) => {
  try {
    const rows = await Model.getWomen();
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Post a new shoe
router.post("/", async (req, res, next) => {
  try {
    const rows = await Model.postShoe(req.body);
    res.status(201).json(rows);
  } catch (e) {
    next(e);
  }
});

//Delete a shoe
router.delete("/:id", async (req, res, next) => {
  try {
    const rows = await Model.deleteShoe(req.params.id);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Edit a shoe
router.put("/:id", async (req, res, next) => {
  try {
    const rows = await Model.editShoe(req.params.id, req.body);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
