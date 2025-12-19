const express = require("express");
const Student = require("../models/Student");
const jwt = require("jsonwebtoken");

const router = express.Router();

const auth = (req, res, next) => {
  try {
    jwt.verify(req.headers.authorization, "secretkey");
    next();
  } catch {
    res.status(401).json("Unauthorized");
  }
};

router.get("/", auth, async (req, res) => {
  res.json(await Student.find());
});

router.post("/", auth, async (req, res) => {
  res.json(await new Student(req.body).save());
});

router.put("/:id", auth, async (req, res) => {
  res.json(await Student.findByIdAndUpdate(req.params.id, req.body));
});

router.delete("/:id", auth, async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json("Deleted");
});

module.exports = router;
