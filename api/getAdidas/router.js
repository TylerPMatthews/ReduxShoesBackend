// const express = require("express");
// const Model = require("./model");
// const router = express.Router();

// //Get all Adidas shoes
// router.get("/", async (req, res, next) => {
//   try {
//     const rows = await Model.getAll();
//     res.status(200).json(rows);
//   } catch (e) {
//     next(e);
//   }
// });

// //Get Shoe by ID
// router.get("/:id", async (req, res, next) => {
//   try {
//     const rows = await Model.getByID(req.params.id);
//     res.status(200).json(rows);
//   } catch (e) {
//     next(e);
//   }
// });

// //Get Men Adidas shoes
// router.get("/menadidas", async (req, res, next) => {
//   try {
//     const rows = await Model.getMen();
//     res.status(200).json(rows);
//   } catch (e) {
//     next(e);
//   }
// });

// //Get Women Adidas shoes
// router.get("/womenadidas", async (req, res, next) => {
//   try {
//     const rows = await Model.getWomen();
//     res.status(200).json(rows);
//   } catch (e) {
//     next(e);
//   }
// });

// //Error handler
// router.use((err, req, res) => {
//   res.status(500).json({
//     message: " Adidas server error!!!",
//     error: err.message,
//   });
// });

// module.exports = router;
