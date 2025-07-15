const express = require("express");
const router = express.Router();
const User = require("../models/User");


router.post("/", async (req, res) => {
  try {
    const { fullName, gmail, password, role } = req.body;

    
    if (!gmail || !password) {
      return res.status(400).json({ error: "gmail və şifrə tələb olunur" });
    }

 
    const existingUser = await User.findOne({ gmail });
    if (existingUser) {
      return res.status(409).json({ error: "Bu gmail artıq qeydiyyatdan keçib" });
    }

    const newUser = new User({ fullName, gmail, password, role });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Server xətası", message: err.message });
  }
});


router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "İstifadəçi tapılmadı" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: "Server xətası", message: err.message });
  }
});

module.exports = router;
