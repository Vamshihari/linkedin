/**
 * @author: Sai Karthik
 * @author: Siva Kumar
 *
 */
const express = require("express");
const router = express.Router();
const User = require("../models/schema");

/**
 * Getting All the Schema
 */
router.get("/", async (req, res) => {
  try {
    const data = await User.find();
    res.json(data); //
  } catch (err) {
    res.send("Error", err);
  }
});

/**
 * For Getting Paticular Schema
 */

router.get("/:id", async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    res.json(data);
  } catch (err) {
    res.send("invalid id"); // if invalid id is given it should throw this error
  }
});

/**
 * Post Schema
 */
router.post("/register", async (req, res) => {
  console.log("body", req.body);
  User.insertMany(req.body, (err, data) => res.status(200).send(data));
  //    res.send("done")
});

/**
 * Patch Update
 */
// User contain schema
router.patch("/:id", async (req, res) => {
  try {
    const getDataById = await User.findById(req.params.id); //Grabs schema by paticular id   
    getDataById.name = req.body.name;
    const data = await getDataById.save();
    res.json(data);
  } catch (err) {
    res.sendStatus(404);
  }
});

/**
 * Delet entire Schema
 */
router.delete("/", async (req, res) => {
  try {
    const data = await User.deleteMany();
    res.json("successfully deleted"); //
    res.sendStatus(200);
  } catch (err) {
    res.send(err);
  }
});

/**
 * Delete by Paticular id
 */
router.delete("/:id", async (req, res) => {
  try {
    const a = await User.findByIdAndDelete(req.params.id);
    res.send("sucessfully deleted");
    res.sendStatus(200);
  } catch (err) {
    res.send();
  }
});

module.exports = router;
